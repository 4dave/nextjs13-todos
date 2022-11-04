"use client"

import { useRouter } from "next/navigation"

async function update(id, completed, refresh) {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ id, completed }),
  })
  refresh()
}

async function remove(id, refresh) {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos/${id}`, {
    method: "DELETE",
  })
  refresh()
}

export default function Todo({ todo }) {
  const router = useRouter()
  return (
    <div>
      <input
        type="checkbox"
        onChange={(e) => {
          update(todo.ID, e.target.checked, router.refresh)
        }}
        checked={todo.completed}
      />
      {todo.name}
      <button onClick={() => remove(todo.ID, router.refresh)}>Delete</button>
    </div>
  )
}
