const get = async (url: string) => {
  const response = await fetch(url)
  const json = await response.json()
  return json
}
export const apiClient = {
  get,
}
