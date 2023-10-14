import TodoDto from '../types/todo.dto'
import TodoFormFields from '../types/todo.form'

export type FormSubmissionType = 'create' | 'update' | 'delete'

type FormRequiredData<T extends FormSubmissionType> = T extends 'update'
  ? { initialValue: Readonly<TodoDto> }
  : object

type FormRequiredHandler<T extends FormSubmissionType> = T extends 'create'
  ? { submitNewTodo: (v: TodoFormFields) => Promise<TodoDto> }
  : T extends 'update'
  ? { updateExistingTodo: (v: TodoDto) => Promise<TodoDto> }
  : { deleteTodo: (id: string) => Promise<TodoDto> }

export type TodoSubmissionProps<
  T extends FormSubmissionType = 'create'
> = Readonly<
  FormRequiredHandler<T> &
    FormRequiredData<T> & {
      type: T
    }
>
