const nanoid = require('nanoid');

const err = require('../utils/error');

const db = {
    'film': [
        { id: '1', filmname: 'Star wars', pais: 'USA', estreno: '1977', director: { nombre: 'George', apellido: 'Lucas' }, img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg', reparto: [ { id: 1, nombre: 'Harrison', apellido: 'Ford' }, { id: 2, nombre: 'Mark', apellido: 'Hamill' } ] },
        { id: '2', filmname: 'Alien', pais: 'USA', estreno: '1989', director: { nombre: 'Ridley', apellido: 'Scott' }, img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg', reparto: [ { id: 1, nombre: 'Ridley', apellido: 'Scott' }, { id: 2, nombre: 'John', apellido: 'Hurt' } ] }
    ],
    'user': [
        { id: '58i82VGc1dZUgGKAn54TU', username: 'sebawars@hotmail.com', password: '$2b$05$K5aDu9SdN2cTKS6hzXuWp.4lTWk7XKhwq4kSpV8Qj1k8SAoYhC2wq' }
    ]
};

async function list(tabla) {
    return db[tabla] || [];
}

async function get(tabla, id) {
    let col = await list(tabla);
    return col.filter(item => item.id === id)[0] || null;
}

async function insert(tabla, data) {
    if (!db[tabla]) {
        db[tabla] = [];
    }

    const lkpUser = await query(tabla, data)

    if(lkpUser){
        throw err('Username existente', 400)
    }   
    else{
        db[tabla].push( { id: nanoid(), ...data } );
    }

    console.log(db);
}

async function upsert(tabla, data) {
    if (!db[tabla]) {
        db[tabla] = [];
    }

    db[tabla].push(data);

    console.log(db);
}

async function remove(tabla, id) {
    return true;
}

async function query(tabla, q) {
    let col = await list(tabla);
    let keys = Object.keys(q);
    let key = keys[0];
    
    return col.filter(item => item[key] === q[key])[0] || null;
}

module.exports = {
    list,
    get,
    upsert,
    insert,
    remove,
    query,
};
