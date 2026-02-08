import refresh from './refresh.ts'

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
}

export default routes as Routes
