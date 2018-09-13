const should =  require('chai').should();
const expect = require('chai').expect;
const request = require('supertest')("http://localhost:3001/api/transactions");
const transactions = require('../controllers/productsController');

// BDD Should
describe('BDD test with should', function(){

    beforeEach(() => {

    });
    it('Function getProducts should return 200 OK', function(done) {
        request.get('/')
            .expect(200, done);
    });
    it('Function getProducts should return products', function(done) {
        request.get('/')
            .expect("Content-type", /json/)
            .expect(200)
            .end(function(err,res){
                res.status.should.equal(200);
                res.body.should.be.an('array')
                done();
            });


    });
    it('Function getLatestTransactions should be order after most recent first', function() {
        transactions[0].date.should.be.gt(transactions[1].date);
        transactions[1].date.should.be.gt(transactions[2].date);
        transactions[2].date.should.be.lt(transactions[0].date);
    });
});