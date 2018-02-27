

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection:error'));
var Schema = mongoose.Schema;
var itemSchema = mongoose.Schema({
    name:String,
    quantity:Number,
    units:Number,
    mf: String
});
var Item = mongoose.model('item',itemSchema);
module.exports=Item;

