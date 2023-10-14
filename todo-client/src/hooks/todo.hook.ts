import { useEffect, useState } from 'react'
import { deleteTodo, getTodos, postTodo, updateTodo } from '../services/todo'
import Dto from '../types/todo.dto'
import FormFields from '../types/todo.form'

interface UseTodoHooks {
  todoList: Dto[] | null
  isLoading: boolean
  error: unknown
  addTodo: (newTodo: FormFields) => Promise<Dto>
  modifyTodo: ({ id, ...updatedValue }: Dto) => Promise<Dto>
  removeTodo: (id: string) => Promise<Dto>
}

const useTodo = (): UseTodoHooks => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [todoList, setTodoList] = useState<Dto[] | null>(null)
  const [error, setError] = useState<unknown>(null)
  const fetchData = async () => {
    setIsLoading(true)
    try {
      setTodoList(await getTodos())
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const addTodo = (newTodo: FormFields) =>
    postTodo(newTodo).then((response) => fetchData().then(() => response))

  const modifyTodo = ({ id, ...updatedValue }: Dto) =>
    updateTodo(id, updatedValue).then((res) => fetchData().then(() => res))

  const removeTodo = (id: string) =>
    deleteTodo(id).then((res) => fetchData().then(() => res))

  return {
    todoList,
    isLoading,
    error,
    addTodo,
    modifyTodo,
    removeTodo,
  }
}

export default useTodo
