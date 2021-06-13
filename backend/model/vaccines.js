const monmgoose = require('mongoose');

const vaccines = monmgoose.model('vaccines',{

       city: {type:String},
       Type: {type:String},
       quantity: {type:Number},
       price: {type:Number}
 
});

module.exports = vaccines;