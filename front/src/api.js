const BASE_URL = `http://192.168.0.11:8081/api`

/*                  (process.env.ENV === 'development')
                    ? `http://${process.env.API_DEV_HOST}:${process.env.API_DEV_PORT}/api` 
                    : `http://${process.env.API_PROD_HOST}:${process.env.API_PROD_PORT}/api`

*/

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max))

async function callApi(endpoint, options = {}) {
  
  await simulateNetworkLatency()

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  const url = BASE_URL + endpoint
  const response = await fetch(url, options)
  const data = await response.json()

  return data
}

const api = {
  film: {
    list(order) {
      return callApi(`/film?order=${order}`)
    },
    get(filmId) {
      return callApi(`/film/${filmId}`)
    },
    create(newFilm) {
      return callApi('/film', {
        method: 'POST',
        body: JSON.stringify(newFilm),
      })
    },
    edit(filmId, modifiedFilm) {
      return callApi(`/film/${filmId}`, {
        method: 'PUT',
        body: JSON.stringify(modifiedFilm),
      })
    },
    edit(filmId) {
      return callApi(`/film/${filmId}`, {
        method: 'DELETE'
      })
    }
  },
  user: {
    login(inputUser) {
      return callApi('/user/login', {
        method: 'POST',
        body: JSON.stringify(inputUser),
      })
    },
    register(inputUser) {
      return callApi('/user/register', {
        method: 'POST',
        body: JSON.stringify(inputUser),
      })
    }
  }
}

export default api
