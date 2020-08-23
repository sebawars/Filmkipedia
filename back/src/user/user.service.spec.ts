import { BadRequestException } from '@nestjs/common';
import { UserService } from './user.service';
import { PasswordEncoderService } from '../auth/password-encoder.service';
import { UserBuilder } from '../../test/builder/user/user.builder';
import { User } from './user.entity';
import { getProvider } from '../../test/test.util';
import { EntityManager } from 'typeorm';
import e = require('express');

describe('UserService Tests', (): void => {

  let userService: UserService;
  let manager: EntityManager;
  let passwordEncoderService: PasswordEncoderService;
  
  beforeAll(async (): Promise<void> => {
    userService = getProvider(UserService);
    manager = getProvider(EntityManager); 
    passwordEncoderService = getProvider(PasswordEncoderService); 
  });


  test('Save user, with invalid input, returns BadRequestException.', async (done: Function): Promise<void> => {

    const newUser: User = new UserBuilder()
    .build();

    expect(userService.save(newUser)).rejects.toBeInstanceOf(BadRequestException);

    done();

  });



  test('Save user, with valid input, creates new user.', async (done: Function): Promise<void> => {

    const username = 'sebawars';
    const password = 'pepe';
    const encodedPassword = passwordEncoderService.encode(password);

    const newUser: User = new UserBuilder()
    .withUsername(username)
    .withPassword(password)
    .enabled()
    .build();

    const initialUserCount = await manager.getRepository(User).count();

    const savedUser = await userService.save(newUser);

    const finalCount = await manager.getRepository(User).count();

    expect(savedUser.username).toEqual(username);
    expect(passwordEncoderService.check(password, encodedPassword)).toBeTruthy
    expect(savedUser.enabled).toBeTruthy
    expect(initialUserCount + 1 ).toEqual(finalCount);

    done();

  });

  test('Find user by username, returns existing user.', async (done: Function): Promise<void> => {

    const username = 'sebawars';
    const password = 'pepe';
    const encodedPassword = passwordEncoderService.encode(password);

    const existingUser: User = await new UserBuilder()
    .withUsername(username)
    .withPassword(encodedPassword)
    .enabled()
    .buildAndPersist();

    const retrievedUser = await userService.findByUsername(username);

    expect(retrievedUser.username).toEqual(username);
    expect(passwordEncoderService.check(password, encodedPassword)).toBeTruthy
    expect(retrievedUser.enabled).toBeTruthy;

    done();

  });

});
