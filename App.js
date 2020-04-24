import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './Header';
import StartGame from './StartGame';
import GameScreen from './GameScreen';
import GameOverScreen from './GameOverScreen';

export default function App() {

  const [ userNumber, setUserNumber ] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const configureNewGame = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  }

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds)
  }

  let content = <StartGame onStartGame={startGameHandler} />

  if(userNumber && guessRounds <= 0){
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  } else if ( guessRounds > 0 ) {
    content = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onRestart={configureNewGame} />
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
