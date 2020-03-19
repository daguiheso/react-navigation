import React from 'react';
import {View, Button, Text} from 'react-native';

const Feed = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Feed Screen</Text>
      <Button
        title="Go to Messages"
        onPress={() => navigation.navigate('Messages')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Feed;
