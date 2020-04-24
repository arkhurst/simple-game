import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import NumberContainer from './NumberContainer';
import Card from './Card';

const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * ( max - min)) + min;

    if (randomNumber === exclude){
        return generateRandomNumber(min, max, exclude)
    }else{
        return randomNumber
    };
};

export default function GameScreen(props){

    const [currentGueess, setCurrentGuess] = useState(
        generateRandomNumber(1,100,  props.userChoice)
        );

    return(
        <View style={styles.container}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGueess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={() => {}} />
                <Button title="GREATER" onPress={() => {}} />
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
})