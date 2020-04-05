import auth from '@react-native-firebase/auth';

export default class UserService {

    getUser = () => (auth().currentUser)

    login = async (email, password) => {
        await auth().signInWithEmailAndPassword(email, password)
    }
    
}