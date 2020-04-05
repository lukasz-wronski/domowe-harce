import React from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import Header from '../../components/Header';
import SelectionRow from '../../components/SelectionRow';
import CircleButton from '../../components/CircleButton';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CategoriesScreen from './categories/CategoriesScreen';
import ReadingScreen from './reading/ReadingScreen';
import PaintingScreen from './painting/PaintingScreen';
import GameScreen from './game/GameScreen';
import ProfileScreen from '../ProfileScreen';
import TimerScreen from './timer/TimerScreen';

const Stack = createStackNavigator();

export default class HomeScreen extends React.Component {
  state = {};

  selectOption = (selected, screen) => {
    this.setState({selected});
    this.props.navigation.navigate('Home', {screen});
  };

  addPress = () => {
    this.props.navigation.navigate('AddTopic');
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView />
        <Header />
        <View style={styles.content}>
          <NavigationContainer independent>
            <Stack.Navigator headerMode="none">
              <Stack.Screen name="Categories" component={CategoriesScreen} />
              <Stack.Screen name="Game" component={GameScreen} />
              <Stack.Screen name="Reading" component={ReadingScreen} />
              <Stack.Screen name="Painting" component={PaintingScreen} />
              <Stack.Screen name="Profile" component={ProfileScreen} />
              <Stack.Screen name="Timer" component={TimerScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
        <SafeAreaView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  content: {
    backgroundColor: 'red',
    flex: 1,
  },
  addButton: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 25,
  },
});
