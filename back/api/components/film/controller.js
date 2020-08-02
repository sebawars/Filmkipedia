const nanoid = require('nanoid');

const TABLA = 'film';

module.exports = function (injectedStore) {
    let store = injectedStore;

    if (!store) {
        store = require('../../../store/dummy');
    }

    async function list() {

        films = await store.list(TABLA);
        
        return films;
    }

    function get(id) {
        return store.get(TABLA, id);
    }

    async function upsert(body) {
        const oneFilm = {
            filmname: body.filmname,
        }

        if (body.id) {
            oneFilm.id = body.id;
        } else {
            oneFilm.id = nanoid();
        }

        return store.upsert(TABLA, oneFilm);
    }

    return {
        list,
        get,
        upsert
    };
}