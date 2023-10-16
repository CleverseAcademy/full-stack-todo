import { useCallback, useEffect, useState } from 'react'
import { deleteTodo, getTodo, updateTodo } from '../services/todo'
import Dto from '../types/todo.dto'

interface UseTodoHooks {
  todo: Dto | null
  isLoading: boolean
  error: unknown
  modifyTodo: ({ id, ...updatedValue }: Dto) => Promise<Dto>
  removeTodo: (id: string) => Promise<Dto>
}

const useTodo = (id: string): UseTodoHooks => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [todo, setTodo] = useState<Dto | null>(null)
  const [error, setError] = useState<unknown>(null)
  const fetchData = useCallback(async () => {
    setIsLoading(true)
    try {
      setTodo(await getTodo(id))
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }, [id])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const modifyTodo = (updatedValue: Dto) =>
    updateTodo(id, updatedValue).then((res) => fetchData().then(() => res))

  const removeTodo = () =>
    deleteTodo(id).then((res) => fetchData().then(() => res))

  return {
    todo,
    isLoading,
    error,
    modifyTodo,
    removeTodo,
  }
}

export default useTodo
