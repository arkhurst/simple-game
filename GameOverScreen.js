import React from 'react';
import  { Text, View, StyleSheet, Button } from 'react-native';


const GameOverScreen = (props) => {
    return(
        <View style={styles.container}>
           <Text>Game is over!</Text>
           <Text>Number of rounds: {props.roundsNumber}</Text>
           <Text>User number was: {props.userNumber}</Text>
           <Button title='New Game' onPress={props.onRestart} />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default GameOverScreen;