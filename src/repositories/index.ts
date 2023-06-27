import { ITodo } from '../entities'

export interface IRepositoryTodo {
  createTodo(title: string): ITodo
  getTodoById(id: string): ITodo | undefined
  getTodos(): ITodo[]
  deleteTodoById(id: string): ITodo
  deleteTodos(): void
  updateTodo(id: string, title: string): ITodo
}
