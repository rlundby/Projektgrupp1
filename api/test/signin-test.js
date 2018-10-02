const should = require('chai').should();
const expect = require('chai').expect;
const request = require('supertest')("http://localhost:3001/api");


describe('Signin API', () => {

    let token = null;

    it('should return status 200 when getting token from db successfully', (done) => {
        request.post('/signin')
            .send({username: 'admin', password: 'admin'})
            .end(function (err, res) {
                token = res.body.token;
                done();
            });
    });

    it('should return "error" if username or password is incorrect', (done) => {
        request.post('/signin')

            .send({username: 'admin', password: 'wrong'})
            .expect(401)
            .end((err) => {
                if (err) return done("username or password is missing or incorrect");
                done();
            });
    });

    it('should return "error" if username or password is incorrect', (done) => {
        request.post('/signin')

            .send({username: 'wrong', password: 'admin'})
            .expect(401)
            .end((err) => {
                if (err) return done("username or password is missing or incorrect");
                done();
            });
    });

});


