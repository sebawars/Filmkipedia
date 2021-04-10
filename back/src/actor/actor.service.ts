import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Actor } from './actor.entity';

@Injectable()
export class ActorService {
  constructor(
    @InjectRepository(Actor) private actorRepository: Repository<Actor>
  ) {}

  private readonly logger: Logger = new Logger(ActorService.name);

  async findAll(): Promise<Actor[]> {
    this.logger.debug(`Retrieving actors`);
    
    return await this.actorRepository.find();
  }
}
