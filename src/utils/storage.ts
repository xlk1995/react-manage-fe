export default {
  get(key: string) {
    const value = localStorage.getItem(key)
    if (!value) {
      return ''
    }
    try {
      return JSON.parse(value)
    } catch (error) {
      return value
    }
  },

  set(key: string, value: object) {
    localStorage.setItem(key, JSON.stringify(value))
  },

  remove(key: string) {
    localStorage.removeItem(key)
  },
  clear() {
    localStorage.clear()
  }
}
