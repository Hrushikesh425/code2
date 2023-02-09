const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    username:{
      type: String,
      required: true,
    },
    studentid:{
      type: String,
      required: true,
    },
    branch:{
      type: String,
      required: true,
    },
    div:{
      type: String ,
      required: true
    },  
    phone:{
      type: Number,
      required: true 
    },
    password: {
      type: String,
      required: true
    },
    collegname: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true,
      default: 'user'
    },
  });
  
module.exports = mongoose.model('User', userSchema);
  