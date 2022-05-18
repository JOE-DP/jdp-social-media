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
    likePost: async (req, res) => {
            
            let likeNum = await Post.findById({_id: req.body.likeItemId}).likes
            likeNum = Number(likeNum[0].likes)
            console.log(likeNum)
            console.log(likeNum + 1)
            likeNum = likeNum + 1
            await Post.findByIdAndUpdate({_id: req.body.likeItemId}, {likes: likeNum})
        
        res.json()  
        
        // body: JSON.stringify({'likeItemId': likeItem})

// const filter = { name: 'Jean-Luc Picard' };
// const update = { age: 59 };

// `doc` is the document _before_ `update` was applied
// let doc = await Character.findOneAndUpdate(filter, update);
    }, 
    postPage: async (req, res) => {
        res.render('post.ejs')       
    }
    }