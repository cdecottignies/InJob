const request = require('supertest')
const app = require('../server.js')

describe('Users', () => {
    it('POST /users --> create a user', async () => {
        const res = await request(app)
            .post('/api/users')
            .send({
                firstName: 'Jean',
                lastName: 'Luc',
                email: 'jeanluc@example.com',
                password: '123456789',
                phone: '124'
            })
        expect(res.status).toEqual(201)
        expect(res.body).toHaveProperty('firstName')
        expect(res.body).toHaveProperty('lastName')
        expect(res.body).toHaveProperty('email')
        expect(res.body).toHaveProperty('password')
        expect(res.body).toHaveProperty('phone')
    }),

    // Ce test est bizare
    it('should show all users', async () => {
        const res = await request(app).get('/api/users')
        expect(res.status).toEqual(200)
    }),    
    
    it('GET /users --> show a user', async () => {
        const res = await request(app).get('/api/users/3')
        expect(res.status).toEqual(200)
        expect(res.body).toHaveProperty('firstName')
    }),

    it('PUT /users --> should update a user', async () => {
        const res = await request(app)
            .put('/api/users/3')
            .send({
                firstName: 'Bob',
                lastName: 'Smith',
                email: 'bob@doe.com',
                password: 'abc123'
            })
        expect(res.statusCode).toEqual(200)
    }),

    it('DELETE /users/:id --> should delete a user', async () => {
        const res = await request(app)
            .del('/api/users/3')
        expect(res.statusCode).toEqual(204)
    })
    ,

    it('DELETE /users --> should delete all users', async () => {
        const res = await request(app)
            .del('/api/users')
        expect(res.statusCode).toEqual(204)
    })
})