import "../styles/globals.css"
import "../styles/todos.css"

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body className="container">
        <span className="title">Yet another todo app</span>
        {children}
      </body>
    </html>
  )
}
