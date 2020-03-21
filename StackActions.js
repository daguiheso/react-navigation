import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/screens/StackParent/Login';
import About from './src/screens/StackParent/About';
import Home from './src/screens/StackParent/Home';
import Blog from './src/screens/StackParent/Blog';

const StackParent = createStackNavigator();

const stackParentOptions = {
  gestureEnabled: true,
};

const Actions: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StackParent.Navigator
        initialRouteName="Home"
        screenOptions={stackParentOptions}>
        <StackParent.Screen name="Login" component={Login} />
        <StackParent.Screen name="Home" component={Home} />
        <StackParent.Screen name="About" component={About} />
        <StackParent.Screen name="Blog" component={Blog} />
      </StackParent.Navigator>
    </NavigationContainer>
  );
};

export default Actions;
