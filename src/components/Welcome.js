import React, {useState} from 'react';

import {View, StyleSheet, TextInput, Text, Button} from 'react-native';



export default function Welcome ({navigation}) {

    const [playerName1, setPlayerName1] = useState('');  
    const [playerName2, setPlayerName2] = useState('');    

    function setName1(text){
        
        setPlayerName1(text);
       
    }
    function setName2 (text) {
        setPlayerName2(text);
    }
  
    return(
        <View style={styles.container}>
            <View style={styles.welcome}><Text >Введите Ваше имя</Text></View>
            <View style={styles.welcome}><TextInput onChangeText={setName1} value={playerName1}  placeholder='Player1'/></View>
            <View style={styles.welcome}><TextInput onChangeText={setName2} value={playerName2} placeholder='Player2'/></View>
            <Button onPress={() => navigation.navigate('Game', {name1: playerName1, name2: playerName2} )} title='play'></Button>
        </View>
    )
   }
    


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderColor: '#000000',
        borderWidth: 2
    },

    welcome: {
        fontSize: 35,
        color: '#ffffff',
        borderWidth: 2,
        borderColor: '#000000',
        backgroundColor: '#fd7c6e',
        width: 250,
        height: 40
    }
});
