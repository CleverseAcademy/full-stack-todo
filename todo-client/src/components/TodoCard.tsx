import dayjs from 'dayjs'
import Dto from '../types/todo.dto'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const TodoCard = ({ todo }: { todo: Dto }) => {
  return (
    <div className="flex justify-between items-center w-full bg-white rounded-lg shadow-md px-4 py-5">
      <div className="flex flex-col gap-1 text-left">
        <p className="font-bold text-blue-500 text-2xl">{todo.title}</p>
        <p className="text-sm text-gray-500">{todo.description}</p>
      </div>
      <p>{todo.dueDate ? `${dayjs().to(todo.dueDate)}` : 'No due date'}</p>
    </div>
  )
}
export default TodoCard
