const { User } = require('../models');

module.exports = {
    // get all
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    
    // get one by id
    async getUser(req, res) {
        try {
            const user = await User.findOne(
                {
                    _id: req.params.userId,
                }
            );
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // create one
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.status(201).json(user);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // update by id
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                {
                    _id: req.params.userId,
                },
                {
                    $set: req.body
                },
                {
                    new: true,
                },
            );

            res.status(200).json(user);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete(
                {
                    _id: req.params.userId,
                },
            );

            res.status(200).json(user);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    async addFriend(req, res) {
        try {
            const data = await User.findOneAndUpdate(
                {
                    _id: req.params.userId,
                },
                {
                    $addToSet: {
                        friends: req.params.friendId,
                    },
                },
                {
                    new: true,
                },
            );

            res.status(200).json(data);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    async removeFriend(req, res) {
        try {
            const data = await User.findOneAndUpdate(
                {
                    _id: req.params.userId,
                },
                {
                    $pull: {
                        friends: req.params.friendId,
                    },
                },
                {
                    new: true,
                }
            )
            res.status(200).json(data);
        } catch(err) {
            res.status(500).json(err);
        }
    },
}