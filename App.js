/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login"
        onPress={() =>
          navigation.navigate('Login', {user: 'pepe', password: 'lola'})
        }
      />
    </View>
  );
};

const BlogScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Blog Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const LoginScreen = ({route, navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login Screen</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
      <Button
        title="Go to Login... again"
        onPress={() =>
          navigation.push('Login', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const AboutScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Screen</Text>
      <Button title="Go to Blog" onPress={() => navigation.navigate('Blog')} />
    </View>
  );
};

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'My home jaja'}}
        />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Blog"
          component={BlogScreen}
          options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: '#baa31e',
            },
            headerTintColor: '#ababab',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
