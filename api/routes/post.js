const express = require('express');
const {getPost,createPost,postsByUser,postById, isPoster,updatePost, deletePost,postPhoto,singlePost} = require('../controllers/post');
const {requireSign} = require('../controllers/auth');
const {userById} = require('../controllers/user');
const router = express.Router();
const {createPostValidator} = require('../validator');


router.get('/posts',getPost);
//post photo 
router.get('/posts/photo/:postId',postPhoto);
//get Single Post with post Id 
router.get('/post/:postId',singlePost);
//router.post('/post',requireSign,createPostValidator,createPost);
//route for creating new post
router.post('/post/new/:userId',requireSign,createPost,createPostValidator);

//router.post('/post/new/:userId',createPost,);

router.get('/post/by/:userId',requireSign,postsByUser);
//update post by post id  route 
//router.put('/post/:postId',updatePost);
router.put('/post/:postId',requireSign,isPoster,updatePost);
//delete post by Id
//router.delete('/post/:postId',requireSign, deletePost);
router.delete('/post/:postId',requireSign,isPoster, deletePost);
//any router containing user by Id, our route will first executing userById method
router.param("userId",userById);
//any router containing user by Id, our route will first executing userById method
router.param("postId",postById);

module.exports= router;