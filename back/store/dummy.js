const nanoid = require('nanoid');

const err = require('../utils/error');

const db = {
    'film': [
        { id: '1', filmname: 'Star wars', pais: 'USA', estreno: '1977', director: { nombre: 'George', apellido: 'Lucas' }, img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg', reparto: [ { id: 1, nombre: 'Harrison', apellido: 'Ford' }, { id: 2, nombre: 'Mark', apellido: 'Hamill' } ] },
        { id: '2', filmname: 'Alien', pais: 'USA', estreno: '1989', director: { nombre: 'Ridley', apellido: 'Scott' }, img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg', reparto: [ { id: 1, nombre: 'Ridley', apellido: 'Scott' }, { id: 2, nombre: 'John', apellido: 'Hurt' } ] },
        { id: '3', filmname: 'The Dark Knight', pais: 'USA', estreno: '2008', director: { nombre: 'Christopher', apellido: 'Nolan' }, img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg', reparto: [ { id: 1, nombre: 'Christian', apellido: 'Bale' }, { id: 2, nombre: 'Heath', apellido: 'Ledger' } ] },
        { id: '4', filmname: 'Forrest Gump', pais: 'USA', estreno: '1994', director: { nombre: 'Robert', apellido: 'Zemeckis' }, img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/clolk7rB5lAjs41SD0Vt6IXYLMm.jpg', reparto: [ { id: 1, nombre: 'Tom', apellido: 'Hanks' }, { id: 2, nombre: 'Robin', apellido: 'Wright' } ] },
        { id: '5', filmname: 'Inception', pais: 'USA', estreno: '2010', director: { nombre: 'Christopher', apellido: 'Nolan' }, img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg', reparto: [ { id: 1, nombre: 'Leonardo', apellido: 'DiCaprio' }, { id: 2, nombre: 'Ellen', apellido: 'Page' } ] },
        { id: '6', filmname: 'Pulp Fiction', pais: 'USA', estreno: '1994', director: { nombre: 'Quentin', apellido: 'Tarantino' }, img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/yAaf4ybTENKPicqzsAoW6Emxrag.jpg', reparto: [ { id: 1, nombre: 'Uma', apellido: 'Thurman' }, { id: 2, nombre: 'John', apellido: 'Travolta' } ] },
        { id: '7', filmname: 'Interestellar', pais: 'USA', estreno: '2014', director: { nombre: 'Christopher', apellido: 'Nolan' }, img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg', reparto: [ { id: 1, nombre: 'Matthew', apellido: 'McConaughey' }, { id: 2, nombre: 'Jessica', apellido: 'Chastain' } ] },

    ],
    'user': [
        { id: '58i82VGc1dZUgGKAn54TU', username: 'sebawars@hotmail.com', password: '$2b$05$K5aDu9SdN2cTKS6hzXuWp.4lTWk7XKhwq4kSpV8Qj1k8SAoYhC2wq' }
    ]
};

const compareByFilmname = (a, b) => {
    if(a.filmname < b.filmname)
        return -1;
    if(a.filmname > b.filmname)
        return 1;
    if(a.filmname == b.filmname)
        return 0;
}

async function list(tabla, order) {
    console.log('order: '+ order);
    if(order === 'asc'){
        console.log('asc');
        return db[tabla].sort(compareByFilmname);
    }
    else if(order === 'desc'){
        console.log('desc');
        return db[tabla].sort(compareByFilmname).reverse();
    }
    else {
        console.log('Sin order');
        return db[tabla] || [];
    }
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
