import { Builder } from '../builder';
import { Director } from '../../../src/director/director.entity';

export class DirectorBuilder extends Builder<Director> {
  constructor() {
    super();
    this.instance = new Director();
  }

  withName(name: string): DirectorBuilder {
    this.instance.name = name;
    return this;
  }

  withSurName(surname: string): DirectorBuilder {
    this.instance.surname = surname;
    return this;
  }
}
