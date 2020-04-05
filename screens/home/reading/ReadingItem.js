import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';

export default ReadingItem = ({topic, title, text, image, ...props}) => (
  <View style={styles.container}>
    <Text style={styles.topic}>{topic}</Text>
    <View style={styles.data}>
      <Image style={styles.avatar} />
      <Text style={styles.duration}>{duration}</Text>
      <TouchableOpacity onPress={friendPress}>
        <Image style={styles.avatar} />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
      margin: 20
  },
  data: {
    flexDirection: 'row',
    marginTop: 10
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'grey',
  },
  duration: {
    flex: 1,
    textAlign: 'center',
    alignSelf: "center"
  },
  topic: {
      fontWeight: "bold",
      fontSize: 20
  }
});
