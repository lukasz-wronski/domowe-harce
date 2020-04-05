import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

export default ProgressBar = ({onPress, progress, style, ...props}) => (
  <TouchableOpacity
    style={[styles.container, style]}
    onPress={onPress}
    percent={progress}>
    <Image style={styles.image} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: 'yellow',
  },
});
