import React from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import Container from '../components/Container';
import Button from '../components/Button';
import { StackActions } from "@react-navigation/native"
import UserService from '../firebase/UserService';

export default class AuthController extends React.Component {
  
  userService = new UserService()

  render() {
    return (
      <Container style={styles.container}>
        <Image style={styles.logo} />
        <Image style={styles.avatar} />
        <Text>Domowe Harce</Text>
        <Button
          text="Dołącz"
          onPress={this.signInPress}
          style={styles.signIn}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
  },
  avatar: {
    alignSelf: 'center',
    marginVertical: 100,
    width: 300,
    height: 300,
    backgroundColor: 'grey',
  },
  logo: {
    alignSelf: 'center',
    marginTop: 50,
    width: 200,
    height: 50,
    backgroundColor: 'grey',
  },
  signIn: {
    flex: 1,
    backgroundColor: 'red',
    marginTop: 50,
  },
});
