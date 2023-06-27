export interface ITodo {
  id: string
  title: string
  description: string | null
  dueDate: Date | null
}

export interface IUser {
  id: string
  username: string
  password: string
}

export interface ICreateUser {
  username: string
  password: string
}

export interface ICreateTodo extends Omit<ITodo, 'id'> {
  ownerId: string
}
