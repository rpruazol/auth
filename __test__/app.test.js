'use strict';



const supertest = require('supertest');



describe('routes',() => {
  test('new user signup', async () => {
    const username = 'test';
    const password = 'testpassword';

    const response = await supertest.post({username, password})
    expect(response.status).toBe(200);
    expect(response.text).toBe('dunno')
  })
})