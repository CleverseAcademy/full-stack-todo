import { withFormik } from 'formik'
import useTodo from '../hooks/todo.hook'
import { isDataIsReady } from '../types/typecheck'
import { TodoSubmissionProps } from '../form/TodoFormProps.type'
import TodoFormFields from '../types/todo.form'
import TodoForm from '../form/TodoForm'
import TodoCard from '../components/TodoCard'

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

      <div className="flex flex-col gap-7 w-2/3 mx-auto">
        <p className="font-bold text-2xl text-left">Todo List</p>
        {todoList.map((todoContent) => (
          <TodoCard key={todoContent.id} todo={todoContent} />
        ))}
      </div>
    </>
  )
}
export default Home
