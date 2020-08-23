import { Builder } from '../builder';
import { User } from '../../../src/user/user.entity';

export class UserBuilder extends Builder<User> {
  constructor() {
    super();
    this.instance = new User();
    this.instance.enabled = false;
  }

  withUsername(username: string): UserBuilder {
    this.instance.username = username;
    return this;
  }

  withPassword(password: string): UserBuilder {
    this.instance.password = password;
    return this;
  }
  
  enabled(): UserBuilder {
    this.instance.enabled = true;
    return this;
  }

}
