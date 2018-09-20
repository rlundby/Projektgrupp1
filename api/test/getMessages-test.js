const should = require('chai').should();
const expect = require('chai').expect;
const request = require('supertest')("http://localhost:3001/api/messages");



describe('GET /messages, returns correct status codes', () => {

    it('should return status 200 when getting messages from db successfully', (done) => {
        request.get('/')
            .set('Accept', 'application/json')
            .expect("Content-Type", /json/)
            .expect(200, done)
    });

    it('should return "error" if not found from db', (done) => {
        request.get('/wrongEndpoint')
            .set('Accept', 'application/json')
            .expect("Content-Type", /json/)
            .expect(500)
            .end((err) => {
                if (err) return done(err);
                done();
            });

    })

});


describe('GET /messages', () => {

    it('should return an array', (done) => {
        request.get('/')
            .set('Accept', 'application/json')
            .expect("Content-type", /json/)
            .expect(200)
            .end((err, res) => {
                res.body.should.be.an('array');
                done()
            })
    })
});
