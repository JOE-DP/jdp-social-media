// const mongoose = require('mongoose')
let Post = require('../models/posts')

module.exports = {

    homeGet: async (req, res) => {
        let userName = await req.user.displayName
        Post.find()
        .then(data => {
            data = data.reverse()
            res.render('home.ejs', {post: data, name: req.user.displayName})})
    
       
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
        if(req.user.microsoftId == process.env.IDFILE){
            await Post.findOneAndDelete({_id: req.body.deleteItemId})
        } else {
            await Post.findOneAndDelete({_id: req.body.deleteItemId, microsoftId: req.user.microsoftId})
        }
        res.json()        
    }, 
    postPage: async (req, res) => {
        res.render('post.ejs')       
    }
    }