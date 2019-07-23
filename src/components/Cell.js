import React from 'react';
import {View, Text, key, StyleSheet, Image, ImageBackground} from 'react-native';

export default function Cell({cell, widthWindow, imgNumber, i, cellClick}){
    let style = null;
    const showCell = (i) => {
        
        if (i == 0) {
            return styles.cellClose
        }
        if (i == 1) {
            return styles.cellOpen
        } else {
            return styles.cellCheck
        }
        }
    
      
    return (
        <View style={[{width: widthWindow/6, height: widthWindow/6}, styles.cell, showCell(cell)]} onTouchStart={() => cellClick(i)}  >
           <Text style={styles.cellText} >{cell == 1 ? imgNumber : ''}</Text>
          
        </View>
    )
}

const styles = StyleSheet.create({
            cellText: {
                fontSize: 30,
                color: '#fafcfc',
                textAlign: 'center'
            },
            cell: {
                // width: Cell.widthWindow/6,
                // height: Cell.widthWindow/6,
                borderWidth: 1,
                borderColor: '#000000',
            },
            cellOpen: {
                backgroundColor: '#2f6556',
            },
            cellClose: {
                backgroundColor: '#c5d0e6',
            },
            cellCheck: {
                backgroundColor: '#ff5a47'
            }
    
})