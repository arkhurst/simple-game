import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './Header';
import StartGame from './StartGame';
import GameScreen from './GameScreen';

export default function App() {

  const [ userNumber, setUserNumber ] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  let content = <StartGame onStartGame={startGameHandler} />

  if(userNumber){
    content = <GameScreen userChoice={userNumber} />
  }

  return (
    <View style={styles.container}>
      <Header title='Guess a number' />
        {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
