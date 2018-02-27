var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    address:[{type:Schema.Types.ObjectId,ref:'AddSchema'}],
    paddress:{type:Schema.Types.ObjectId,ref:'AddSchema',null:true},
    orders:[{type:Schema.Types.ObjectId,ref:'orderschema',null:true}],
    phoneno:Number
});
var User = mongoose.model('user',userSchema);

module.exports=User;