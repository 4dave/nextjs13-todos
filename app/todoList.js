const getTodos = async () => {
  const response = await fetch(`${process.env.API_URL}/todos`)
  const data = await response.json()
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
              <input type="checkbox" />
              {todo.name}
              <button>Delete</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
