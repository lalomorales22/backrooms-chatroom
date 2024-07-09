# Backrooms Chatroom - Server

This is the backend server for the Backrooms Chatroom project. It's built with Node.js, Express, and MongoDB, providing the API and real-time functionality for the chatroom application.

## Features

- RESTful API for user management, authentication, and chat operations
- Real-time messaging using Socket.IO
- MongoDB integration for data persistence
- JWT-based authentication
- Error logging and request logging

## Prerequisites

- Node.js (v14 or later)
- MongoDB (v4.4 or later)
- npm (v6 or later)

## Setup

1. Clone the repository (if you haven't already):
   ```
   git clone https://github.com/yourusername/backrooms-chatroom.git
   cd backrooms-chatroom/server
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the server directory and add the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/backrooms_chatroom
   JWT_SECRET=your_jwt_secret_here
   JWT_EXPIRES_IN=1d
   NODE_ENV=development
   ```

4. Start the server:
   ```
   npm run dev
   ```

## Available Scripts

- `npm start`: Starts the server in production mode
- `npm run dev`: Starts the server in development mode with nodemon
- `npm test`: Runs the test suite

## API Endpoints

- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user
- GET /api/users - Get all users (protected)
- GET /api/users/:id - Get user by ID (protected)
- PUT /api/users/:id - Update user (protected)
- DELETE /api/users/:id - Delete user (protected)
- POST /api/rooms - Create a new room (protected)
- GET /api/rooms - Get all rooms (protected)
- GET /api/rooms/:id - Get room by ID (protected)
- PUT /api/rooms/:id - Update room (protected)
- DELETE /api/rooms/:id - Delete room (protected)
- POST /api/messages - Create a new message (protected)
- GET /api/messages/:roomId - Get messages for a room (protected)

## Folder Structure

- `config/` - Configuration files
- `controllers/` - Request handlers
- `middleware/` - Custom middleware functions
- `models/` - Mongoose models
- `routes/` - Express routes
- `services/` - Business logic
- `utils/` - Utility functions
- `tests/` - Test files

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.