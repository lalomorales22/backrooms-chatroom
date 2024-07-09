# Backrooms Chatroom - Mobile App

This is the mobile application for the Backrooms Chatroom project. It's built with React Native and Expo, providing an immersive chat experience themed around the Backrooms internet phenomenon.

## Features

- Real-time chat functionality
- Themed rooms inspired by different Backrooms levels
- User authentication and profiles
- Dark mode for enhanced creepy atmosphere
- Push notifications for new messages
- Offline support

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator or Android Emulator (for local development)

## Setup

1. Clone the repository (if you haven't already):
   ```
   git clone https://github.com/yourusername/backrooms-chatroom.git
   cd backrooms-chatroom/mobile
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the mobile directory and add the following variables:
   ```
   API_URL=http://your-api-url.com/api
   SOCKET_URL=http://your-socket-url.com
   ```

4. Start the Expo development server:
   ```
   expo start
   ```

5. Use the Expo Go app on your mobile device to scan the QR code and run the app, or press 'i' or 'a' in the terminal to open the app in an iOS or Android simulator respectively.

## Available Scripts

- `npm start`: Starts the Expo development server
- `npm run android`: Starts the app on an Android emulator
- `npm run ios`: Starts the app on an iOS simulator
- `npm run web`: Starts the app in a web browser
- `npm run eject`: Ejects from Expo (use with caution)

## Folder Structure

- `src/components`: React Native components
- `src/screens`: Main application screens
- `src/context`: React context for global state management
- `src/hooks`: Custom React hooks
- `src/services`: API and socket services
- `src/utils`: Utility functions and constants

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.