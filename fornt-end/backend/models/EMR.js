const mongoose = require('mongoose');

const EMRSchema = new mongoose.Schema({

  fname:{
    type:String,
  },
  
  lname:{
    type:String,
  },
  id:{
    type:Number
  },
  dob:{
    type:String,
  },
  height:{
    type:Number,
  },
  weight:{
    type:Number,
  },
  bloodGroup:{
    type:String,
  },
  medicalhis:{
    disease :[],
    allergies:[]
  },
  familyhis:{
    fatherSide:[],
    motherSide:[]
  },
  status:{
    type:String
  },
  BMI:{
    type:Number
  },
  gender:{
    type:String
  },
  age:{
    type:Number
  } 
 

})




module.exports = mongoose.model('EMR', EMRSchema)