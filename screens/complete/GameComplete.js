import React from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import CategoriesService from '../../../firebase/CategoriesService';
import CategoriesItem from "./CategoriesItem"
import GameItem from '../home/game/GameItem';

export default class GameComplete extends React.Component {

  state = {
    game: {}
  }

  searchCategories = async text => {
    const categories = await this.categoriesService.search(text)
    this.setState({text, categories})
  }

  openProfile = () => {
    this.props.navigation.navigate("Profile")
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'pink'}}>
        <TextInput
          style={{height: 30, backgroundColor: 'white'}}
          onChangeText={(text) => this.searchCategories(text)}
          value={this.state.text}
        />
        <FlatList
          style={{flex: 1, backgroundColor: 'pink'}}
          data={this.state.friends}
          renderItem={(data) => (
            <GameItem
              friendPress={() => this.openProfile(data.item.friendId)}
              duration={data.item.duration}
              topic={data.item.topic}
              name={data.item.name}
            />
          )}
        />
      </View>
    );
  }
}
