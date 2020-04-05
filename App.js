import 'react-native-gesture-handler';
import React from 'react';

import {
  StyleSheet,
  View,
  TextInput
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/home/HomeScreen';
import AddTopicScreen from "./screens/addTopic/AddTopicScreen"

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="AddTopic" component={AddTopicScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

export default App;
