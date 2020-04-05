import React from 'react';
import {ScrollView, StyleSheet, SafeAreaView, View} from 'react-native';
export default Container = ({children, style, ...props}) => (
  <ScrollView style={styles.container}>
    <SafeAreaView />
    <View style={style}>{children}</View>
    <SafeAreaView />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
