// const mongoose = require('mongoose')
let Post = require('../models/posts')

module.exports = {

    homeGet: async (req, res) => {
        console.log(req.user)
       Post.find()
        .then(data => res.render('home.ejs', {post: data}))
    
       
    }, 

    
    addPost: async (req, res) => {
        await Post.create({
            microsoftId: req.user.microsoftId,
            displayName: req.user.displayName,
            postContent: req.body.postItem,
            
        })
        res.redirect('/home')
    }, 
    deletePost: async (req, res) => {
        await Post.findByIdAndDelete({_id: req.body.deleteItemId})
        res.json()
       
            
        
    }
    }