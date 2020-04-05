import GameService from '../firebase/GameService';
import Game from '../models/Game';

export default class GameModule {
  producegamesService = () => {
    return GameService();
  };
  produceUserModel = () => {
    return Game();
  };
  produceModulator = () => [
    {
      userModulator: this.produceCategoriesService(),
      performer: this.produceUserModel(),
    },
  ];
}
