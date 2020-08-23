import { getConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const connectionOptions = async (): Promise<any> => ({
  ...(await getConnectionOptions()),
  autoLoadEntities: true,
  migrationsRun: process.env.NODE_ENV != 'test' ? true : false,
  migrations: [`${__dirname}/migrations/**/*{.ts,.js}`],
  namingStrategy: new SnakeNamingStrategy(),
});

// This exists because a limitation of Sqlite and bigint autoincrement columns
export const getIdColumnType = (): string =>
  process.env.NODE_ENV === 'test' ? 'integer' : 'bigint';
