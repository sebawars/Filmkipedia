const express = require('express');
const bodyParser = require('body-parser');

const config = require('../config.js');
const film = require('./components/film/network');
const user = require('./components/user/network');
const errors = require('../network/errors');

const cors = require('cors')

const app = express();

app.use(cors())
app.use(bodyParser.json());

    
// ROUTER
app.use('/api/film', film);
app.use('/api/user', user);

app.use(errors);

app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto ', config.api.port);
});