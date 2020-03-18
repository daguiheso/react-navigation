/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React, {useState, useLayoutEffect} from 'react';
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
          navigation.navigate('Login', {name: 'pepe', lastname: 'lola'})
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
  const {name, lastname} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login Screen</Text>
      <Text>Name: {name}</Text>
      <Text>LastName: {lastname}</Text>
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

const AboutScreen = ({route, navigation}) => {
  const [counter, setCounter] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        console.log('pepe');
        return (
          <Button
            onPress={() => setCounter(c => c + 1)}
            title="Update counter"
          />
        );
      },
    });
  }, [navigation, setCounter]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Screen</Text>
      <Text>Count: {counter}</Text>
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
        headerMode="float"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          gestureEnabled: true,
          cardStyle: {
            borderWidth: 5,
            backgroundColor: '#fafafa',
          },
          cardOverlayEnabled: true,
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'My home jaja',
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
              />
            ),
          }}
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
