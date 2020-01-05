import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from './components/Title';
import Body from './components/Body';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Body/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    /*
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    */
    backgroundColor: '#000',
  },
});
