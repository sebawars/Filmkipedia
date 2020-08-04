const response = require('../../network/response');
const service = require('../services/user.service');

function login(req, res, next) {

    service.login(req.body.username, req.body.password)
        .then(token => {
            response.success(req, res, token, 200);
        })
        .catch(next);

}

function register(req, res, next) {

    service.register({username: req.body.username, password: req.body.password})
        .then(token => {
            response.success(req, res, token, 200);
        })
        .catch(next);

}

module.exports = {
    login,
    register
};
