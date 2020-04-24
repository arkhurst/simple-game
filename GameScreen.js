import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import NumberContainer from './NumberContainer';
import Card from './Card';

const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * ( max - min)) + min;

    if (randomNumber === exclude){
        return generateRandomNumber(min, max, exclude)
    }else{
        return randomNumber;
    };
};

export default function GameScreen(props){

    const [currentGueess, setCurrentGuess] = useState(
        generateRandomNumber(1,100, userChoice)
        );
    const [ rounds, setRounds ] = useState(0);    
    const currentLow = useRef(1);
    const currentHigh = useRef(100); 
    
    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if(currentGueess === userChoice){
            onGameOver(rounds)
        }
    }, [currentGueess, userChoice, onGameOver])

    const nextGuessHandler = (direction) => {
        if((direction === 'lower' && currentGueess < props.userChoice) || (direction === 'greater' && currentGueess > props.userChoice)){
            Alert.alert('Dont lie to me!','You know thats wrong', [
                { text:'Sorry', style:'cancel'}
            ]);
            return;
        };
        if (direction === 'lower'){
            currentHigh.current = currentGueess;
        } else {
            currentLow.current = currentGueess;
        }

        const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGueess);
        setCurrentGuess(nextNumber);
        setRounds(currentRounds => currentRounds + 1);
    };
    return(
        <View style={styles.container}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGueess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')} />
                <Button title="GREATER" onPress={nextGuessHandler.bind(this, 'greater')} />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
        width:300,
        maxWidth:'80%'
    }
});