import express from 'express'

import cors from 'cors'
import { newRepositoryTodo } from './repositories/todo'

import { PrismaClient } from '@prisma/client'
import { newHandlerTodo } from './handlers/todo'

async function main() {
  const db = new PrismaClient()

  const repoTodo = newRepositoryTodo(db)
  const handlerTodo = newHandlerTodo(repoTodo)

  const port = process.env.PORT || 8000
  const server = express()
  const todoRouter = express.Router()

  server.use(express.json())
  server.use(cors())
  server.use('/todo', todoRouter)

  // Check server status
  server.get('/', (_, res) => {
    return res.status(200).json({ status: 'ok' }).end()
  })

  // To-do API
  todoRouter.post('/', handlerTodo.createTodo.bind(handlerTodo))
  todoRouter.get('/', handlerTodo.getTodos.bind(handlerTodo))
  todoRouter.get('/:id', handlerTodo.getTodo.bind(handlerTodo))
  todoRouter.patch('/:id', handlerTodo.updateTodo.bind(handlerTodo))
  todoRouter.delete('/', handlerTodo.deleteTodos.bind(handlerTodo))
  todoRouter.delete('/:id', handlerTodo.deleteTodo.bind(handlerTodo))

  server.listen(port, () => console.log(`server listening on ${port}`))
}

main()
