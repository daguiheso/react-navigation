import 'react-native-gesture-handler';
import React from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/screens/StackParent/Login';
import About from './src/screens/StackParent/About';
import Feed from './src/screens/StackChildren/Feed';
import Messages from './src/screens/StackChildren/Messages';
import Blog from './src/screens/StackParent/Blog';

const StackParent = createStackNavigator();
const StackChildren = createStackNavigator();

const stackParentOptions = {
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
};

const homeOptions = {
  title: 'My home jaja',
  headerRight: () => (
    <Button
      onPress={() => alert('This is a button!')}
      title="Info"
      color="#fff"
    />
  ),
};

const blogOptions = {
  title: 'My home',
  headerStyle: {
    backgroundColor: '#baa31e',
  },
  headerTintColor: '#ababab',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StackParent.Navigator
        initialRouteName="Login"
        headerMode="float"
        screenOptions={stackParentOptions}>
        <StackParent.Screen name="Login" component={Login} />
        <StackParent.Screen
          name="Home"
          component={ChildrenNavigator}
          options={homeOptions}
        />
        <StackParent.Screen name="About" component={About} />
        <StackParent.Screen
          name="Blog"
          component={Blog}
          options={blogOptions}
        />
      </StackParent.Navigator>
    </NavigationContainer>
  );
};

function ChildrenNavigator() {
  return (
    <StackChildren.Navigator mode="modal" headerMode="none">
      <StackChildren.Screen name="Feed" component={Feed} />
      <StackChildren.Screen name="Messages" component={Messages} />
    </StackChildren.Navigator>
  );
}

export default App;
