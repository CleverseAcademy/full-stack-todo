import { Response } from 'express'

import { IHandlerTodo } from '.'
import { IRepositoryTodo } from '../repositories'

export function newHandlerTodo(repoTodo: IRepositoryTodo): IHandlerTodo {
  return new HandlerTodo(repoTodo)
}

class HandlerTodo implements IHandlerTodo {
  private repo: IRepositoryTodo

  constructor(repo: IRepositoryTodo) {
    this.repo = repo
  }

  async createTodo(req, res): Promise<Response> {
    // TODO: Handle a todo creation request here

    const { title } = req.body
    if (!title) {
      return res.status(400).send('Missing required field: title').end()
    }

    return res.status(201).end()
  }

  async getTodos(_, res: Response): Promise<Response> {
    return this.repo
      .getTodos()
      .then((todos) => res.status(200).json(todos).end())
      .catch((err) => {
        console.error(`failed to create todo: ${err}`)
        return res.status(500).json({ error: `failed to get todos` }).end()
      })
  }

  async getTodo(req, res: Response): Promise<Response> {
    // TODO: Handle a todo retrieval request here
    return res.status(200).end()
  }

  async updateTodo(req, res: Response): Promise<Response> {
    // TODO: Handle a todo modification request here
    return res.status(201).end()
  }

  async deleteTodo(req, res: Response): Promise<Response> {
    // TODO: Handle a todo deletion request here
    return res.status(200).end()
  }

  async deleteTodos(_, res: Response): Promise<Response> {
    // TODO: Handle a todo deletion request here
    return res.status(200).json({ status: 'todos cleared successfully' }).end()
  }
}
