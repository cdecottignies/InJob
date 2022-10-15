const request = require('supertest')
const app = require('../server.js')
const bcrypt = require("bcryptjs");
const testConfig = require('../config/test.config.js').testConfig


describe('Users', () => {
    // it('POST /users --> create a user', async () => {
    //     const res = await request(app)
    //         .post('/api/users/admin/')
    //         .send({
    //             token: testConfig.tokenAdmin,
    //             companieId: 1,
    //             firstName: 'Jean',
    //             lastName: 'Luc',
    //             email: 'jeanluc@example.com',
    //             password: 'azertyRTYU456',
    //             phone: '124'
    //         })
    //     expect(res.status).toEqual(201)
    //     expect(res.body.companieId).toBe(1)
    //     expect(res.body.firstName).toBe('Jean')
    //     expect(res.body.lastName).toBe('Luc')
    //     expect(res.body.email).toBe('jeanluc@example.com')
    //     // Find a way to test the password
    //     // expect(res.body.password).toBe(bcrypt.hashSync('123456789', 8))
    //     expect(res.body.phone).toBe('124')
    //     expect(res.body.isAdmin).toBe(false)
    // }),

    // it('GET /users --> get all users', async () => {
    //     const res = await request(app)
    //     .get(`/api/users/admin/${testConfig.tokenAdmin}`)
    //     expect(res.status).toEqual(200)
    //     expect(res.body).toEqual(expect.any(Array))
    // }),    
    
    // it('GET /users --> show the profile of a non admin user', async () => {
    //     const res = await request(app).get(`/api/users/${testConfig.token}`)
    //     expect(res.status).toEqual(200)
    //     expect(res.body).toEqual(expect.any(Object))
    //     expect(res.body).toHaveProperty('companieId')
    //     expect(res.body).toHaveProperty('firstName')
    //     expect(res.body).toHaveProperty('lastName')
    //     expect(res.body).toHaveProperty('email')
    //     expect(res.body).toHaveProperty('password')
    //     expect(res.body).toHaveProperty('phone')
    //     expect(res.body).toHaveProperty('isAdmin')
    //     expect(res.body.isAdmin).toBe(false)
    // }),

    // it('GET /users --> show an admin user', async () => {
    //     const res = await request(app).get('/api/users/${testConfig.tokenAdmin}')
    //     expect(res.status).toEqual(200)
    //     expect(res.body).toEqual(expect.any(Object))
    //     expect(res.body).toHaveProperty('companieId')
    //     expect(res.body).toHaveProperty('firstName')
    //     expect(res.body).toHaveProperty('lastName')
    //     expect(res.body).toHaveProperty('email')
    //     expect(res.body).toHaveProperty('password')
    //     expect(res.body).toHaveProperty('phone')
    //     expect(res.body).toHaveProperty('isAdmin')
    //     expect(res.body.isAdmin).toBe(true)
    // })

    // it('PUT /users/ --> a user should be able to update his profile', async () => {
    //     const res = await request(app)
    //         .put('/api/users/')
    //         .send({
    //             token: testConfig.token,
    //             firstName: 'Bob',
    //             lastName: 'Smith'
    //         })
    //     expect(res.statusCode).toEqual(204)
    //     expect(res.body).toEqual({})
    // }),

    it('DELETE /users/admin/:id --> should delete a user', async () => {
        const res = await request(app)
            .delete('/api/users/admin/1')
            .send({
                token: testConfig.tokenAdmin,
            })
        expect(res.statusCode).toEqual(204)
    }),

    it('DELETE /users --> should delete all users', async () => {
        const res = await request(app)
            .delete('/api/users/admin/')
            .send({
                token: testConfig.tokenAdmin,
            })
        expect(res.statusCode).toEqual(200)
    })
})