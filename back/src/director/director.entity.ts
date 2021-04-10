import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Film } from '../film/film.entity';
import { DirectorDto } from './dto/director.dto'

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

  toDirectorDto(): DirectorDto {
    const actorDto: DirectorDto = new DirectorDto();
    actorDto.id = this.id;
    actorDto.name = this.name;
    actorDto.surname = this.surname;
    return actorDto;
  }
}
