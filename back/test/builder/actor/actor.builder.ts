import { Builder } from '../builder';
import { Actor } from '../../../src/actor/actor.entity';

export class ActorBuilder extends Builder<Actor> {
  constructor() {
    super();
    this.instance = new Actor();
  }

  withName(name: string): ActorBuilder {
    this.instance.name = name;
    return this;
  }

  withSurName(surname: string): ActorBuilder {
    this.instance.surname = surname;
    return this;
  }
}
