const request = require('supertest')("http://localhost:3001/api");

describe('Checks getProducts API', function(){

    let token = null;

    // first, get token
    before(function(done) {
        request.post('/signin')
            .send({ username: 'admin', password: 'admin' })
            .end(function(err, res) {
                token = res.body.token;
                done();
            });
    });

    it('Function getProducts should return 200 OK', function(done) {
         request.get('/products')
            .set('Authorization', token)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .expect("Content-Type", /json/)
            .expect(200, done)
    });

    it('Function getProducts should return an array', function(done) {
        request.get('/products')
            .set('Authorization', token)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .expect("Content-Type", /json/)
            .expect(200)
            .end((err, res) => {
                res.body.should.be.an('array');
                done()
            })


    });
   
});