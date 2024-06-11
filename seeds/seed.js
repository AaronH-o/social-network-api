// Import necessary modules
const mongoose = require('mongoose');
const { User, Thought } = require('../models');
const connection = require('../config/connection');
const { userData, thoughtData } = require('./seedData');

connection.once('open', async () => {
    try {
        // Clear existing data
        await User.deleteMany();
        await Thought.deleteMany();
    
        // Create users
        const users = await User.create(userData);
    
        // Create thoughts
        for (let thought of thoughtData) {
          // Find user by username
          const user = users.find((user) => user.username === thought.username);
          // Assign user id to thought
          thought.username = user._id;
          // Create thought
          await Thought.create(thought);
        }
    
        console.log('Seed data inserted successfully!');
      } catch (error) {
        console.error('Error seeding data:', error);
      } finally {
        // Disconnect from MongoDB
        mongoose.disconnect();
      }
});