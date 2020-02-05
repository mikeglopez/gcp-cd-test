const request = require('supertest');
const app = require('./app')

describe('App', () => {
    // test('should return 200', async () => {
    //     const response = await request(app).get('/');
    //     expect(response.statusCode).toBe(200);
    // });
    // test('should return Hello World!', async () => {
    //     const response = await request(app).get('/');
    //     expect(response.text).toBe('Hello World!');
    // });
    test('should return 418', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(418);
    });
    test("should return I'm a teapot", async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe("I'm a teapot");
    });
})
