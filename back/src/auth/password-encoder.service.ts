import { Injectable } from '@nestjs/common';
import { compareSync, hashSync } from 'bcrypt';

@Injectable()
export class PasswordEncoderService {
  private static readonly SALT_ROUNDS = 10;

  encode(password: string): string {
    return hashSync(password, PasswordEncoderService.SALT_ROUNDS);
  }

  check(password: string, encodedPassword: string): boolean {
    return compareSync(password, encodedPassword);
  }
}
