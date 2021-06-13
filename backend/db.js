const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/MeanDb',(err) => {
 if(!err){
     console.log(' Database connection successful')
 }else{
     console.log('Error in connection' + err)
 }
})

module.exports = mongoose;;