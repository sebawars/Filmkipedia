import { ActorService } from "./actor.service";
import { getProvider } from "../../test/test.util";
import { ActorBuilder } from "../../test/builder/actor/actor.builder";
import { Actor } from "./actor.entity";

describe("ActorService Tests", (): void => {
  let actorService: ActorService;

  beforeAll(
    async (): Promise<void> => {
      actorService = getProvider(ActorService);
    }
  );

  test("Find all actors, returns existing actors.", async (done: Function): Promise<
    void
  > => {
    let existingActor1: Actor;
    let existingActor2: Actor;
    existingActor1 = await new ActorBuilder()
      .withName("Tom")
      .withSurName("Hanks")
      .buildAndPersist();

    existingActor2 = await new ActorBuilder()
      .withName("Tom")
      .withSurName("Cruise")
      .buildAndPersist();

    const retrievedActors: Actor[] = await actorService.findAll();

    expect(retrievedActors).toHaveLength(2);
    expect(retrievedActors).toContainEqual(existingActor1);
    expect(retrievedActors).toContainEqual(existingActor2);

    done();
  });
});
