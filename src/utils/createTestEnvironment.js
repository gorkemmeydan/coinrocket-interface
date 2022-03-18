import { makeServer } from 'mirage';

const createTestEnvironment = () => {
  if (window.Cypress) {
    const server = makeServer();
    server.logging = true;
  }
};

export default createTestEnvironment;
