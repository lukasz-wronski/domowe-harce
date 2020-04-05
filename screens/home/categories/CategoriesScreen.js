import React from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import CategoriesService from '../../../firebase/CategoriesService';
import CategoriesItem from './CategoriesItem';

export default class CategoriesScreen extends React.Component {
  categoriesService = new CategoriesService();

  state = {
    text: '',
    categories: [
      {
        name: 'Naukowe historie',
        finished: 1,
        max: 4,
        games: [
          {
            name: 'Kosmiczna przygota',
            description: 'Podróż po galaktyce',
            percent: 0,
          },
        ],
      },
      {
        name: 'Magiczne krainy',
        finished: 2,
        max: 5,
        games: [
          {
            name: 'AFTYKAŃSKA PRZYGODA',
            description: 'Śladami Stasia i Nel',
            percent: 0,
          },
          {
            name: 'PODWODNY ŚWIAT',
            description: 'Poznaj głębie oceanów',
            percent: 100,
          },
        ],
      },
      {
        name: 'Bohaterowie',
        finished: 2,
        max: 8,
        games: [],
      },
    ],
  };

  searchCategories = async (text) => {
    const categories = await this.categoriesService.search(text);
    this.setState({text, categories});
  };

  openProfile = () => {
    this.props.navigation.navigate('Profile');
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'pink'}}>
        {this.state.categories.map((category) => (
          <View key={category.name}>
            <Text>
              {category.name} {category.finished}/{category.max}
            </Text>
            <FlatList
              style={{flex: 1, backgroundColor: 'pink'}}
              data={this.state.games}
              renderItem={(data) => (
                <CategoriesItem
                  friendPress={() => this.openProfile(data.item.friendId)}
                  duration={data.item.duration}
                  topic={data.item.topic}
                  name={data.item.name}
                />
              )}
            />
          </View>
        ))}
      </View>
    );
  }
}
