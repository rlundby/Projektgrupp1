const port = process.env.SERVER_PORT || 9999;
const http = require('http');
const app = require('./app.js');
//const MongoClient = require('mongodb').MongoClient;
const db = require('mongoose');


//Server
http.createServer(app).listen(port, () => {console.log('NodeJS Web Server Up on port ' + port)});

//dv
let uri = "mongodb+srv://user:user123@kulcluster-ovan0.mongodb.net/projektarbete";
db.connect(uri, { useNewUrlParser: true })
.then(() => console.log('MongoDB Database Server online on port 27017'))
.catch(err => console.log(err));

db.set('useCreateIndex', true);
// MongoClient.connect(uri, function(err, client) {
//
//     let dbo = client.db("projektarbete");
//     dbo.collection("transactions").findOne({}, function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         dbo.close();
//     });
//
//     if(err) {
//         console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
//     }
//     console.log('Connected...');
//
//     // perform actions on the collection object
//     client.close();
// });
