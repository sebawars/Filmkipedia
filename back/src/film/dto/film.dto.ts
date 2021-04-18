import { Film } from "../film.entity";
import { Actor } from "src/actor/actor.entity";
import { Director } from "src/director/director.entity";

export class FilmDto {
  filmname: string;
  cast: Actor[];
  country: string;
  director: Director;
  image: string;
  video: string;
  description: string;
  release: number;

  toFilm(): Film {
    const film: Film = new Film();
    film.filmname = this.filmname;
    film.cast = this.cast;
    film.country = this.country;
    film.director = this.director;
    film.image = this.image;
    film.video = this.video;
    film.description = this.description;
    film.release = this.release;
    return film;
  }
}
