import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default GameImage = ({selected, options, ...props}) => (
  <View style={styles.container}>
    {options.map((option) => (
      <TouchableOpacity
        key={option.text}
        style={styles.option}
        onPress={option.onPress}>
        <Text style={option.id == selected ? styles.textSelected : styles.textNormal}>
          {option.text}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {flexDirection: 'row', height: 50, alignItems: "center"},
  textSelected: {
    fontSize: 20,
  },
  textNormal: {
    fontSize: 15,
  },
  option: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
});
