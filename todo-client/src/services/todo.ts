import axios from 'axios'
import Dto from '../types/todo.dto'
import FormFields from '../types/todo.form'
import { API_HOST } from './const'

type FetchTodoListFunc = () => Promise<Dto[]>
export const getTodos: FetchTodoListFunc = () =>
  axios.get<Dto[]>(`${API_HOST}/todo`).then((res) => res.data)

type PostTodoFunc = (data: FormFields) => Promise<Dto>
export const postTodo: PostTodoFunc = async (newTodo: FormFields) => {
  // TODO: add a post api request here
  return { id: '000', title: 'ไม่บอก แบร่' }
}

type PatchTodoFunc = (id: string, data: FormFields) => Promise<Dto>
export const updateTodo: PatchTodoFunc = async (
  id: string,
  updatedTodo: FormFields,
) => {
  // TODO: add a patch api request here
  return { id: '000', title: 'ไม่บอก แบร่' }
}

type DeleteTodoFunc = (id: string) => Promise<Dto>
export const deleteTodo: DeleteTodoFunc = async (id: string) => {
  // TODO: add a delete api request here
  return { id: '000', title: 'ไม่บอก แบร่' }
}
