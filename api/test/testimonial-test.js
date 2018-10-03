const should = require('chai').should();
const expect = require('chai').expect;
const request = require('supertest')("http://localhost:3001/api");


describe('GET testimonial API', () => {

    let token = null;


    // first, get token
    before(function (done) {
        request.post('/signin')
            .send({username: 'admin', password: 'admin'})
            .end(function (err, res) {
                token = res.body.token;
                done();
            });
    });


    it('should return status 200 when getting testimonial from db successfully', (done) => {
        request.get('/testimonials')
            .set('Authorization', token)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .expect("Content-Type", /json/)
            .expect(200, done)
    });

    it('should return "error" if not found from db', (done) => {
        request.get('/wrongEndpoint')
            .set('Authorization', token)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .expect(404)
            .end((err) => {
                if (err) return done(err);
                done();
            });

    });

    it('should return "unauthorized" if valid token is missing', (done) => {
        request.get('/testimonials')
            .set('Accept', 'application/json')
            .expect("Content-Type", /json/)
            .expect(401)
            .end((err) => {
                if (err) return done("Unauthorized");
                done();
            });

    });

    it('should return an array', (done) => {
        request.get('/testimonials')
            .set('Authorization', token)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .expect("Content-Type", /json/)
            .expect(200)
            .end((err, res) => {
                res.body.should.be.an('object');
                done()
            })
    })
});


