import http from 'http'
import routes from './data/index.ts'

const host = 'http://localhost'
const port = 80

const server = http.createServer((req, res) => {
  try {
    const method = req.method || 'GET'
    const url = new URL(host + ':' + port + req.url)

    const status = url.searchParams.get('_status') || '200'

    console.log(url)

    const result = Object.entries(routes).find(([key]) => {
      const reg = new RegExp(`^${key}$`)
      return reg.test(url.pathname.slice(1))
    })

    if (result) {
      res.writeHead(+status)
      res.end(result?.[1]?.[method]?.[status])
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' })
      res.end('404_not_found')
    }
  } catch (error) {
    res.writeHead(500)
    res.end(
      '500_internal_server_error_' +
        JSON.stringify((error as { message: string }).message),
    )
  }
})

server.listen(port, () => {
  console.log('Server is running on port ' + port)
})
