import firestore from '@react-native-firebase/firestore';
import UserService from './UserService';

export default class QuestionsService {
  userService = new UserService();

  search = async (text) => {
    const questions = await firestore()
      .collection('questions')
      .where('name', '>=', text)
      .get();

    return categories.docs.map((d) => ({...d.data(), key: d.id}));
  };

  getQuestion = async (questionsId) => {
    const user = userService.getUser();

    const data = await firestore()
      .collection('questions')
      .orderBy('date', 'asc')
      .get();

    return chatService.fetchMessages(data);
  };

  finishQuestion = async (model) => {
    const user = userService.getUser();

    const document = await firestore()
      .collection('questions')
      .doc(user.uid)
      .collection('questions')
      .add(model);

    return document.uid;
  };
}
