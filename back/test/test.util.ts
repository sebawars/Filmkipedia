import { Type, INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Connection, QueryRunner } from 'typeorm';
import { AppModule } from '../src/app.module';

let app: INestApplication;
let queryRunner: QueryRunner;

export const setupTestEnvironment = async (): Promise<void> => {
  if (!app) {
    app = await NestFactory.create(AppModule);
    const connection: Connection = app.get<Connection>(Connection);
    queryRunner = connection.createQueryRunner();
  }
};

export const getProvider = (providerType: Type<any>): any =>
  app.get<any>(providerType);

export const startTransaction = (): Promise<void> =>
  queryRunner.startTransaction();

export const rollbackTransaction = (): Promise<void> =>
  queryRunner.rollbackTransaction();
