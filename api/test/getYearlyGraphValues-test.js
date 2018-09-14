const should =  require('chai').should();
const expect = require('chai').expect;
const request = require('supertest')("http://localhost:3001/api/yearlyGraphValues");
const yearlyGraphValues = require('../controllers/yearlyGraphValuesController');

// BDD Should
describe('BDD test with should', function(){

    it('Function getYearlyGraphValues should return 200 OK', function(done) {
        request.get('/')
            .expect(200, done);
    });
    it('Function getYearlyGraphValues should return an array', function(done) {
        request.get('/')
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
                res.body.should.be.an('array');
                done();
            });

    });
    it('Function getYearlyGraphValues - market should return a number', function(done) {
        request.get('/')
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
                console.log(res.body)
                res.body.yearlyGraphValues[0].should.be.an('number');
                done();
            });

    });
});