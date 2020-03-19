import React, {useState, useLayoutEffect} from 'react';
import {View, Button, Text} from 'react-native';

const About = ({route, navigation}) => {
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
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>About Screen</Text>
      <Text>Count: {counter}</Text>
      <Button title="Go to Blog" onPress={() => navigation.navigate('Blog')} />
    </View>
  );
};

export default About;
