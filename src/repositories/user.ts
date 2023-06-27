import { PrismaClient } from '@prisma/client'

import { IRepositoryUser } from '.'
import { ICreateUser, IUser } from '../entities'

export function newRepositoryUser(db: PrismaClient): IRepositoryUser {
  return new RepositoryUser(db)
}

class RepositoryUser implements IRepositoryUser {
  private db: PrismaClient

  constructor(db: PrismaClient) {
    this.db = db
  }

  async createUser(user: ICreateUser): Promise<IUser> {
    // TODO: Implement a user registration logic here

    return { id: '000', username: 'John', password: 'Doe' }
  }

  // Reject if not found
  async getUser(username: string): Promise<IUser> {
    // TODO: Implement a user login logic here

    return { id: '000', username: 'John', password: 'Doe' }
  }
}
