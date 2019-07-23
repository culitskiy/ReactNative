import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Cell from './Cell';


export default function Table({date, widthWindow, cellClick}){

    const cell = () => date.map((el, i) => <View ><Cell key={Date.now() * Math.random()} 
    widthWindow={widthWindow} cell={el[1]} i={i} cellClick={cellClick} imgNumber={el[0]}/></View>  )
    return(
        <View style={styles.table}>
            
             {cell()}
        </View>
        
    )
}

const styles = StyleSheet.create({
    table: {
        
        flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'center',
        
        borderWidth:1,
        borderColor: '#000000'
    },
    
})
