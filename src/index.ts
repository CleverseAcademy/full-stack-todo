import express from 'express'

async function main() {
  const port = process.env.PORT || 8000
  const server = express()

  server.listen(port, () => console.log(`server listening on ${port}`))
}

main()
