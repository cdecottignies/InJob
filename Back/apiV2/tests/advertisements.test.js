const request = require('supertest')
const app = require('../server')

describe('Advertisements', () => {
    it('POST /advertisements --> create a new ad', async () => {
        const res = await request(app)
        .post('/api/advertisements')
        .send({
            title: "je",
            descShort: "Je suis",
            descLong: "Je suis toi",
            wages: 1900,
            place: { "city": "Lille", "street": "Liberte"},
            degree: "BAC+1",
            workingTime: "flexible",
            workingLocation: "remote",
            contractType: "CDI",
            contractStart: 1665071052
        })
        expect(res.status).toEqual(201)
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
    });
    
    it('GET /advertisements --> specific ad by ID', async () => {
        return request(app)
        .get('/api/advertisements/1')
        .expect(res.status).toEqual(200)
        .expect('Content-Type', /json/)
        
    });

    it('GET /advertisements --> get all ads', async () => {
        const res = await request(app).get('/api/advertisements')
        expect(res.status).toEqual(200)
    });

    // it('should show all advertisements', async () => {
    //     const res = await request(app).get('/api/advertisements')
    //     expect(res.statusCode).toEqual(200)
    //     expect(res.body).to
    // });

    
})