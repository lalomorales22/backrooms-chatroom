# Backrooms Chatroom - Client

This is the frontend application for the Backrooms Chatroom project. It's built with React and provides an immersive chat experience themed around the Backrooms internet phenomenon.

## Features

- Real-time chat functionality
- Themed rooms inspired by different Backrooms levels
- User authentication and profiles
- Dark mode for enhanced creepy atmosphere
- Emoji picker for expressive messaging
- Thread view for in-depth conversations

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

## Setup

1. Clone the repository (if you haven't already):
   ```
   git clone https://github.com/yourusername/backrooms-chatroom.git
   cd backrooms-chatroom/client
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the client directory and add the following variables:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   REACT_APP_SOCKET_URL=http://localhost:5000
   REACT_APP_ENCRYPTION_KEY=your_encryption_key_here
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (use with caution)

## Folder Structure

- `src/components`: React components
- `src/pages`: Main application pages
- `src/context`: React context for global state management
- `src/hooks`: Custom React hooks
- `src/services`: API and socket services
- `src/utils`: Utility functions and constants

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.