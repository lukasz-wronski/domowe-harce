import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';

export default GameItem = ({
  friendPress,
  name,
  duration,
  steps,
  topic,
  ...props
}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={friendPress}>
      <Image style={styles.avatar} />
    </TouchableOpacity>

    <View style={styles.data}>
      <Text style={styles.duration}>{name}</Text>
      <Text style={styles.duration}>{duration}</Text>
    </View>

    {steps.map((step) => (
      <View>
        <Text>{step.id}</Text>
        <Text>{step.title}</Text>
        <Text>{step.description}</Text>
        <Image source={{uri: step.image}} />
      </View>
    ))}

    <Text style={styles.topic}>{topic}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flexDirection: 'row',
  },
  data: {
    flex: 1,
    marginTop: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'grey',
  },
  duration: {
    flex: 1,
    marginLeft: 10,
  },
  topic: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
