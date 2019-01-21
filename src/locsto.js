const IdKey = 'locsto.id'

export default class Locsto {
  constructor(prefix, id) {
    if (!prefix) {
      throw Error('prefix is required')
    }

    this.prefix = `${prefix}.`

    if (id && this.get(IdKey) !== id) {
      this.clear()
      this.set(IdKey, id)
    }
  }

  get(key) {
    return window.localStorage.getItem(this.prefix + key)
  }

  set(key, value = 'y') {
    window.localStorage.setItem(this.prefix + key, value)
  }

  remove(key) {
    window.localStorage.removeItem(this.prefix + key)
  }

  clear() {
    const keys = Object.keys(localStorage)

    keys.forEach(key => {
      if (key.startsWith(this.prefix)) {
        window.localStorage.removeItem(key)
      }
    })
  }
}
