const should =  require('chai').should();
const expect = require('chai').expect;
const request = require('supertest')("http://localhost:3001/api/get-latest-orders");
const orders = require('../controllers/getLatestOrdersController');

describe('GET /get-latest-orders', function(){

    beforeEach(() => {

    });
    it('Function getLatestOrders should return 200 OK', function(done) {
        request.get('/')
            .expect(200, done);
    });
    
});

describe('Testing CHAI', function() {
    it('Function getLatestOrders should return an Array', function(done) {
        orders.getLatestOrders()
        console.log(orders.getLatestOrders())
        done()
    })
})

