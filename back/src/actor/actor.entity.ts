import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Film } from '../film/film.entity';
import { ActorDto } from './dto/actor.dto';

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

  toActorDto(): ActorDto {
    const actorDto: ActorDto = new ActorDto();
    actorDto.id = this.id;
    actorDto.name = this.name;
    actorDto.surname = this.surname;
    return actorDto;
  }
}
