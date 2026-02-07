const apiURL = import.meta.env.VITE_API

export async function _fetch(...params: Parameters<typeof fetch>) {
  const response = await fetch(...params)
  if (response.status === 401) {
    fetch(apiURL + '/refresh', { credentials: 'include' })
    return _fetch(...params)
  }
  return response
}
