import { v4 } from 'uuid'
import { IRepositoryTodo } from '.'
import { ITodo } from '../entities'

export type TodoStore = { [k: ITodo['id']]: ITodo }

export function newRepositoryTodo(db: TodoStore): IRepositoryTodo {
  return new RepositoryTodo(db)
}

class RepositoryTodo implements IRepositoryTodo {
  private db: TodoStore

  constructor(db: TodoStore) {
    this.db = { ...db }
  }

  createTodo(title: string): ITodo {
    const id = v4()
    this.db[id] = {
      id,
      title,
    }
    return this.db[id]
  }

  getTodoById(id: string): ITodo | undefined {
    // TODO: implements a Todo retrieval by ID here
    return undefined
  }

  getTodos(): ITodo[] {
    // TODO: implements all Todo(s) retrieval logic here
    return []
  }

  deleteTodoById(id: string): ITodo {
    const beingDeleted = this.db[id]
    // TODO: implement todo deletion logic here

    return beingDeleted
  }

  deleteTodos() {
    this.db = {}
  }

  updateTodo(id: string, title: string): ITodo {
    // TODO: implement update logic here
    return this.db[id]
  }
}
