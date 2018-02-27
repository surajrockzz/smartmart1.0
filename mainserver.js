var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var item = require('./dbconnection.js');
var Address = require('./db/as.js');
var order = require('./db/os.js');
var User = require('./db/us.js');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var config = require('./config.js');
var cors=require('cors');
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/",express.static('public'));

app.post('/userregis',function(req,res){
    var hashedpwd =bcrypt.hashSync(req.body.password,10); 
    var address =req.body.address;
    var order = null;
    var addarr = address.split(',');
    var addobj=new Address({
        doorno:addarr[0],
        landmark:addarr[1],
        address:addarr[2],
        phonenum:parseInt(addarr[3])
    });
    addobj.save(function(err,addobj){
        console.log(addobj);
    })
    var userobj = new User({
        name:req.body.name,
        email:req.body.email,
        password:hashedpwd,
        address:[addobj._id],
        paddress:addobj._id,
        orders:null,
        phonenum:parseInt(req.body.phone)  
    })
    userobj.save(function(err,userobj){
        console.log(userobj);
    })

});
app.post('/userlogin',function(req,res){
    User.findOne({email:req.body.email},function(err,user){
     if(err)
         return err;
     else{
        if( bcrypt.compareSync(req.body.password,user.password)){
        var token = jwt.sign({ userobjid:user._id }, config.secret, {
            expiresIn: 86400 
          });
          res.status(200).send({ auth: true, token: token });
        }
        else{
            res.status(501);
        }
     }
    
    })
})


app.post("/details",function(req,res){
    var nam = req.body.name;
    var quantit = parseInt(req.body.quantity);
    var unit = parseInt(req.body.units);
    var manufacture = req.body.mf;
    console.log(manufacture);
    var object = new db({
        name:nam,
      quantity:quantit,
        units:unit,
        mf:manufacture
    });
console.log(object);
    object.save(function(err,object){
        console.log("suraj");
    })
})
app.listen(1825,function(){
    console.log("server running on 1825");
})





