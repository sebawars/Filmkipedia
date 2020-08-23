import {
  rollbackTransaction,
  setupTestEnvironment,
  startTransaction,
} from './test.util';

beforeAll(
  async (done: Function): Promise<void> => {
    await setupTestEnvironment();
    done();
  }
);

beforeEach(
  async (done: Function): Promise<void> => {
    await startTransaction();
    done();
  }
);

afterEach(
  async (done: Function): Promise<void> => {
    await rollbackTransaction();
    done();
  }
);
