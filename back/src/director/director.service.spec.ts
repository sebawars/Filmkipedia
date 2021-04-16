import { DirectorService } from "./director.service";
import { getProvider } from "../../test/test.util";
import { DirectorBuilder } from "../../test/builder/director/director.builder";
import { Director } from "./director.entity";

describe("DirectorService Tests", (): void => {
  let directorService: DirectorService;

  beforeAll(
    async (): Promise<void> => {
      directorService = getProvider(DirectorService);
    }
  );

  test("Find all directors, returns existing directors.", async (done: Function): Promise<
    void
  > => {
    let existingDirector1: Director;
    let existingDirector2: Director;
    existingDirector1 = await new DirectorBuilder()
      .withName("Tom")
      .withSurName("Hanks")
      .buildAndPersist();

    existingDirector2 = await new DirectorBuilder()
      .withName("Tom")
      .withSurName("Cruise")
      .buildAndPersist();

    const retrievedDirectors: Director[] = await directorService.findAll();

    expect(retrievedDirectors).toHaveLength(2);
    expect(retrievedDirectors).toContainEqual(existingDirector1);
    expect(retrievedDirectors).toContainEqual(existingDirector2);

    done();
  });
});
