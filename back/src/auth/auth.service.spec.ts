import { AuthService } from './auth.service';
import { PasswordEncoderService } from './password-encoder.service';
import { UserBuilder } from '../../test/builder/user/user.builder';
import { User } from '../user/user.entity';
import { getProvider } from '../../test/test.util';
import { EntityManager } from 'typeorm';

describe('AuthService Tests', (): void => {

  let authService: AuthService;
  let passwordEncoderService: PasswordEncoderService;
  let manager: EntityManager;
  
  beforeAll(async (): Promise<void> => {
    authService = getProvider(AuthService);
    manager = getProvider(EntityManager); 
    passwordEncoderService = getProvider(PasswordEncoderService); 
  });


  test('Validate existing user, returns the user.', async (done: Function): Promise<void> => {

    const username = 'sebawars';
    const password = 'pepe';
    const encodedPassword = passwordEncoderService.encode(password);


    const newUser: User = await new UserBuilder()
    .withUsername(username)
    .withPassword(encodedPassword)
    .enabled()
    .buildAndPersist();

    const validatedUser = await authService.validateUser(newUser.username, password);

    expect(validatedUser).not.toBeUndefined;
    
    expect(validatedUser.username).toEqual(username);
    expect(validatedUser.enabled).toEqual(true);

    done();

  });

  test('Validate user with non existing user, returns null.', async (done: Function): Promise<void> => {

    const username = 'sebawars';
    const password = 'pepe';

    const validatedUser = await authService.validateUser(username, password);

    expect(validatedUser).toBeNull;

    done();

  });

  test('Validate user with disabled user, returns null.', async (done: Function): Promise<void> => {

    const username = 'sebawars';
    const password = 'pepe';
    const encodedPassword = passwordEncoderService.encode(password);

    const newUser: User = await new UserBuilder()
    .withUsername(username)
    .withPassword(encodedPassword)
    .buildAndPersist();

    const validatedUser = await authService.validateUser(newUser.username, password);

    expect(validatedUser).toBeNull;

    done();

  });

  test('Validate user with wrong password, returns null.', async (done: Function): Promise<void> => {

    const username = 'sebawars';
    const password = 'pepe';
    const wrongPassword = 'carlos';
    const encodedPassword = passwordEncoderService.encode(password);

    const newUser: User = await new UserBuilder()
    .withUsername(username)
    .withPassword(encodedPassword)
    .enabled()
    .buildAndPersist();

    const validatedUser = await authService.validateUser(newUser.username, wrongPassword);

    expect(validatedUser).toBeNull;

    done();

  });  

  test('Login with existing user, returns valid access token.', async (done: Function): Promise<void> => {

    const username = 'sebawars';
    const password = 'pepe';
    const encodedPassword = passwordEncoderService.encode(password);


    const newUser: User = await new UserBuilder()
    .withUsername(username)
    .withPassword(encodedPassword)
    .enabled()
    .buildAndPersist();

    const token = await authService.login(newUser);

    expect(token.access_token).toBeTruthy;

    done();

  });

});
