"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import "../styles/todos.css"

async function create(name, refresh) {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos`, {
    method: "POST",
    body: JSON.stringify({ name }),
  })
  refresh()
}

export default function AddTodo() {
  const router = useRouter()
  let [name, setName] = useState("")

  return (
    <div className="addtodo">
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name || ""}
      />
      <button
        onClick={async () => {
          await create(name, router.refresh)
          setName("")
        }}
      >
        Add
      </button>
    </div>
  )
}
