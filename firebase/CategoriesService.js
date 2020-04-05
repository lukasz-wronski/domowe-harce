import firestore from '@react-native-firebase/firestore';
import UserService from './UserService';
import ChatService from './ChatService';

export default class CategoriesService {
  userService = new UserService();
  chatService = new ChatService();

  search = async (text) => {
    const categories = await firestore()
      .collection('categories')
      .where('name', '>=', text)
      .get();

    return categories.docs.map((d) => ({...d.data(), key: d.id}));
  };

  getChat = async (userId) => {
    const user = userService.getUser();

    const data = await firestore()
      .collection('chat')
      .where('uid', 'in', userId)
      .orderBy('date', 'asc')
      .get();

    return chatService.fetchMessages(data);
  };
}
