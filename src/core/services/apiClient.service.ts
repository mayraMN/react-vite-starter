const get = async (url: string) => {
  try {
    const response = await fetch(url)
    if (response.status !== 200) {
      return null
    }
    const json = await response.json()
    console.log('todo ok')
    return json
  } catch {
    return null
  }
}
export const apiClient = {
  get,
}
