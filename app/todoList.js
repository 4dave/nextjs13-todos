import Todo from "./todo"

const getTodos = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos`, {
    cache: "no-store",
  })
  const data = await response.json()
  return data
}

export default async function TodoList() {
  const { data } = await getTodos()

  return (
    <div className="todolist">
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
