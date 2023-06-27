export interface ITodo {
  id: string
  title: string
  description: string | null
  dueDate: Date | null
}

export interface ICreateTodo extends Omit<ITodo, 'id'> {
  ownerId: string
}
