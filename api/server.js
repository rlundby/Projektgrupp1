const port = process.env.SERVER_PORT || 9999;
const http = require('http');
const db = require('mongoose');
const app = require('./app.js');

//Server
http.createServer(app).listen(port, () => {console.log('NodeJS Web Server Up on port ' + port)});

//dv
let MongoClient = require('mongodb').MongoClient;

let uri = "mongodb+srv://user:user123@kulcluster-ovan0.mongodb.net/test?retryWrites=true";
MongoClient.connect(uri, function(err, client) {
    //const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
    }
    console.log('Connected...');
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});

db.set('useCreateIndex', true);
