const nanoid = require('nanoid');
const config = require('../../config');
const model = config.db_origin === 'dummy' ? require('../models/dummy.model') : require('../models/dummy.model');

const TABLA = 'film'

async function list(order) {

    films = await model.list(TABLA, order);
    
    return films;
}

function get(id) {
    return model.get(TABLA, id);
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

    return model.upsert(TABLA, oneFilm);
}


module.exports = {
    list,
    get,
    upsert
}