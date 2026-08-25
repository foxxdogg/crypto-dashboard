import '@testing-library/jest-dom';
import { server } from './mock/server';
import { store } from './app/store';
import { cryptoApi } from './slices/cryptoApi';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

afterEach(() => {
  server.resetHandlers();
  store.dispatch(cryptoApi.util.resetApiState());
});
afterAll(() => server.close());
