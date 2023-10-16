import { useEffect, useState } from 'react'
import { getTodos, postTodo } from '../services/todo'
import Dto from '../types/todo.dto'
import FormFields from '../types/todo.form'

interface UseTodoListHooks {
  todoList: Dto[] | null
  isLoading: boolean
  error: unknown
  addTodo: (newTodo: FormFields) => Promise<Dto>
}

const useTodoList = (): UseTodoListHooks => {
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

  return {
    todoList,
    isLoading,
    error,
    addTodo,
  }
}

export default useTodoList
