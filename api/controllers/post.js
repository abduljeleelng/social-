const Post = require('../models/post');
const formidable = require('formidable');
const fs = require('fs');
const _ = require('lodash');
exports.postById=(req, res, next, id)=>{
    Post.findById(id)
        .populate("PostById","_id name")
        .exec((err, post)=>{
            if (err || !post){
                return res.status(400).json({error:err})
        }
            req.post=post;
            next();
        })
};
exports.getPost =(req, res)=>{
        const posts = Post.find()
            .populate("postedBy","_d name email")
            .select("_id title body created postedBy")
            .then((posts)=>{res.status(200).json(posts)})
            .catch(err=>console.log(err))
};
exports.createPost = (req,res)=>{
    // post without file uploading
    const post = new Post(req.body);
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    post.postedBy = req.profile;
    //post.save().then(result=>{res.status(200).json({post:result})});
      post.save((err,result)=>{
           if (err){return res.status(400).json({error:err})}
           res.status(200).json({post:result})
       });
    console.log("Creating new Post",post);
    console.log("response",req.body);
    /*** 
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req,(err,fields, files)=>{
        if (err){return res.status(400).json({error:"image can't be uploaded"})}
        let post = new Post(fields);
        req.profile.hashed_password = undefined;
        req.profile.salt = undefined;
        post.postedBy = req.profile;
        if (files.photo) {
           post.photo.data= fs.readFileSync(files.photo.path);
           post.photo.contentType = files.photo.type
        }
        post.save((err,result)=>{
            if (err){return res.status(400).json({err})}
            res.status(200).json({result})
        })
    });
    ****/
};
exports.updatePost =(req,res,next)=>{
    let post = req.post;
    post = _.extend(post,req.body);
    post.updated = Date.now();
    post.save(err=>{
        if (err){
            return res.status(400).json({error:err});
        }
        res.json(post);
    });
}
exports.postsByUser=(req,res)=>{
    Post.find({postedBy:req.profile._id})
        .populate("postedBy","_id name")
        .sort("_created")
        .exec((err,posts)=>{
            if (err){return res.status(400).json({err})}
            res.json({posts})
        })
};
exports.isPoster =(req, res, next)=>{
    let isPoster = req.post && req.auth && req.post.postedBy._id == req.auth._id;
    console.log("request post"+ req.post);
    console.log("request post"+ req.post.postedBy._id);
    console.log("request auth"+ req.auth);
    console.log("request auth"+ req.auth._id);
    if (!isPoster){return res.status(403).json({error:"you're not authorised"})};
    next();
};
exports.deletePost=(req, res)=>{
    let post = req.post;
    post.remove((err,post)=>{
        if(err){ return res.status(400).json({error:err})}
        res.json({message:"post successfully deleted"});
    })
};



