const db = require('mongoose');
const Yearlysales = require('../models/yearlySales');

exports.addNewInf = (req, res) => {
    const yearly = new Yearlysales ({
        _id: new db.Types.ObjectId(),
        totalSales: req.body.totalSales,
        monthlySales: req.body.monthlySales,
    })

    yearly.save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            YearlySalesReview: {
                totalSales: result.totalSales,
                monthlySales: result.monthlySales
            }
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err });
    });
};