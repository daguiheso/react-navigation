import React from 'react';
import {View, Button, Text} from 'react-native';

const Login = ({route, navigation}) => {
  const {name = '', lastname = ''} = route.params ? route.params : {};
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login Screen</Text>
      <Text>Name: {name || ''}</Text>
      <Text>LastName: {lastname || ''}</Text>
      {/* <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      /> */}
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
    </View>
  );
};

export default Login;

