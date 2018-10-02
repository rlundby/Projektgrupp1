const should = require('chai').should();
const expect = require('chai').expect;
const request = require('supertest')("http://localhost:3001/api");

let user_exists = {email: 'admin@mail.com', username: 'admin', password: 'admin'};
let new_user = {email: 'newUser@yes.com', username: 'happyUser', password: 'new123'};


describe('Signup API', () => {


    it('should return status 201 when creating user successfully', (done) => {
        request.post('/signup')
            .send(new_user)
            .expect(201)
            .end(function (err, res) {
                console.log('new user created')
                done();
            });
    });

    it('should return "error-message" if user already exists', (done) => {
        request.post('/signup')

            .send(user_exists)
            .expect(409)
            .end((err) => {
                if (err)
                    return (console.log('User already exists ', err));
                done();
            });
    });

});


