import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
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
  @ManyToMany((type) => Actor, (actor) => actor.films, {
    eager: true,
    cascade: true,
  })
  @JoinTable({ name: "film_actor" })
  cast: Actor[];

  toFilmDto(): FilmDto {
    const filmDto: FilmDto = new FilmDto();
    filmDto.filmname = this.filmname;
    filmDto.country = this.country;
    filmDto.release = this.release;
    filmDto.director = this.director;
    filmDto.image = this.image;
    filmDto.cast = this.cast;
    return filmDto;
  }
}
