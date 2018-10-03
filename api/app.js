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
    res.header(
        "Access-Control-Allow-Headers",
        "Content-Type, X-API-KEY, Authorization"
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

const yearlyGraphRoute = require('./routes/getYearlyGraph');
const testimonialRoute = require('./routes/testimonialRoute');
const yearlyRoute = require('./routes/getYearly');
const transactionRoute = require('./routes/getLatestTransactions');
const addTransactionRoute = require('./routes/addTransactions');
const updateTransactionRoute = require('./routes/updateTransaction');
const productRoute = require('./routes/getProducts');
const getOrdersRoute = require('./routes/getOrders');
const getTotalOrderRoute = require('./routes/getTotalOrders');
const getEarningsRoute = require('./routes/getEarnings');
const messageRoute = require('./routes/getMessages');
const signInRoute = require('./routes/signIn');
const signUpRoute = require('./routes/signUp');
const walletRoute = require('./routes/getUserWallet');
const recentActivityRoute = require('./routes/getRecentActivityFeed');
const addUserActionRoute = require('./routes/addUserAction');
const solditemsRoute = require('./routes/getSoldItems');
const yearlySalesRoute = require('./routes/getyearlySales');
const addYearlySalesRoute = require('./routes/addYearlySales')
const yearlyEarningsRoute = require('./routes/getYearlyEarnings');
const yearlyEarningsTotalRoute = require('./routes/getYearlyEarningsTotal');

app.use('/api/yearlygraph', yearlyGraphRoute);
app.use('/api/testimonials', testimonialRoute);
app.use('/api/yearly', yearlyRoute);
app.use('/api/update-transaction', updateTransactionRoute);
app.use('/api/transactions',transactionRoute );
app.use('/api/add-transaction',addTransactionRoute );
app.use('/api/products', productRoute);
app.use('/api/get-orders', getOrdersRoute);
app.use('/api/get-total-orders', getTotalOrderRoute);
app.use('/api/get-monthly-earnings', getEarningsRoute);
app.use('/api/messages', messageRoute);
app.use('/api/signin', signInRoute);
app.use('/api/signup', signUpRoute);
app.use('/api/user-wallet', walletRoute);
app.use('/api/recent-activity', recentActivityRoute);
app.use('/api/addUserAction', addUserActionRoute);
app.use('/api/sold-items', solditemsRoute);
app.use('/api/getyearlysales', yearlySalesRoute);
app.use('/api/addYearlySales', addYearlySalesRoute)
app.use('/api/get-yearly-earnings', yearlyEarningsRoute);
app.use('/api/get-yearly-earnings-total', yearlyEarningsTotalRoute);

// Export
module.exports = app;