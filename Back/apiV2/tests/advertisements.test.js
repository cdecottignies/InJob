const request = require('supertest')
const app = require('../server')

describe('Advertisements', () => {
    it('should show all advertisements', async () => {
        const res = await request(app).get('/api/advertisements')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('title')
    })
})