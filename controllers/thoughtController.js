const { Thought, User } = require('../models');

module.exports = {
    // get all
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.status(200).json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // get one by id
    async getThought(req, res) {
        try {
            const thought = await Thought.findOne(
                {
                    _id: req.params.thoughtId,
                }
            );
            res.status(200).json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // create one
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            const user = await User.findOneAndUpdate(
                {
                    username: req.body.username,
                },
                {
                    $addToSet: {
                        thoughts: thought._id,
                    },
                },
                {
                    new: true,
                },
            );

            if(!user) {
                return res.status(404).json()
            }

            res.status(201).json(thought);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // update by id
    async updateThought(req, res) {
        try {
            const thought = await thoughts.findOneAndUpdate(
                {
                    _id: req.params.thoughtId,
                },
                {
                    $set: req.body
                },
                {
                    new: true,
                },
            );

            res.status(200).json(thought);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // delete by id
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete(
                {
                    _id: req.params.thoughtId,
                },
            );

            res.status(200).json(thought);
        } catch(err) {
            res.status(500).json(err);
        }
    },
}