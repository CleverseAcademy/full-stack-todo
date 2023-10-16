import { withFormik } from 'formik'
import { TodoSubmissionProps } from '../form/TodoFormProps.type'
import TodoFormFields from '../types/todo.form'
import TodoForm from '../form/TodoForm'
import { useParams } from 'react-router-dom'
import useTodo from '../hooks/todo.hook'
import { isDataIsReady } from '../types/typecheck'

const EditTodoForm = withFormik<TodoSubmissionProps<'update'>, TodoFormFields>({
  handleSubmit: (
    values,
    {
      props: {
        updateExistingTodo,
        initialValue: { id },
      },
    }
  ) => updateExistingTodo({ id, ...values }),
  displayName: 'EditTodoForm',
  mapPropsToValues: ({ initialValue: { id, ...rest } }) => rest,
})(TodoForm<'update'>)

const Edit = () => {
  const { id } = useParams()
  const { todo, isLoading, error, modifyTodo } = useTodo(id || '1')

  if (!isDataIsReady(todo, isLoading, error)) return `${error}`

  return (
    <EditTodoForm
      type="update"
      updateExistingTodo={modifyTodo}
      initialValue={todo}
    />
  )
}

export default Edit
