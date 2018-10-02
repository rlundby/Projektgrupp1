const should = require('chai').should();
const expect = require('chai').expect;
const request = require('supertest')("http://localhost:3001/api");

describe('GET /get-monthly-earnings, returns correct status codes', () => {

    let token = null;

    // Make sure we have a valid token
    before(function (done) {
        request.post('/signin')
            .send({username: 'admin', password: 'admin'})
            .end(function (err, res) {
                token = res.body.token;
                done();
            });
    });

    it('Status 200 should be returned, and json object with earnings', (done) => {
        request.get('/get-monthly-earnings')
            .set('Authorization', token)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .expect("Content-Type", /json/)
            .expect(200, done)
    });

    it('Should return error if badly formated', (done) => {
        request.get('/get-monthly-earnings/notok')
            .set('Authorization', token)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .expect(404)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    })
});


