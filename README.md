# Backrooms Chatroom

Welcome to the Backrooms Chatroom, an immersive and eerie chat application inspired by the Backrooms internet phenomenon.

## Features

- Real-time chat functionality
- Themed rooms inspired by different Backrooms levels
- User authentication and profiles
- Mobile app support
- Dark mode for an enhanced creepy experience

## Prerequisites

- Node.js (v14 or later)
- MongoDB
- Docker and Docker Compose (for containerized deployment)

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/backrooms-chatroom.git
   cd backrooms-chatroom
   ```

2. Set up the server:
   ```
   cd server
   npm install
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. Set up the client:
   ```
   cd ../client
   npm install
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. Start the development servers:
   - For the backend:
     ```
     cd ../server
     npm run dev
     ```
   - For the frontend:
     ```
     cd ../client
     npm start
     ```

5. Access the application at `http://localhost:3000`

## Deployment

To deploy using Docker:

1. Ensure Docker and Docker Compose are installed on your system.
2. From the project root, run:
   ```
   docker-compose up --build
   ```
3. Access the application at `http://localhost`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.