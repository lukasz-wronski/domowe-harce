import UserService from "../firebase/UserService"
import User from "../models/User"

export default class UserModule {
    produceUserService = () => {
        return UserService()
    }
    produceUserModel = () => {
        return User()
    }
}