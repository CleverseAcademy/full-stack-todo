import axios from 'axios'
import Dto from '../types/todo.dto'
import FormFields from '../types/todo.form'
import { API_HOST } from './const'

export const getTodos = () =>
  axios.get<Dto[]>(`${API_HOST}/todo`).then((res) => res.data)

export const postTodo = (newTodo: FormFields) => {
  // TODO: add a post api request here
}

export const updateTodo = (id: string, updatedTodo: FormFields) => {
  // TODO: add an patch api request here
}
