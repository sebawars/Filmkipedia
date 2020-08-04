const config = require('../../config');
const model = config.db_origin === 'dummy' ? require('../models/dummy.model') : require('../models/dummy.model');
const err = require('../../utils/error');
const auth = require('../../auth');
const bcrypt = require('bcrypt');

const TABLA = 'user'
async function login(username, password) {

    const data = await model.query(TABLA, { username: username });

    if(!data) throw err('Verifique usuario/contrasenia', 400);
    
    return bcrypt.compare(password, data.password)
        .then(sonIguales => {
            if (sonIguales === true) {
                // Generar token;
                console.log(data);
                return auth.sign({ ...data })
            } else {
                throw err('Verifique usuario/contrasenia', 400);
            }
        });
}

async function register(data) {

    let authData = {};

    if (data.username) {
        authData.username = data.username;
    }

    if (data.password) {
        authData.password = await bcrypt.hash(data.password, 5);
    }

    await model.insert(TABLA, authData);

    return auth.sign({ ...authData })
}


module.exports = {
    login,
    register
}