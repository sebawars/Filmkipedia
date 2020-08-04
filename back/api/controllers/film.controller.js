const response = require('../../network/response');
const service = require('../services/film.service');

async function list(req, res, next) {
    
    service.list(req.query.order)
        .then((lista) => {
            response.success(req, res, lista, 200);
        })
        .catch(next);
}

function get(req, res, next) {
    service.get(req.params.id)
        .then((user) => {
            response.success(req, res, user, 200);
        })
        .catch(next);
}

function upsert(req, res, next) {
    service.upsert(req.body)
        .then((user) => {
            response.success(req, res, user, 201);
        })
        .catch(next);
}

module.exports = {
    list,
    get,
    upsert
};
