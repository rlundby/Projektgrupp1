const should = require('chai').should();
const expect = require('chai').expect;
const request = require('supertest')("http://localhost:3001/api/get-monthly-earnings");


//todo   lägg till test som fångar upp om token saknas



describe('GET /get-monthly-earnings, returns correct status codes', () => {

    it('Status 200 should be returned, and json object with earnings', (done) => {
        request.get('/')
            .set('Accept', 'application/json')
            .expect("Content-Type", /json/)
            .expect(200, done)
    });

    it('Should return error if badly formated', (done) => {
        request.get('/get-monthly-earnings/notok')
            .set('Accept', 'application/json')
            .expect(404)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    })
});


