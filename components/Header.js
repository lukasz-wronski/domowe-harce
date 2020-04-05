import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';

export default Header = ({onPressAvatar, ...props}) => (
  <View style={styles.container}>
    <Text>Domowe Harce</Text>
    <View style={styles.space} />
    <TouchableOpacity onPress={onPressAvatar} style={styles.avatarContainer}>
      <Image style={styles.avatar} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
  logo: {
    width: 100,
    height: 50,
    backgroundColor: 'grey',
  },
  space: {
    flex: 1,
  },
  avatarContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'grey',
  },
  avatar: {},
});
