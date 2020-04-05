import React from 'react';
import {View, Text, FlatList} from 'react-native';
import GameItem from './GameItem';

export default class ReadingScreen extends React.Component {

  state = {
    game: [],
  };

  goBack = () => {
      this.props.navigation.goBack()
  };

  render() {
    return (
      <FlatList
        style={{flex: 1, backgroundColor: 'pink'}}
        data={this.state.conversations}
        renderItem={(data) => 
          <GameItem
            openProfile={() => this.openProfile()}
            duration={data.item.duration}
            topic={data.item.topic}
            text={data.item.text}
          />
        }
      />
    );
  }
}
