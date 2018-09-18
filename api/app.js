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
const updateTransactionRoute = require('./routes/updateTransaction');
const productRoute = require('./routes/getProducts');
const getLatestOrdersRoute = require('./routes/getLatestOrders');
const getTotalOrderRoute = require('./routes/getTotalOrders');
const getEarningsRoute = require('./routes/getEarnings');
const messageRoute = require('./routes/getMessages');

app.use('/api/update-transaction', updateTransactionRoute);
app.use('/api/transactions',transactionRoute );
app.use('/api/add-transaction',addTransactionRoute );
app.use('/api/products', productRoute);
app.use('/api/get-latest-orders', getLatestOrdersRoute);
app.use('/api/get-total-orders', getTotalOrderRoute);
app.use('/api/get-monthly-earnings', getEarningsRoute);
app.use('/api/messages', messageRoute);


// Export
module.exports = app;