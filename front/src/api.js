const BASE_URL = `http://${process.env.REACT_APP_API_DOMAIN}:${process.env.REACT_APP_API_PORT}`

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max))

async function callApi(endpoint, options = {}) {
  
  await simulateNetworkLatency()

  const baseHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }

  options.headers = { ...baseHeaders, ...options.headers }

  const url = BASE_URL + endpoint
  const res = await fetch(url, options)
  const data = (res.headers.get("Content-Length") !== '0' && await res.json()) || {};
  const status = res.status;

  const response = {
    data,
    status
  }

  return response;
}

const authorizationHeader = (token) => { return {'Authorization': 'Bearer ' + token} }

const api = {
  film: {
    async list(order, token) {
      const res = await callApi(`/film${order ? '?order='+order : ''}`, {headers: authorizationHeader(token)})

      if(res.status !== 200) 
        throw new Error(res.status)

      return res.data.results
    },
    create(newFilm, token) {
      return callApi('/film', {
        method: 'POST',
        body: JSON.stringify(newFilm),
        headers: authorizationHeader(token)
      })
    },
    edit(filmId, modifiedFilm, token) {
      return callApi(`/film/${filmId}`, {
        method: 'PUT',
        body: JSON.stringify(modifiedFilm),
        headers: authorizationHeader(token)
      })
    },
    delete(filmId, token) {
      return callApi(`/film/${filmId}`, {
        method: 'DELETE',
        headers: authorizationHeader(token)
      })
    }
  },
  user: {
    login(inputUser) {
      return callApi('/auth/login', {
        method: 'POST',
        body: JSON.stringify(inputUser),
      })
    },
    register(inputUser) {
      return callApi('/user', {
        method: 'POST',
        body: JSON.stringify(inputUser),
      })
    }
  }
}

export default api
