import React from 'react';
import { FlatList } from 'react-native';
import GameService from '../../../firebase/GameService';
import GameItem from './GameItem';

export default class GameScreen extends React.Component {
  gameService = new GameService();

  state = {
    game: {},
  };

  async componentDidMount() {
    const game = await this.gameService.getGame(this.props.gameId);
    this.setState({game});
  }

  openProfile = () => {
    this.props.navigation.navigate("Profile")
  }

  render() {
    return (
      <FlatList
        style={{flex: 1, backgroundColor: 'pink'}}
        data={this.state.friends}
        renderItem={(data) => (
          <GameItem
            duration={data.item.duration}
            name={data.item.name}
            steps={data.item.steps}
          />
        )}
      />
    );
  }
}
