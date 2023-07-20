'use strict';

const { app, sequelize } = require('../src/app');
const supertest = require('supertest');

const request = supertest(app);

const username = 'test';
const password = 'testpassword';

describe('routes', () => {
  const username = 'test';
  const password = 'testpassword';

  beforeAll(async () => {
    await sequelize.sync();
  });

  afterAll(async () => {
    await sequelize.drop();
  });

  test('new user signup', async () => {
    const response = await request
      .post('/signup')
      .send({ username: username, password: password });
    expect(response.status).toBe(200);
    expect(JSON.parse(response.text).username).toBe('test');
  });

  test('send user via basic auth', async () => {
    const response = await request.post('/signin').auth(username, password);
    expect(response.status).toBe(200);
    expect(JSON.parse(response.text).username).toBe('test');
  });
});
