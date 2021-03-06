import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text } from 'react-native';
import { Navigation, ReactNavigationRoute } from '../types/react-navigation.types';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }: { navigation: Navigation }) => {
  return <Button title="Go to Jane's profile" onPress={() => navigation.navigate('Profile', { name: 'Jane' })} />;
};

const ProfileScreen = ({ navigation, route }: { navigation: Navigation; route: ReactNavigationRoute }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

export default App;
