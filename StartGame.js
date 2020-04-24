import React,{useState} from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Button, 
    TouchableWithoutFeedback, 
    Keyboard,
    Alert} from 'react-native';

import Card from './Card';
import Theme from './Theme';
import NumberContainer from './NumberContainer';


export default function StartGame(props){ 

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNum, setSelectedNum] = useState()
    
 
    const handleInput = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g,''));
    }

    const handleResetInput = () => {
        setEnteredValue('')
        setConfirmed(false)
    }

    const confirmInput = () => {
        const chosenNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert(
                'Invalid number', 
                'Number has to be a number between 1 and 99.', 
                [{text:'Okay', style:'destructive', onPress : handleResetInput}]
               );
            return
        }      
        setConfirmed(true)
        setEnteredValue('')
        setSelectedNum(chosenNumber)
        hideKeyboard
    }

    let confirmedOutput;
    
    if(confirmed){
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
              <Text> You selected</Text>
              <NumberContainer>
                  {selectedNum}
              </NumberContainer>
              <Button title='START GAME' onPress={() => props.onStartGame(selectedNum)} />
            </Card>
        ) 
    }
    // hide keyboard on iOS
    const hideKeyboard = () => {
        Keyboard.dismiss()
    }
    return( 
        <TouchableWithoutFeedback onPress={hideKeyboard} >
          <View style={styles.container}>
            <Text style={styles.screenTitle}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a number</Text>
                    <TextInput 
                        autoCorrect={false} 
                        keyboardType='numeric' 
                        maxLength={2} 
                        style={styles.input} 
                        onChangeText={handleInput}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                        <Button title='Reset' color={Theme.accent} onPress={handleResetInput} />
                        </View>
                        <View style={styles.button}>
                        <Button title='Confirm' color={Theme.primary} onPress={confirmInput} />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
             </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        padding:10
    },
    screenTitle:{
         color:'teal',
         fontSize:16,
         fontWeight:'500'   
    },
    inputContainer:{
        marginVertical:10,
        maxWidth:'80%',
        width:300,
        alignItems:'center',
    },
    input:{
        height:30,
        borderBottomColor:'grey',
        textAlign:"center",
        borderBottomWidth:1,
        marginVertical:10,
        width:30
    },
    buttonContainer:{
        flexDirection:"row",
        justifyContent:'space-around',
        width:'100%',    
    },
    button:{
        width:'40%'
    },
    summaryContainer:{
        marginTop:15,
        alignItems:'center'
    }
})