import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey
} from "typeorm";
import {
  getIdColumnType
} from "src/orm.config";

export class InsertInitialData1597159404240 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise < any > {
// DIRECTORS

await queryRunner
  .manager
  .createQueryBuilder()
  .insert()
  .into("director")
  .values([{
    name: 'George',
    surname: 'Lucas'
  }, {
    name: 'Ridley',
    surname: 'Scott'
  }, {
    name: 'Christopher',
    surname: 'Nolan'
  }, {
    name: 'Robert',
    surname: 'Zemeckis'
  }, {
    name: 'Quentin',
    surname: 'Tarantino'
  }, {
    name: 'Chris',
    surname: 'Columbus'
  }, {
    name: 'Chuck',
    surname: 'Russell'
  }])
  .execute();

// ACTORS

await queryRunner
  .manager
  .createQueryBuilder()
  .insert()
  .into("actor")
  .values([{
    name: 'Harrison',
    surname: 'Ford'
  }, {
    name: 'Mark',
    surname: 'Hamill'
  }, {
    name: 'Ridley',
    surname: 'Scott'
  }, {
    name: 'John',
    surname: 'Hurt'
  }, {
    name: 'Christian',
    surname: 'Bale'
  }, {
    name: 'Heath',
    surname: 'Ledger'
  }, {
    name: 'Tom',
    surname: 'Hanks'
  }, {
    name: 'Robin',
    surname: 'Wright'
  }, {
    name: 'Leonardo',
    surname: 'DiCaprio'
  }, {
    name: 'Ellen',
    surname: 'Page'
  }, {
    name: 'Uma',
    surname: 'Thurman'
  }, {
    name: 'John',
    surname: 'Travolta'
  }, {
    name: 'Matthew',
    surname: 'McConaughey'
  }, {
    name: 'Jessica',
    surname: 'Chastain'
  }])
  .execute();
// FILMS

await queryRunner
  .manager
  .createQueryBuilder()
  .insert()
  .into("film")
  .values([{
      filmname: 'Star wars',
      country: 'USA',
      release: '1977',
      director: 1,
      image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg'
    },
    {
      filmname: 'Alien',
      country: 'USA',
      release: '1989',
      director: 2,
      image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg'
    },
    {
      filmname: 'The Dark Knight',
      country: 'USA',
      release: '2008',
      director: 3,
      image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg'
    },
    {
      filmname: 'Forrest Gump',
      country: 'USA',
      release: '1994',
      director: 4,
      image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/clolk7rB5lAjs41SD0Vt6IXYLMm.jpg'
    },
    {
      filmname: 'Inception',
      country: 'USA',
      release: '2010',
      director: 3,
      image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg'
    },
    {
      filmname: 'Pulp Fiction',
      country: 'USA',
      release: '1994',
      director: 4,
      image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/yAaf4ybTENKPicqzsAoW6Emxrag.jpg'
    },
    {
      filmname: 'Interestellar',
      country: 'USA',
      release: '2014',
      director: 3,
      image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg'
    },
    {
      filmname: 'Harry Potter y la piedra Filosofal',
      country: 'USA',
      release: '2001',
      director: 6,
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7xXJ15VEf7G9GdAuV1dO769yC73.jpg'
    },
    {
      filmname: 'Harry Potter y la camara secreta',
      country: 'USA',
      release: '2002',
      director: 6,
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bhCfAzeMMg7GyLDT11yVM2i1NPh.jpg'
    },
    {
      filmname: 'Harry Potter y el prisionero de azkaban',
      country: 'USA',
      release: '2004',
      director: 6,
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wF9aoo4YZmpKP4bZPSy4Zwwek6G.jpg'
    },
    {
      filmname: 'Harry Potter y el caliz de fuego',
      country: 'USA',
      release: '2005',
      director: 6,
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6Cn5Lx9kqhXzTNV5QXwZ3RW5pBg.jpg'
    },
    {
      filmname: 'Harry Potter y la orden del fenix',
      country: 'USA',
      release: '2007',
      director: 6,
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/z5bL1z1ZOAKBkvbOhVQp6GfBv4u.jpg'
    },
    {
      filmname: 'Harry Potter y el misterio del príncipe',
      country: 'USA',
      release: '2009',
      director: 6,
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nSb3nNiL6pOEDK34T0U6RKTGzlJ.jpg'
    },
    {
      filmname: 'Harry Potter y las Reliquias de la Muerte - Parte 1',
      country: 'USA',
      release: '2010',
      director: 6,
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fYyoJ4Yadk0MCBHZPFrgvMDl50o.jpg'
    },
    {
      filmname: 'Harry Potter y las Reliquias de la Muerte - Parte 2',
      country: 'USA',
      release: '2011',
      director: 6,
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aM1TuUiPtV8OAZyu61CTdy9Ymtk.jpg'
    },
    {
      filmname: 'La máscara',
      country: 'USA',
      release: '1994',
      director: 7,
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8SmzepMp7glh5cZRDGsbleZWiZQ.jpg'
    }
  ])
  .execute();
// FILM_ACTOR
await queryRunner
  .manager
  .createQueryBuilder()
  .insert()
  .into("film_actor")
  .values([{
      film_id: '1',
      actor_id: '1'
    },
    {
      film_id: '1',
      actor_id: '2'
    },
    {
      film_id: '2',
      actor_id: '3'
    },
    {
      film_id: '2',
      actor_id: '4'
    },
    {
      film_id: '3',
      actor_id: '5'
    },
    {
      film_id: '3',
      actor_id: '6'
    },
    {
      film_id: '4',
      actor_id: '7'
    },
    {
      film_id: '4',
      actor_id: '8'
    },
    {
      film_id: '5',
      actor_id: '9'
    },
    {
      film_id: '5',
      actor_id: '10'
    },
    {
      film_id: '6',
      actor_id: '11'
    },
    {
      film_id: '6',
      actor_id: '12'
    },
    {
      film_id: '7',
      actor_id: '13'
    },
    {
      film_id: '7',
      actor_id: '14'
    }
  ])
  .execute();
  }

  public async down(queryRunner: QueryRunner): Promise < any > {}

}