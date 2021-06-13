const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const vaccines = require('../model/vaccines.js');

// base path : http://localhost:3000/vaccines

router.get('/',(req,res) => {
      vaccines.find((err,doc) => {
          if(err){
              console.log('Error in Get data', + err)
          }else{
              res.send(doc);
          }
      })
    });

    router.get('/:id',(req,res) => {

        if(ObjectId.isValid(req.params.id)) {
         vaccines.findById(req.params.id,(err,doc) =>{
             if(err){
                 console.log('Error in Get vaccines by id', + err)
             }else{
                 res.send(doc);
             }
         });
        }else{
            return res.status(400).send('No record found with id', +req.params.id )
        }
    });

router.post('/',(req,res) => {
    let vcc = new vaccines ({
        city: req.body.city,
        Type: req.body.Type,
        quantity: req.body.quantity,
        price: req.body.price
    });

    vcc.save((err,doc) => {
        if(err){
            console.log('Error in post Data' + err)
        }else{
            res.send(doc);
        }
    })
});

router.put('/:id',(req,res) => {

    if(ObjectId.isValid(req.params.id)) {
        let vcc = {
            city: req.body.city,
            Type: req.body.Type,
            quantity: req.body.quantity,
            price: req.body.price
        
        };

     vaccines.findByIdAndUpdate(req.params.id,{$set : vcc}, {new: true},(err,doc) => {
         if(err){
             console.log('Error in updatintg vaccine by id', + err)
         }else{
             res.send(doc);
         }
     });
    }else{
        return res.status(400).send('No record found with id', +req.params.id )
    }
});

router.delete('/:id',(req,res) => {

    if(ObjectId.isValid(req.params.id)) {
     vaccines.findByIdAndRemove(req.params.id,(err,doc) =>{
         if(err){
             console.log('Error in delete vaccine by id', + err)
         }else{
             res.send(doc);
         }
     });
    }else{
        return res.status(400).send('No record found with id', +req.params.id )
    }
});

module.exports = router;