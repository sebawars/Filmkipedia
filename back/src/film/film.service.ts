import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Film } from './film.entity';
import * as Yup from 'yup';

@Injectable()
export class FilmService {
  constructor(
    @InjectRepository(Film) private filmRepository: Repository<Film>
  ) {}

  private readonly logger: Logger = new Logger(FilmService.name);

  findAll(order?: string): Promise<Film[]> {
    this.logger.debug(`Retrieving films${order ? ' with order' : ''}`);
    
    return this.filmRepository.find( order ? { order: {filmname: (order =='ASC') ? 'ASC' : 'DESC'} } : {} );
  }

  async save(filmDto: Film): Promise<Film> {
    this.logger.debug(`Upserting film`);

    this.validate(filmDto);

    return this.filmRepository.save(filmDto);
  }

  async delete(id: number): Promise<void> {
    this.logger.debug(`Deleting film with id: ${id}`);

    await this.filmRepository.delete(id);
    
  }

  private validate(film: Film): void {

    const directorSchema = { name: Yup.string().required(), surname: Yup.string().required() }
    const actorSchema = { name: Yup.string().required(), surname: Yup.string().required() }

    const schema: Yup.ObjectSchema = Yup.object().shape({
      filmname: Yup.string().required(),
      country: Yup.string().required(),
      release: Yup.number().required(),
      director: Yup.object( directorSchema ).required(),
      image: Yup.string().required(),
      cast: Yup.array(Yup.object( actorSchema )).required()
    });

    try {
      schema.validateSync(film);
    } catch (error) {
      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    }
  }

}