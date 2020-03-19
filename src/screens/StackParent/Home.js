import React from 'react';
import {View, Button, Text} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login"
        onPress={() =>
          navigation.navigate('Login', {name: 'pepe', lastname: 'lola'})
        }
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Home;
