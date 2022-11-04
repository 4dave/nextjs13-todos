import { wait } from "../utils/wait"
import Todo from "./todo"

const getTodos = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos`)
  const data = await response.json()
  await wait(1)
  return data
}

export default async function TodoList() {
  const { data } = await getTodos()

  return (
    <div>
      <ul>
        {data.map((todo) => {
          return (
            <li key={todo.ID}>
              <Todo todo={todo} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
