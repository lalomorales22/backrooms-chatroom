import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './src/context/AuthContext';
import { ChatProvider } from './src/context/ChatContext';
import HomeScreen from './src/screens/HomeScreen';
import ChatScreen from './src/screens/ChatScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <ChatProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Backrooms' }} />
            <Stack.Screen name="Chat" component={ChatScreen} options={{ title: 'Chat Room' }} />
            <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Your Profile' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </ChatProvider>
    </AuthProvider>
  );
};

export default App;