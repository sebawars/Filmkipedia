const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

router.post('/login', function(req, res, next) {
    console.log(req.body);
    Controller.login(req.body.username, req.body.password)
        .then(token => {
            response.success(req, res, token, 200);
        })
        .catch(next);
})

router.post('/register', function(req, res, next) {
    Controller.register({username: req.body.username, password: req.body.password})
        .then(token => {
            response.success(req, res, token, 200);
        })
        .catch(next);
})

module.exports = router;