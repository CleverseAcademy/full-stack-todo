import { IRepositoryTodo } from '.'
import { ICreateTodo, ITodo } from '../entities'

export function newRepositoryTodo(db: TodoStore): IRepositoryTodo {
  return new RepositoryTodo(db)
}

class RepositoryTodo implements IRepositoryTodo {
  private db: PrismaClient

  constructor(db: PrismaClient) {
    this.db = db
  }

  async createTodo(arg: ICreateTodo): Promise<ITodo> {
    return this.db.todo.create({
      data: arg,
    })
  }

  async getTodoById(id: string): Promise<ITodo | null> {
    // TODO: implements a Todo retrieval by ID here
    return null
  }

  async getUserTodoById(where: {
    ownerId: string
    id: string
  }): Promise<ITodo | null> {
    // TODO: implements a TODO retrieval by ownerId here
    return null
  }

  async getTodos(): Promise<ITodo[]> {
    // TODO: implements all Todo(s) retrieval logic here
    return []
  }

  async getUserTodos(ownerId: string): Promise<ITodo[]> {
    return this.db.todo.findMany({
      where: {
        ownerId,
      },
    })
  }

  async deleteTodoById(id: string): Promise<ITodo> {
    // TODO: implement todo deletion logic here
    return {
      id: '000',
      title: 'ไม่บอกหรอก แบร่',
      description: null,
      dueDate: null,
    }
  }

  async deleteTodos() {
    // TODO: implement a todo truncation logic here
  }

  async updateTodo(id: string, title: string): Promise<ITodo> {
    // TODO: implement a todo modification logic here
    return {
      id: '000',
      title: 'ไม่บอกหรอก แบร่',
      description: null,
      dueDate: null,
    }
  }
}
