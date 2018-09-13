const should =  require('chai').should();
const expect = require('chai').expect;
const request = require('supertest')("http://localhost:3001/api/transactions");
const transactions = require('../controllers/transactionsController');

// BDD Should
describe('BDD test with should', function(){

    beforeEach(() => {

    });
    it('Function getLatestTransactions should return 200 OK', function(done) {
        request.get('/')
            .expect(200, done);
    });
    it('Function getLatestTransactions should return transactions', function(done) {
        request.get('/')
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
                res.status.should.equal(200);
                res.body.length.should.not.equal(0);
                done();
            });
    });
    it('Function getLatestTransactions never return more than 6 transactions', function(done) {
        request.get('/')
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
                res.status.should.equal(200);
                res.body.length.should.be.lt(7);
                done();
            });
    });
    it('Function getLatestTransactions should return transactions in correct order', function(done) {
        request.get('/')
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
                res.status.should.equal(200);
                Date.parse(res.body[1].date).should.be.lt(Date.parse(res.body[2].date));
                Date.parse(res.body[2].date).should.be.gt(Date.parse(res.body[0].date));
                done();
            });
    });
});