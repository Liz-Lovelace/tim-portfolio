import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <title>Tim's stuff</title>
        // TODO: Write out SEO TAGS
        <meta name="description" content="SEO STUFF" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
