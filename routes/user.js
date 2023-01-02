const express = require('express');
const router = express.Router();
const User = require('../models/User');



router.post("/", async (req, res) => {
    let username = req.body.username;
    try {
        let findUser = await User.findOne({
            username: username
        });
        if (findUser) throw new Error('Username already exists!');
        let newUser = new User({
            username: username
        })
        await newUser.save();
        res.status(201).json({
            username: newUser.username,
            _id: newUser._id
        });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.get("/",async(req,res) =>{
    try{
    const users =  await User.find();
   res.status(201).json(users);
    }
    catch(err)
    {
        res.status(500).send(err.message);
    }
});

module.exports = router;
