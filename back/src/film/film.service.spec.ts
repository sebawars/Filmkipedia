import { BadRequestException } from '@nestjs/common';
import { FilmService } from './film.service';
import { FilmBuilder } from '../../test/builder/film/film.builder';
import { Film } from './film.entity';
import { getProvider } from '../../test/test.util';
import { ActorBuilder } from '../../test/builder/actor/actor.builder';
import { Actor } from '../actor/actor.entity';
import { Director } from '../director/director.entity';
import { DirectorBuilder } from '../../test/builder/director/director.builder';
import { EntityManager } from 'typeorm';

describe('FilmService Tests', (): void => {

  let filmService: FilmService;
  let manager: EntityManager;

  let existingActor1: Actor;
  let existingActor2: Actor;
  let existingActor3: Actor;
  let existingCast1: Actor[];
  let existingCast2: Actor[];
  let existingDirector1: Director;
  let existingDirector2: Director;
  
  beforeAll(async (): Promise<void> => {
    filmService = getProvider(FilmService);
    manager = getProvider(EntityManager); 

    existingActor1 = await new ActorBuilder()
      .withName('Tom')
      .withSurName('Hanks')
      .buildAndPersist();
  
    existingActor2 = await new ActorBuilder()
      .withName('Robin')
      .withSurName('Wright')
      .buildAndPersist();

    existingActor3 = await new ActorBuilder()
      .withName('Robin')
      .withSurName('Wright')
      .buildAndPersist();
  
    existingCast1 = [ existingActor1, existingActor2 ]

    existingCast2 = [ existingActor3 ]
  
    existingDirector1 = await new DirectorBuilder()
      .withName('Christopher')
      .withSurName('Nolan')
      .buildAndPersist();

    existingDirector2 = await new DirectorBuilder()
      .withName('Quentin')
      .withSurName('Tarantino')
      .buildAndPersist();

  });

  test('Find all films, returns two existing films.', async (done: Function): Promise<void> => {

    const existingFilm1: Film = await new FilmBuilder()
      .withFilmName('Forrest Gump')
      .withCountry('USA')
      .withRelease(1994)
      .withImage('https://image.tmdb.org/t/p/w600_and_h900_bestv2/clolk7rB5lAjs41SD0Vt6IXYLMm.jpg')
      .withDirector(existingDirector1)
      .withCast(existingCast1)
      .buildAndPersist();

    const existingFilm2: Film = await new FilmBuilder()
      .withFilmName('Forrest Gump')
      .withCountry('USA')
      .withRelease(1994)
      .withImage('https://image.tmdb.org/t/p/w600_and_h900_bestv2/clolk7rB5lAjs41SD0Vt6IXYLMm.jpg')
      .withDirector(existingDirector1)
      .withCast(existingCast1)
      .buildAndPersist();

    const [retrievedFilms, count] = await filmService.findAndPaginate(2, 0, null, null);

    expect(retrievedFilms).toHaveLength(2);
    expect(retrievedFilms).toContainEqual(existingFilm1);
    expect(retrievedFilms).toContainEqual(existingFilm2);

    done();

  });



  test('Save, with invalid film, throws BadRequestException.', async (done: Function): Promise<void> => {

    const newFilm: Film = new FilmBuilder()
      .build();

      expect(filmService.save(newFilm)).rejects.toBeInstanceOf(BadRequestException);

    done();

  });



  test('Save, with valid film, creates the film.', async (done: Function): Promise<void> => {

    const filmname = 'Forrest Gump';
    const country = 'USA';
    const release = 1994;
    const image = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/clolk7rB5lAjs41SD0Vt6IXYLMm.jpg';

    const newFilm: Film = new FilmBuilder()
      .withFilmName(filmname)
      .withCountry(country)
      .withRelease(release)
      .withImage(image)
      .withDirector(existingDirector1)
      .withCast(existingCast1)
      .build();
    
    const initialFilmCount = await manager.getRepository(Film).count();

    const createdFilm: Film = await filmService.save(newFilm);

    const finalCount = await manager.getRepository(Film).count();

    expect(createdFilm.id).not.toBeNull();
    expect(createdFilm.filmname).toEqual(filmname);
    expect(createdFilm.country).toEqual(country);
    expect(createdFilm.release).toEqual(release);
    expect(createdFilm.image).toEqual(image);
    expect(createdFilm.director).toEqual(existingDirector1);
    expect(createdFilm.cast).toEqual(existingCast1);
    expect(initialFilmCount + 1 ).toEqual(finalCount);
  
    done();

  });

  test('Save, with valid existing film, updates the film.', async (done: Function): Promise<void> => {

    const existingFilm: Film = await new FilmBuilder()
      .withFilmName('Forrest Gump')
      .withCountry('USA')
      .withRelease(1994)
      .withImage('https://image.tmdb.org/t/p/w600_and_h900_bestv2/clolk7rB5lAjs41SD0Vt6IXYLMm.jpg')
      .withDirector(existingDirector1)
      .withCast(existingCast1)
      .buildAndPersist();

    const initialFilmCount = await manager.getRepository(Film).count();

    const newFilmname = 'Alien';
    const newCountry = 'ARG';
    const newRelease = 2020;
    const newImage = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg';

    existingFilm.filmname = newFilmname;
    existingFilm.country = newCountry;
    existingFilm.release = newRelease;
    existingFilm.image = newImage;
    existingFilm.director = existingDirector2;
    existingFilm.cast = existingCast2;

    const updatedFilm: Film = await filmService.save(existingFilm);

    expect(updatedFilm.filmname).toEqual(newFilmname);
    expect(updatedFilm.country).toEqual(newCountry);
    expect(updatedFilm.release).toEqual(newRelease);
    expect(updatedFilm.image).toEqual(newImage);
    expect(updatedFilm.director).toEqual(existingDirector2);
    expect(updatedFilm.cast).toEqual(existingCast2);

    const finalCount = await manager.getRepository(Film).count();

    expect(initialFilmCount).toEqual(finalCount);

    done();

  });

  test('Delete existing film, deletes the film.', async (done: Function): Promise<void> => {

    const newFilm: Film = await new FilmBuilder()
      .withFilmName('Forrest Gump')
      .withCountry('USA')
      .withRelease(1994)
      .withImage('https://image.tmdb.org/t/p/w600_and_h900_bestv2/clolk7rB5lAjs41SD0Vt6IXYLMm.jpg')
      .withDirector(existingDirector1)
      .withCast(existingCast1)
      .buildAndPersist();

    await filmService.delete(newFilm.id);

    const retrievedFilm = await manager.findOne(Film, newFilm.id);

    expect(retrievedFilm).toBeUndefined();

    done();

  });

});
