import { withFormik } from 'formik'
import useTodo from '../hooks/todo.hook'
import { isDataIsReady } from '../types/typecheck'
import { TodoSubmissionProps } from '../form/TodoFormProps.type'
import TodoFormFields from '../types/todo.form'
import TodoForm from '../form/TodoForm'

const NewTodoForm = withFormik<TodoSubmissionProps<'create'>, TodoFormFields>({
  handleSubmit: (values, { props: { submitNewTodo } }) => submitNewTodo(values),
  displayName: 'AddTodoForm',
  mapPropsToValues: () => ({ title: '' }),
  validate: (values, props) => {
    const error: { [k in keyof typeof values]?: string } = {}
    if (!values.title) error.title = 'Required'
    if (values.dueDate && new Date(values.dueDate) < new Date())
      error.dueDate = 'Due date must not be past'
    return error
  },
})(TodoForm<'create'>)

const Home = () => {
  const { addTodo, isLoading, error, todoList } = useTodo()

  if (!isDataIsReady(todoList, isLoading, error)) return `${error}`

  return (
    <>
      <NewTodoForm type="create" submitNewTodo={addTodo} />

      {todoList.map((todoContent) => (
        <div key={todoContent.id}>
          <p>{todoContent.title}</p>
        </div>
      ))}
    </>
  )
}
export default Home
