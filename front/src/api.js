const BASE_URL = `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}`;

async function callApi(endpoint, options = {}) {
  const baseHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  options.headers = { ...baseHeaders, ...options.headers };

  const url = BASE_URL + endpoint;
  const res = await fetch(url, options);
  const data = (res.headers.get('Content-Length') !== '0' && (await res.json())) || {};

  const status = res.status;

  const response = {
    data,
    status,
  };

  return response;
}

const authorizationHeader = (token) => {
  return { Authorization: 'Bearer ' + token };
};

const api = {
  film: {
    async list(skip = 10, search = '', order = 'DESC', token) {
      let optionalFilters = '';
      if (search && search.length > 0) optionalFilters += `&search=${search}`;
      if (order && order.length > 0) optionalFilters += `&order=${order}`;

      const res = await callApi(`/films?take=${process.env.REACT_APP_FILMS_PER_PAGES}&skip=${skip}${optionalFilters}`, {
        headers: authorizationHeader(token),
      });

      if (res.status !== 200) throw new Error(res.status);
      return res.data;
    },
    async findById(id, token) {
      const res = await callApi(`/films/${id}`, { headers: authorizationHeader(token) });

      if (res.status !== 200) throw new Error(res.status);

      return res.data;
    },
    async save(filmId, modifiedFilm, token) {
      const res = await callApi(`/films/${filmId}`, {
        method: 'PUT',
        body: JSON.stringify(modifiedFilm),
        headers: authorizationHeader(token),
      });

      if (res.status !== 201) throw new Error(res.status);

      return res.data;
    },
  },
  actor: {
    async list(token) {
      const res = await callApi('/actors', { headers: authorizationHeader(token) });
      if (res.status !== 200) throw new Error(res.status);

      return res.data;
    },
  },
  director: {
    async list(token) {
      const res = await callApi('/directors', { headers: authorizationHeader(token) });

      if (res.status !== 200) throw new Error(res.status);

      return res.data;
    },
  },
  user: {
    login(inputUser) {
      return callApi('/auth/login', {
        method: 'POST',
        body: JSON.stringify(inputUser),
      });
    },
    register(inputUser) {
      return callApi('/users', {
        method: 'POST',
        body: JSON.stringify(inputUser),
      });
    },
  },
};

export default api;
