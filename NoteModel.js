const mongoose = require("mongoose");



const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique: true
    },
    text: {
        type: String,
        require: true
    },
    imageUrl: String,
    
    createdAt: {
    type: Date,
    default: new Date()
    }
  }
  
  );
 

  module.exports = mongoose.model('Note', noteSchema);