import { Injectable, Logger, BadRequestException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Like, Repository } from "typeorm";
import { Film } from "./film.entity";
import * as Yup from "yup";
import { KeyObject } from "crypto";

@Injectable()
export class FilmService {
  constructor(
    @InjectRepository(Film) private filmRepository: Repository<Film>
  ) {}

  private readonly logger: Logger = new Logger(FilmService.name);

  async findAndPaginate(
    take: number,
    skip: number,
    order: "ASC" | "DESC" | 1 | -1 = "DESC",
    search?: string
  ): Promise<[Film[], number]> {
    this.logger.debug(
      `Retrieving films${order ? ` with order: ${order}` : ""}`
    );

    let filtros = {
      take: take,
      skip: skip,
    };

    if (order) filtros["order"] = { filmname: order };

    if (search) filtros["where"] = { filmname: Like("%" + search + "%") };

    return await this.filmRepository.findAndCount({
      ...filtros,
    });
  }

  async findById(id: number): Promise<Film> {
    this.logger.debug(`Retrieving film ${id}`);

    return await this.filmRepository.findOne(id);
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
    const directorSchema = {
      name: Yup.string().required(),
      surname: Yup.string().required(),
    };
    const actorSchema = {
      name: Yup.string().required(),
      surname: Yup.string().required(),
    };

    const schema: Yup.ObjectSchema = Yup.object().shape({
      filmname: Yup.string().required(),
      country: Yup.string().required(),
      release: Yup.number().required(),
      director: Yup.object(directorSchema).required(),
      image: Yup.string().required(),
      cast: Yup.array(Yup.object(actorSchema)).required(),
    });

    try {
      schema.validateSync(film);
    } catch (error) {
      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    }
  }
}
