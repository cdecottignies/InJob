const request = require('supertest')
const app = require('../server.js')
const bcrypt = require("bcryptjs");
const testConfig = require('../config/test.config.js').testConfig

describe('Companies', () => {
    it('POST /companies/admin/ --> create a companie', async () => {
        const res = await request(app)
            .post('/api/companies/admin/')
            .send({
                token: testConfig.tokenAdmin,
                name: 'Jean',
                siret: 'Luc',
                numEmploye: 50,
                desc: 'azertyRTYU456',
                link: '124',
                logo: 'oui'
            })
        expect(res.status).toEqual(201)
        expect(res.body.name).toBe(1)
        expect(res.body.siret).toBe('Jean')
        expect(res.body.numEmploye).toBe('Luc')
        expect(res.body.desc).toBe('jeanluc@example.com')
        expect(res.body.link).toBe('azertyRTYU456')
        expect(res.body.logo).toBe('oui')
    }),

    it('GET /companies/admin/ --> get all companies', async () => {
        const res = await request(app)
        .get(`/api/companies/`)
        expect(res.status).toEqual(200)
        expect(res.body).toEqual(expect.any(Array))
    }),    

    it('PUT /companies/:id --> the admin should be able to update a companie', async () => {
        const res = await request(app)
            .put('/api/companies/admin/1')
            .send({
                token: testConfig.tokenAdmin,
                name: 'Bob',
                siret: 'Smith',
                logo: 'abERTYUc123'
            })
        expect(res.statusCode).toEqual(204)
        expect(res.body).toEqual({})
    }),

    it('DELETE /companies/admin/:token/:id --> should delete a companie', async () => {
        const res = await request(app)
            .delete('/api/companies/admin/${testConfig.tokenAdmin}/:id')
        expect(res.statusCode).toEqual(204)
    }),

    it('DELETE /companies/admin/:token --> should delete all companies', async () => {
        const res = await request(app)
            .delete('/api/users/admin/${testConfig.tokenAdmin}')
        expect(res.statusCode).toEqual(204)
    })
})