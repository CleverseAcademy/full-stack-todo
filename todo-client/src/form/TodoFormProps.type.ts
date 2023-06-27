import TodoDto from '../types/todo.dto'
import TodoFormFields from '../types/todo.form'

export type FormSubmissionType = 'create' | 'update' | 'delete'

type FormRequiredData<T extends FormSubmissionType> = T extends 'update'
  ? { initialValue: Readonly<TodoDto> }
  : object

type HandlerKeys<T extends FormSubmissionType> = T extends 'create'
  ? 'submitNewTodo'
  : T extends 'update'
  ? 'updateExistingTodo'
  : 'deleteTodo'

type HandlerFunc<T extends FormSubmissionType> = T extends 'create' | 'update'
  ? (v: T extends 'create' ? TodoFormFields : TodoDto) => Promise<TodoDto>
  : (id: string) => Promise<void>

export type TodoSubmissionProps<
  T extends FormSubmissionType = 'create'
> = Readonly<
  {
    [k in HandlerKeys<T>]: HandlerFunc<T>
  } &
    FormRequiredData<T> & {
      type: T
    }
>
