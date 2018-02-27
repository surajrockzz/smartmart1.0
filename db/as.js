var mongoose = require('mongoose');
var AddSchema =mongoose.Schema({
    doorno:String,
    landmark:String,
    address:String,
    phonenum:Number
});
var Address = mongoose.model('address',AddSchema);

module.exports=Address;