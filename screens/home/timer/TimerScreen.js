import React from 'react';
import {View, Text, FlatList} from 'react-native';
import TimerItem from './TimerItem';
import Button from '../../../components/Button';

export default class TimerScreen extends React.Component {
  state = {
    game: [],
    currentTime: 0,
  };

  goBack = () => {
    this.props.navigation.goBack();
  };

  startTimer = () => {
    setTimeout(() => {
      this.setState({currentTime: this.state.currentTime + 1000});
    }, 1000);
  };

  render() {
    return (
      <View>
        <FlatList
          style={{flex: 1, backgroundColor: 'pink'}}
          data={this.state.conversations}
          renderItem={(data) => (
            <TimerItem
              openProfile={() => this.startTimer()}
              duration={data.item.duration}
              topic={data.item.topic}
              text={data.item.text}
            />
          )}
        />
        <Button text="Rozpocznij odliczanie" onPress={this.startTimer()} />
      </View>
    );
  }
}
