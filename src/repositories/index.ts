import { ICreateTodo, ITodo } from '../entities'

export interface IRepositoryTodo {
  createTodo(arg: ICreateTodo): Promise<ITodo>
  getTodoById(id: string): Promise<ITodo | null>
  getTodos(): Promise<ITodo[]>
  deleteTodoById(id: string): Promise<ITodo>
  deleteTodos(): Promise<void>
  updateTodo(id: string, msg: string): Promise<ITodo>
}
