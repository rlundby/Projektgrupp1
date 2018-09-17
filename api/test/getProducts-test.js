const expect = require('chai').expect;
const request = require('supertest')("http://localhost:3001/api/products");
const products = require('../controllers/productsController');

let chai = require('chai');
//let server = require('../server');
const should = chai.should();

// BDD Should
describe('BDD test with should', function(){

    beforeEach(() => {

    });
    it('Function getProducts should return 200 OK', function(done) {
        request.get('/')
            .expect(200, done);
    });
    it('Function getProducts should return an array', function(done) {
        request.get('/')
            .expect("Content-type", /json/)
            .expect(200)
            .end(function(err,res){
                res.status.should.equal(200);
                res.body.should.be.an('array')
                done();
            });


    });
    // it('Objects in Products should contain keys: id, name, price', function() {
    //
    //     request.get('/')
    //         .expect("Content-type", /json/)
    //         .expect(200)
    //         .end(function(err,res){
    //             res.status.should.equal(200);
    //             res.body[0].should.have.key('hej');
    //             console.log(res.body[0])
    //             done();
    //         });
    // });
    
    
    
});