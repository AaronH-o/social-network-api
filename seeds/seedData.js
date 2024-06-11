// User seed data
const userData = [
    {
      username: "user1",
      email: "user1@example.com",
      thoughts: [],
      friends: [],
    },
    {
      username: "user2",
      email: "user2@example.com",
      thoughts: [],
      friends: [],
    },
    {
      username: "user3",
      email: "user3@example.com",
      thoughts: [],
      friends: [],
    },
  ];
  
  // Thought seed data
  const thoughtData = [
    {
      thoughtText: "This is user1's first thought",
      createdAt: new Date(),
      username: "user1",
      reactions: [],
    },
    {
      thoughtText: "Feeling inspired today!",
      createdAt: new Date(),
      username: "user2",
      reactions: [],
    },
    {
      thoughtText: "Just had a great cup of coffee",
      createdAt: new Date(),
      username: "user3",
      reactions: [],
    },
  ];
  
  module.exports = { userData, thoughtData };