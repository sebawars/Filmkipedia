import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import { Actor } from "../actor/actor.entity";
import { Director } from "../director/director.entity";
import { FilmDto } from "./dto/film.dto";

@Entity()
export class Film {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  filmname: string;
  @Column()
  country: string;
  @Column()
  release: number;
  @ManyToOne((type) => Director, { eager: true, cascade: true })
  director: Director;
  @Column()
  image: string;
  @Column()
  video: string;
  @Column()
  description: string;
  @ManyToMany((type) => Actor, (actor) => actor.films, {
    eager: true,
    cascade: true,
  })
  @JoinTable({ name: "film_actor" })
  cast: Actor[];

  toFilmDto(): FilmDto {
    const filmDto: FilmDto = new FilmDto();
    filmDto.id = this.id;
    filmDto.filmname = this.filmname;
    filmDto.country = this.country;
    filmDto.release = this.release;
    filmDto.director = this.director;
    filmDto.image = this.image;
    filmDto.video = this.video;
    filmDto.description = this.description;
    filmDto.cast = this.cast;
    return filmDto;
  }
}
