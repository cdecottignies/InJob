const request = require('supertest')
const app = require('../server')

describe('Advertisements', () => {
    it('POST /advertisements --> create a new ad', async () => {
        const res = await request(app)
        .post('/api/advertisements')
        .send({
            companieId: 1,
            title: "je",
            descShort: "Je suis",
            descLong: "Je suis toi",
            wages: 1900,
            place: { "city": "Lille", "street": "Liberte"},
            degree: "BAC+1",
            workingTime: "flexible",
            workingLocation: "remote",
            contractType: "CDI",
            contractStart: 1665071052,
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjY1NjkxODc5LCJleHAiOjE2NjYwNTE4Nzl9.sIxca7OR654zIaFE1s4YiillfRU03ewrHwFgEeaD1xM"
        })
        expect(res.status).toEqual(201)
        expect(res.body.companieId).toBe(1)
        expect(res.body.userId).toBe(3)
        expect(res.body.title).toBe("je")
        expect(res.body.descShort).toBe("Je suis")
        expect(res.body.descLong).toBe("Je suis toi")
        expect(res.body.wages).toBe(1900)
        expect(res.body.place).toEqual({ "city": "Lille", "street": "Liberte"})
        expect(res.body.degree).toBe("BAC+1")
        expect(res.body.workingTime).toBe("flexible")
        expect(res.body.workingLocation).toBe("remote")
        expect(res.body.contractType).toBe("CDI")
        expect(res.body.contractStart).toEqual("1970-01-20")
        expect(res.body).not.toHaveProperty('token')
    });

    // TODO: Fin a way to test this route, I have to control the value in the object
    it('GET /advertisements --> get all ads', async () => {
        const res = await request(app).get('/api/advertisements')
        expect(res.status).toEqual(200)
        // Test if res is an array
        expect(res.body).toEqual(expect.any(Array))

    });

    it('PUT /advertisements/:id --> update one advert by id', async () => {
        const res = await request(app)
        .put('/api/advertisements/1')
        .send({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjY1NjkxODc5LCJleHAiOjE2NjYwNTE4Nzl9.sIxca7OR654zIaFE1s4YiillfRU03ewrHwFgEeaD1xM" })
        expect(res.statusCode).toEqual(200)
        // expect(res.body.message).toBe('Advertisement with id=1 sucessfully updated.')
        // expect(res.body).toBe('Advertisement with id=1 sucessfully updated.')
        expect(res.body).toEqual(expect.any(Object))
    });

    it('DELETE /advertisements/:id --> delete one advert by id', async () => {
        const res = await request(app)
        .delete('/api/advertisements/1')
        .send({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjY1NjkxODc5LCJleHAiOjE2NjYwNTE4Nzl9.sIxca7OR654zIaFE1s4YiillfRU03ewrHwFgEeaD1xM" })
        expect(res.statusCode).toEqual(204)
    });

    it('DELETE /advertisements/:id --> try to delete an non existing advert', async () => {
        const res = await request(app)
        .delete('/api/advertisements/10000')
        .send({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjY1NjkxODc5LCJleHAiOjE2NjYwNTE4Nzl9.sIxca7OR654zIaFE1s4YiillfRU03ewrHwFgEeaD1xM" })
        expect(res.statusCode).toEqual(404)
    });

    it('DELETE /advertisements/ --> delete all adverts', async () => {
        const res = await request(app)
        .delete('/api/advertisements/')
        .send({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjY1NjkxODc5LCJleHAiOjE2NjYwNTE4Nzl9.sIxca7OR654zIaFE1s4YiillfRU03ewrHwFgEeaD1xM" })
        expect(res.statusCode).toEqual(200)
    });    
})