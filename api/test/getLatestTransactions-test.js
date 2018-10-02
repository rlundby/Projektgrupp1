const should =  require('chai').should();
const expect = require('chai').expect;
const request = require('supertest')("http://localhost:3001/api");
const transactions = require('../controllers/transactionsController');

// BDD Should
describe('BDD test with should', function(){

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

    it('Function getLatestTransactions should return 200 OK if we have valid token', function(done) {
        request.get('/transactions')
            .set('Authorization', token)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .expect(200, done);
    });
    it('Function getLatestTransactions should return transactions', function(done) {
        request.get('/transactions')
            .set('Authorization', token)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
                res.status.should.equal(200);
                res.body.length.should.not.equal(0);
                done();
            });
    });
    it('Function getLatestTransactions never return more than 6 transactions', function(done) {
        request.get('/transactions')
            .set('Authorization', token)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
                res.status.should.equal(200);
                res.body.length.should.be.lt(7);
                done();
            });
    });
});