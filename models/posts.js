const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  microsoftId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String, 
    required: true
  },
  postContent: {
    type: String,
    required: true,
  }, 
  createdAt:{
    type: String, 
    required: true
}, 
  likes: {
      type: Number, 
      default: 0
  }
})

module.exports = mongoose.model('Post', PostSchema)