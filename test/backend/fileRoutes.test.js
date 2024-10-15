
// FILE: /mnt/data/ai-ide/test/backend/fileRoutes.test.js

const request = require('supertest');
const app = require('../../backend/server');

describe('POST /api/files/list', () => {
  it('should list files in a directory', async () => {
    const response = await request(app)
      .post('/api/files/list')
      .send({ path: '/' });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('files');
  });

  it('should return an error for an invalid path', async () => {
    const response = await request(app)
      .post('/api/files/list')
      .send({ path: '/invalid-path' });

    expect(response.statusCode).toBe(500);
    expect(response.body).toHaveProperty('error', 'Error listing files.');
  });
});
