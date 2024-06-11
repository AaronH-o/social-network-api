# Social Network API

## Overview

This project is a Social Network API that provides endpoints for managing users, thoughts, reactions to thoughts, and user friendships. It offers a backend system for developers to build social networking applications, enabling functionalities such as creating users, posting thoughts, reacting to thoughts, managing friendships, and more.

## Features

- **Server Initialization:** The application initializes a server upon command invocation, syncing Mongoose models to a MongoDB database.
- **API Endpoints:** Provides various API endpoints for interacting with users, thoughts, reactions, and friendships.
- **CRUD Operations:** Supports CRUD (Create, Read, Update, Delete) operations for users, thoughts, reactions, and friendships.
- **Data Formatting:** Responses from API endpoints are formatted in JSON for easy consumption.
- **Error Handling:** Includes error handling mechanisms to ensure smooth operation even in case of unexpected errors.

## Usage

### Starting the Server

- Execute the command to invoke the application, which starts the server and syncs the Mongoose models with the MongoDB database.

### Testing API Routes

- Utilize a tool like Insomnia or Postman to test the API endpoints.
- Use GET routes for retrieving data on users and thoughts. The response will be formatted JSON.
- Test POST, PUT, and DELETE routes for creating, updating, and deleting users and thoughts.
- Test POST and DELETE routes for creating and deleting reactions to thoughts, as well as adding and removing friends from a user's friend list.

## Technologies Used

- **Node.js:** Backend JavaScript runtime environment.
- **Express.js:** Web application framework for Node.js.
- **MongoDB:** NoSQL database for storing application data.
- **Mongoose:** MongoDB object modeling tool for Node.js.
- **Postman:** API testing tool for sending requests and receiving responses.

## Installation

- Clone the repository from GitHub.
- Install dependencies using npm or yarn.
- Set up a MongoDB database and configure the application to connect to it.

## Demo

A demonstration of the application's functionality is available in the following video:

[Social Network API Demo](https://drive.google.com/file/d/1Ut1CnX23vfUVyo2RvzgvF4UbDUEMdqdp/view?usp=sharing)

## Contributions

Contributions are welcome! Please feel free to submit bug reports, feature requests, or pull requests through GitHub.

## License

This project is licensed under the [MIT License](LICENSE).