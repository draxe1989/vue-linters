import http from 'http'
import url from 'url'

const server = http.createServer((req, res) => {
  try {
    const pathname = url.parse(req.url).pathname
    const method = req.method

    console.log(pathname, method)

    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(pathname)
  } catch (error) {
    console.log(error)
    res.writeHead(500, { 'Content-Type': 'text/plain' })
    res.end('error')
  }
})

server.listen(3000, () => {
  console.log('Server is running on port 3000')
})
