//const store = require('../../../store/mysql');
const config = require('../../../config');

let store;

store = require('../../../store/dummy');

const ctrl = require('./controller');

module.exports = ctrl(store);