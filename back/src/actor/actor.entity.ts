import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Film } from '../film/film.entity';
//import { Film_Actor } from 'src/migrationsaux/film_actor.entity';

@Entity()
export class Actor {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  surname: string;
  @ManyToMany(type => Film, film => film.cast)
  films: Film[];
}
