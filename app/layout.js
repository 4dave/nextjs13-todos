export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <h1>Yet another todo app</h1>
        {children}
      </body>
    </html>
  )
}
