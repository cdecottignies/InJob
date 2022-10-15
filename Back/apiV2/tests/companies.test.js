const request = require('supertest')
const app = require('../server.js')
const bcrypt = require("bcryptjs");
const testConfig = require('../config/test.config.js').testConfig

describe('Companies', () => {
    it('POST /companies --> create a companie', async () => {
        const res = await request(app)
            .post('/api/companies')
            .send({
                token: testConfig.tokenAdmin,
                name: 'Jean',
                SIRET: 'Luc',
                numEmploye: 50,
                desc: 'azertyRTYU456',
                link: '124',
                logo: 'oui'
            })
        expect(res.status).toEqual(201)
        expect(res.body.name).toBe(1)
        expect(res.body.SIRET).toBe('Jean')
        expect(res.body.numEmploye).toBe('Luc')
        expect(res.body.desc).toBe('jeanluc@example.com')
        expect(res.body.link).toBe('azertyRTYU456')
        expect(res.body.logo).toBe('oui')
    }),

    it('GET /companies --> get all companies', async () => {
        const res = await request(app)
        .get(`/api/companies/admin/${testConfig.tokenAdmin}`)
        expect(res.status).toEqual(200)
        expect(res.body).toEqual(expect.any(Array))
    }),    

    it('PUT /companies/:id --> the admin should be able to update a companie', async () => {
        const res = await request(app)
            .put('/api/companies/1')
            .send({
                token: testConfig.tokenAdmin,
                name: 'Bob',
                SIRET: 'Smith',
                logo: 'abERTYUc123'
            })
        expect(res.statusCode).toEqual(204)
        expect(res.body).toEqual({})
    }),

    it('DELETE /companies/:id --> should delete a companie', async () => {
        const res = await request(app)
            .delete('/api/companies/:id')
            .send({
                token: testConfig.tokenAdmin
            })
        expect(res.statusCode).toEqual(204)
    }),

    it('DELETE /companies --> should delete all companies', async () => {
        const res = await request(app)
            .delete('/api/users')
            .send({
                token: testConfig.tokenAdmin,
            })
        expect(res.statusCode).toEqual(204)
    })
})