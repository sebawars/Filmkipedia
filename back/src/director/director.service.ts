import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Director } from './director.entity';

@Injectable()
export class DirectorService {
  constructor(
    @InjectRepository(Director) private directorRepository: Repository<Director>
  ) {}

  private readonly logger: Logger = new Logger(DirectorService.name);

  async findAll(): Promise<Director[]> {
    this.logger.debug(`Retrieving directors`);
    
    return await this.directorRepository.find();
  }
}
