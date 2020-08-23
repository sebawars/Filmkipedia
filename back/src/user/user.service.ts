import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as Yup from 'yup';
import { PasswordEncoderService } from '../auth/password-encoder.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private passwordEncoderService: PasswordEncoderService
  ) {}

  private readonly logger: Logger = new Logger(UserService.name);

  findByUsername(username: string): Promise<User> {
    this.logger.debug(`Retrieving user with username' : ${username}}`);
    
    return this.userRepository.findOne( { username } );
  }

  async save(user: User): Promise<User> {
    user.enabled = true;
    this.logger.debug(`Saving user: ${user}`);
    this.validate(user);
    user.password = this.passwordEncoderService.encode(
      user.password
    );
    const savedUser: User = await this.userRepository.save(user);
    savedUser.password = null;
    this.logger.debug(`Saved user: ${JSON.stringify(savedUser)}`);
    return savedUser;
  }

  private validate(user: User): void {

    const schema: Yup.ObjectSchema = Yup.object().shape({
      username: Yup.string().required(),
      password: Yup.string().required()
    });
  
    try {
      schema.validateSync(user);
    } catch (error) {
      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    }
  }

}
