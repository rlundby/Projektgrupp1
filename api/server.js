const port = process.env.SERVER_PORT || 9999;
const http = require('http');
const app = require('./app.js');
const db = require('mongoose');


//Server
http.createServer(app).listen(port, () => {console.log('NodeJS Web Server Up on port ' + port)});

//Database
let uri = "mongodb+srv://user:user123@kulcluster-ovan0.mongodb.net/projektarbete";
db.connect(uri, { useNewUrlParser: true })
.then(() => console.log('MongoDB Database Server online on port 27017'))
.catch(err => console.log(err));

db.set('useCreateIndex', true);
