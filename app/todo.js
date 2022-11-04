"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import "../styles/todos.css"

async function update(id, completed, refresh, setWaiting) {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ id, completed }),
  })
  setWaiting(false)
  refresh()
}

async function remove(id, refresh) {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos/${id}`, {
    method: "DELETE",
  })
  refresh()
}

export default function Todo({ todo }) {
  const [waiting, setWaiting] = useState(false)
  const router = useRouter()
  return (
    <div>
      <input
        type="checkbox"
        onChange={(e) => {
          setWaiting(true)
          update(todo.ID, e.target.checked, router.refresh, setWaiting)
        }}
        checked={todo.completed || false}
        style={waiting ? { cursor: "progress" } : {}}
      />
      {todo.name}
      <button onClick={() => remove(todo.ID, router.refresh)}>Delete</button>
    </div>
  )
}
