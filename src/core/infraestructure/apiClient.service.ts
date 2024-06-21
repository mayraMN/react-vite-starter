const get = async (url: string) => {
  try {
    const response = await fetch(url)
    const json = await response.json()
    return json
  } catch {
    return null
  }
}
export const apiClient = {
  get,
}
