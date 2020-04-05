import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default Button = ({style, text, onPress, ...props}) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        backgroundColor: "grey",
        borderRadius: 10,
        height: 50,
        justifyContent: "center"
    },
    text: {
        alignSelf: "center",
        color: "white",
        fontSize: 20
    }
})