import UserService from './UserService';
import firestore from '@react-native-firebase/firestore';

export default class GameService {
  userService = new UserService();

  getGame = async (id) => {
    const user = this.userService.getUser();
    return this.getGameById(user.uid);
  };

  getGameById = async (userId) => {
    const ref = firestore()
      .collection('games')
      .doc(userId)
      .collection('game');


    const data = await ref.get()
    
    return data.docs.map(d => ({...d.data(), key: d.id}));
  };
}
