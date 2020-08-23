import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { UserDto } from './dto/user.dto';

@Entity()
@Unique(["username"])
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  enabled: boolean;

  toUserDto(): UserDto {
    const userDto: UserDto = new UserDto();
    userDto.username = this.username;
    userDto.password = this.password;
    return userDto;
  }

}
