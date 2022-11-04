import "../styles/globals.css"
import styles from "../styles/Todos.module.css"

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body className={styles.container}>
        <span className={styles.title}>Yet another todo app</span>
        {children}
      </body>
    </html>
  )
}
