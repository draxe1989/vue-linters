export const API_URL =
  import.meta.env.VITE_API_HOST + ':' + import.meta.env.VITE_API_PORT

export async function _fetch(
  input: RequestInfo | URL,
  init?: RequestInit,
  refresh: number = 4,
) {
  const response = await fetch(input, init)
  if (response.status === 401 && refresh > 0) {
    await fetch(API_URL + '/refresh')
    return _fetch(input, init, refresh - 1)
  }
  return response
}
