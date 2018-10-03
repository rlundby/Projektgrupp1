const should = require('chai').should();
const expect = require('chai').expect;
const request = require('supertest')('http://localhost:3001/api');


describe('"YEARLY" tests', () => {
    let token = null;
    before(function(done) {
        request.post('/signin')                             //sign in before testing
            .send({ username: 'admin', password: 'admin' })
            .end(function(err, res) {
                token = res.body.token;                     //save response
                done();
            });
    });

    it('"YEARLY" test should return status 200 OK when the data is recived correctly.', function (done) {
        request.get('/yearly')
        .set('Authorization', token)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .expect(200, done)
    });

    it('"YEARLY" test should return an array', function(done) {
        request.get('/yearly')
        .set('Authorization', token)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .expect("Content-type", "/json/")
        .expect(200)
        .end(function(err,res){
            res.body.result.should.be.an('array')
            done();
        });
    });
    it('"YEARLY" test market should return a number', function(done) {
        request.get('/yearly')
        .set('Authorization', token)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .expect("Content-type", "/json/")
        .expect(200)
        .end(function(err,res){
            res.body.result[0].market.should.be.an('number');
            done();
        });

    });
});