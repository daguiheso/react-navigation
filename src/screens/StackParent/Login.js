import React from 'react';
import {View, Button, Text} from 'react-native';
import {StackActions} from '@react-navigation/core';

const Login = ({route, navigation}) => {
  const {name = '', lastname = ''} = route.params ? route.params : {};
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login Screen</Text>
      <Text>Name: {name || ''}</Text>
      <Text>LastName: {lastname || ''}</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button
        title="Go to Login... again"
        onPress={() =>
          navigation.push('Login', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go to Login with data different"
        onPress={() =>
          navigation.dispatch(
            StackActions.push('Login', {
              name: 'daniel',
              lastname: 'hernandez sotelo',
            }),
          )
        }
      />
      <Button
        title="Replace or change Data"
        onPress={() =>
          navigation.dispatch(
            StackActions.replace('Login', {
              name: 'liliana',
              lastname: 'sotelo',
            }),
          )
        }
      />
      <Button
        title="Go to Top Screen"
        onPress={() => navigation.dispatch(StackActions.popToTop())}
      />
    </View>
  );
};

export default Login;
