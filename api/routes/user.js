const express = require('express');
const {userById,allUsers,getUser,updateUser,deleteUser} = require('../controllers/user');
const {requireSign} = require('../controllers/auth');

const router = express.Router();
const {createUserValidator} = require('../validator');

//any router containing user by Id, our route will first executing userById method
router.get('/allUser',allUsers);
router.get('/user/:userId',requireSign,getUser);
router.put('/user/:userId',requireSign,updateUser);
router.delete('/user/:userId',requireSign,deleteUser);
router.param("userId",userById);

module.exports= router;