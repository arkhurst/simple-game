import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Header = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>

    );
};
const styles = StyleSheet.create({
    container:{
        backgroundColor:'teal',
        width:'100%',
        height:75,
        alignItems:'center',
        justifyContent:'center'
    },
    headerTitle:{
        color:"#fff",
        fontSize:18
    }
})
export default Header