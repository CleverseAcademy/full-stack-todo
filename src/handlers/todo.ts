import { Request, Response } from 'express'

import { AppRequest, Empty, IHandlerTodo, WithId, WithTodo } from '.'
import { IRepositoryTodo } from '../repositories'

export function newHandlerTodo(repoTodo: IRepositoryTodo): IHandlerTodo {
  return new HandlerTodo(repoTodo)
}

class HandlerTodo implements IHandlerTodo {
  private repo: IRepositoryTodo

  constructor(repo: IRepositoryTodo) {
    this.repo = repo
  }

  async createTodo(
    req: AppRequest<Empty, WithTodo>,
    res: Response,
  ): Promise<Response> {
    // TODO: Handle a todo creation request here

    const { title } = req.body
    if (!title) {
      return res.status(400).send('Missing required field: title').end()
    }

    return res.status(201).end()
  }

  async getTodos(_, res: Response): Promise<Response> {
    // TODO: Handle a todo retrieval request here
    return res.status(200).end()
  }

  async getTodo(
    req: AppRequest<WithId, WithTodo>,
    res: Response,
  ): Promise<Response> {
    // TODO: Handle a todo retrieval request here
    return res.status(200).end()
  }

  async updateTodo(
    req: AppRequest<WithId, WithTodo>,
    res: Response,
  ): Promise<Response> {
    // TODO: Handle a todo modification request here
    return res.status(201).end()
  }

  async deleteTodo(
    req: Request<WithId, WithTodo>,
    res: Response,
  ): Promise<Response> {
    // TODO: Handle a todo deletion request here
    return res.status(200).end()
  }

  async deleteTodos(_, res: Response): Promise<Response> {
    // TODO: Handle a todo deletion request here
    return res.status(200).json({ status: 'todos cleared successfully' }).end()
  }
}
