import firestore from '@react-native-firebase/firestore';
import UserService from './UserService';

export default class HistoryService {
  userService = new UserService();

  getStatistic = async (userId, type) => {
    const user = this.userService.getUser();
    const conversations = await firestore()
      .collection('statistics')
      .where('userId', '==', user.uid)
      .where('type', '==', type)
      .get();

    return conversations.docs.map((d) => ({...d.data(), key: d.id}));
  };
}
