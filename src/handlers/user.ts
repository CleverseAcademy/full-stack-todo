import { Response } from 'express'

import { AppRequest, Empty, IHandlerUser, WithUser } from '.'
import { IRepositoryUser } from '../repositories/user'

export function newHandlerUser(repo: IRepositoryUser): IHandlerUser {
  return new HandlerUser(repo)
}

class HandlerUser implements IHandlerUser {
  private repo: IRepositoryUser

  constructor(repo: IRepositoryUser) {
    this.repo = repo
  }

  async register(
    req: AppRequest<Empty, WithUser>,
    res: Response,
  ): Promise<Response> {
    // TODO: Handle a user registration request here

    const { username, password } = req.body
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: 'missing username or password' })
        .end()
    }

    return res.status(201).end()
  }

  async login(
    req: AppRequest<Empty, WithUser>,
    res: Response,
  ): Promise<Response> {
    // TODO: Handle a user registration request here

    return res.status(401).end()
  }
}
