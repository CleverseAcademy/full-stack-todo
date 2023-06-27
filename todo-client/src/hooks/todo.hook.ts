import { useEffect, useState } from 'react'
import { getTodos } from '../services/todo'
import Dto from '../types/todo.dto'
import FormFields from '../types/todo.form'

const useTodo = () => {
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

  return {
    todoList,
    isLoading,
    error,
    addTodo: () => Promise.resolve({ id: 'mock', title: 'ไม่บอกหรอก แบร่' }),
    modifyTodo: () => Promise.resolve({ id: 'mock', title: 'ไม่บอกหรอก แบร่' }),
  }
}

export default useTodo
