import { Express, Request, Response } from 'express'
import { ITodo } from '../entities'

// Custom Express `Request` (no Query)
export interface AppRequest<Params, Body> extends Express.Request {
  params: Params
  body: Body
}

export interface Empty {}

export interface WithTodo extends Omit<ITodo, 'id'> {}

export interface WithId {
  id: string
}
export type HandlerFunc<Req> = (req: Req, res: Response) => Promise<Response>

export interface IHandlerTodo {
  createTodo: HandlerFunc<AppRequest<Empty, WithTodo>>
  getTodos: HandlerFunc<AppRequest<Request, any>>
  getTodo: HandlerFunc<AppRequest<WithId, any>>
  updateTodo: HandlerFunc<AppRequest<WithId, WithTodo>>
  deleteTodo: HandlerFunc<AppRequest<WithId, Empty>>
  deleteTodos: HandlerFunc<Request>
}
