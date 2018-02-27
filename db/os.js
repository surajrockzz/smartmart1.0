var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = mongoose.Schema({
    userid:{type:Schema.Types.ObjectId,ref:'userSchema'},
    address:{type:Schema.Types.ObjectId,ref:'AddSchema'},
    status:Number,
    time:Date,
    items:[{objid:{type:Schema.Types.ObjectId,ref:'dBschema'},quantity:Number}]
});

var Order = mongoose.model('order',orderSchema);

module.exports = Order;