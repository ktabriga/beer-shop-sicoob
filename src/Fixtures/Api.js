const beers = [
  {
    name: 'Colorado',
    price: 10.5
  },
  {
    name: 'Brahma',
    price: 4.5
  },
  {
    name: 'Skol',
    price: 5.5
  }
]

const api = {
  getBeers: () => {
    const response = {
      ok: true,
      data: beers
    }
    return Promise.resolve(response)
  }
}

export default api
