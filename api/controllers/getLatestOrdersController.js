const db = require('mongoose');
const Order = require('../models/order');


exports.getLatestOrders = (req, res) => {
    Order.find()
        .exec()
        .then(orders => {
                result = orders.map(o => {
                    return {
                    id: o._id,
                    imgpath: o.customer.profileimg,
                    companyName: o.customer.companyname,
                    date: o.date,
                    status: o.status,
                    price: o.totalcost
                    }
                })

                let latestOrders = []
                for(let i = 0; i < 6; i++) {
                    let last = result.pop();
                    latestOrders.push(last)
                }
            
            res.status(200).json(latestOrders);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        })
};