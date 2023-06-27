import { withFormik } from 'formik'
import './App.css'
import TodoForm from './form/TodoForm'
import { TodoSubmissionProps } from './form/TodoFormProps.type'
import useTodo from './hooks/todo.hook'
import './index.css'
import TodoFormFields from './types/todo.form'
import { isDataIsReady } from './types/typecheck'

const NewTodoForm = withFormik<TodoSubmissionProps<'create'>, TodoFormFields>({
  handleSubmit: (values, { props: { submitNewTodo } }) => submitNewTodo(values),
  displayName: 'AddTodoForm',
  mapPropsToValues: () => ({ title: '' }),
  validate: (values) => {
    const error: {[k in keyof typeof values]?: string} = {}
    if(!values.title) error.title = "Required"
    if(values.dueDate && new Date(values.dueDate) < new Date()) error.dueDate = "Due date must not be past"
    return error
  },
})(TodoForm<'create'>)

const EditTodoForm = withFormik<TodoSubmissionProps<'update'>, TodoFormFields>({
  handleSubmit: (
    values,
    {
      props: {
        updateExistingTodo,
        initialValue: { id },
      },
    },
  ) => updateExistingTodo({ id, ...values }),
  displayName: 'EditTodoForm',
  mapPropsToValues: ({ initialValue: { id, ...rest } }) => rest,
})(TodoForm<'update'>)

function App() {
  const {
    addTodo,
    modifyTodo,
    isLoading,
    error,
    todoList,
  } = useTodo()
  if (!isDataIsReady(todoList, isLoading, error)) return `${error}`
  return (
    <>
      <NewTodoForm type="create" submitNewTodo={addTodo} />

      {todoList.map((todoContent) => (
        <div key={todoContent.id}>
          <p>{JSON.stringify(todoContent)}</p>
          <EditTodoForm
            type="update"
            updateExistingTodo={modifyTodo}
            initialValue={todoContent}
          />
        </div>
      ))}
    </>
  )
}

export default App
