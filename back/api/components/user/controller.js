const bcrypt = require('bcrypt');

const err = require('../../../utils/error');
const auth = require('../../../auth');

const TABLA = 'user';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    async function login(username, password) {

        const data = await store.query(TABLA, { username: username });

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

        await store.insert(TABLA, authData);

        return auth.sign({ ...authData })
    }

    return {
        login,
        register,
    };
};