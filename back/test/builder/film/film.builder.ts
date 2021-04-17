import { Builder } from "../builder";
import { Film } from "../../../src/film/film.entity";
import { Director } from "src/director/director.entity";
import { Actor } from "src/actor/actor.entity";
import { ActorBuilder } from "../actor/actor.builder";

export class FilmBuilder extends Builder<Film> {
  constructor() {
    super();
    this.instance = new Film();
  }

  withFilmName(filmName: string): FilmBuilder {
    this.instance.filmname = filmName;
    return this;
  }

  withCountry(country: string): FilmBuilder {
    this.instance.country = country;
    return this;
  }

  withRelease(release: number): FilmBuilder {
    this.instance.release = release;
    return this;
  }

  withImage(image: string): FilmBuilder {
    this.instance.image = image;
    return this;
  }

  withVideo(video: string): FilmBuilder {
    this.instance.video = video;
    return this;
  }

  withDirector(director: Director): FilmBuilder {
    this.instance.director = director;
    return this;
  }

  withCast(cast: Actor[]): FilmBuilder {
    this.instance.cast = cast;
    return this;
  }
}
