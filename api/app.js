const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// CORS Error Handling
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if(req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        return res.status(200).json({});
    }
    next();
});

// Body Parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes
const transactionRoute = require('./routes/getLatestTransactions');
const addTransactionRoute = require('./routes/addTransactions');
const productRoute = require('./routes/getProducts');
const messageRoute = require('./routes/getMessages');
app.use('/api/transactions',transactionRoute );
app.use('/api/add-transaction',addTransactionRoute );
app.use('/api/products', productRoute);
app.use('/api/messages', messageRoute);

// Export
module.exports = app;