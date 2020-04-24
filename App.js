import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './Header';
import StartGame from './StartGame';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title='Guess a number' />
      <StartGame />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
