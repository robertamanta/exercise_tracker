require('dotenv').config();
const express = require('express');
const router = express.Router()
const Exercise = require('../models/Exercise');
const User = require('../models/User');
const mongoose = require('mongoose');

router.post("/:id/exercises", async (req, res) => {
    let description = req.body.description;
    let duration = Number(req.body.duration);
    let date = new Date(Date.parse(req.body.date) || Date.now());
    let userId = req.params.id;
    date = date.toDateString();

    try {
        if (!mongoose.Types.ObjectId.isValid(userId))
            throw new Error('Not a valid ID!');
        let user = await User.findOne({
            _id: userId
        });
        if (!user) throw new Error('User id  does not exist!');

        let newExercise = new Exercise({
            description: description,
            duration: duration,
            date: date,
            userId: userId
        });
        await newExercise.save();
        res.status(200).json({
            _id: userId,
            username: user.username,
            date: date,
            duration: duration,
            description: description
        });
    } catch (err) {
        res.status(500).send(err.message);
    }

});

router.get("/:id/logs", async (req, res) => {
    try {
        let userId = req.params.id;
        let from = req.query.from;
        let to = req.query.to;
        let limit = req.query.limit;

        if (!mongoose.Types.ObjectId.isValid(userId))
            throw new Error('Not a valid ID!');
        let user = await User.findOne({
            _id: userId
        });
        if (!user) throw new Error('User id  does not exist!');
        if (from) {
            from = new Date(from);
        } else {
            from = new Date(process.env.MIN_DATE);
        }
        if (to) {
            to = new Date(to)
        } else {
            to = new Date(process.env.MAX_DATE);
        }
        if (!limit) {
            limit = 10000
        } else {
            limit = parseInt(limit);
        }

        const log = await Exercise.find({
                userId: userId
            })
            .select('description duration date -_id')
            .where('date')
            .gte(from)
            .lte(to)
            .limit(limit)
            .exec();


        const count = log.length;


        res.status(201).json({
            "_id": userId,
            username: user.username,
            count: count,
            log: log.map(obj => ({
                description: obj.description,
                duration: obj.duration,
                date: obj.date.toDateString()
            }))

        });
    } catch (err) {
        res.status(500).send(err.message);
    }
});
module.exports = router;