import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Card(props){
    return(
        <View style={{... styles.card, ...props.style}}>
           {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    card:{
        padding:20,
        shadowColor:"black",
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.3,
        backgroundColor:'white',
        shadowRadius:6,
        elevation:4,
        borderRadius:10
    }
})