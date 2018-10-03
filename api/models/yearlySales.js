const db = require('mongoose');


 const yearlySalesSchema = db.Schema({
    _id: {type: db.Schema.Types.ObjectId},
    totalSales: {type: Number},
    monthlySales: {type: Array}
}) 

module.exports = db.model('Yearlysales', yearlySalesSchema);