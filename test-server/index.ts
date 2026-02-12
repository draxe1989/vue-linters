import http from 'http'
import routes from './data/index.ts'

const host = process.env.VITE_API_HOST
const port = process.env.VITE_API_PORT

const server = http.createServer((req, res) => {
  try {
    const method = req.method || 'GET'
    const url = new URL(host + ':' + port + req.url)

    const status = url.searchParams.get('_status') || '200'

    const result = Object.entries(routes).find(([key]) => {
      const reg = new RegExp(`^${key}$`)
      return reg.test(url.pathname.slice(1))
    })

    if (result) {
      res.writeHead(+status, {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
      })
      const data = JSON.stringify(result?.[1]?.[method]?.[status])
      setTimeout(() => {
        res.end(data)
      }, 200)
    } else {
      res.writeHead(404, {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
      })
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
  // eslint-disable-next-line no-console
  console.log('Server is running on port: ' + host + ':' + port)
})
