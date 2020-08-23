import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Film } from '../film/film.entity';

@Entity()
export class Director {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  surname: string;
  @OneToMany(type => Film, film => film.director)
  films: Film[];
}
