const _ = require('lodash');
const User = require('../models/users');
exports.userById =(req,res,next,id)=> {
    User.findById(id)
        .exec((err, user) => {
            if (err || !user) {
                return res.status(400).json({error: "user not found"})
            }
            req.profile = user; //add profile property
            next();
        })
};
exports.hasAutorization=(req,res,next)=>{
    const authorized = req.profile && req.auth && req.profile._id === req.auth._id;
    if (!authorized){
        return res.status(403).json({error:"you're not authorized to perform this action "})
    }
    next()
};
exports.allUsers=(req,res)=>{
    User.find((err, user)=>{
        if (err){return res.status(400).json({error:err})}
         res.json({user})
    }).select("name email updated created")
};
exports.getUser=(req,res)=>{
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile)
};
exports.updateUser=(req,res)=>{
    let user = req.profile;
    user=_.extend(user,req.body); //extend mutate the source object
    user.updated= Date.now();
    user.save((err)=>{
        if (err){return res.status(400).json({error:"unauthorised access"})}
        //req.user.hashed_password = undefined;
       // req.user._v = undefined;
        res.status(200).json({user})
    })
};
exports.deleteUser=(req,res,next)=>{
    let user = req.profile;
    user.remove((err,user)=>{
        if (err){return res.status(400).json({err})}
        //res.status(200).json({user})
        res.status(200).json({message:"user successfully Deleted "})
    });
};