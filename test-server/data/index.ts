import refresh from './refresh.ts'
import products from './products.ts'

type Routes = {
  [path: string]: {
    [method: string]: {
      [status: string]: string | null
    }
  }
}

const routes = {
  refresh,
  'refresh/\\d+/ref': refresh,
  products,
}

export default routes as Routes
