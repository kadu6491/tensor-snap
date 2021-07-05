import React from 'react'

import { View, TouchableOpacity, Text, StyleSheet} from 'react-native'


function RoundButtons({text, onPress}){
    return (
        <View>
            <TouchableOpacity style={styles.btn} onPress={onPress}>
                <Text style={styles.btnText}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        // backgroundColor: 'yellow',
        margin: 10,
    },  
    btn: {
        backgroundColor: "#2b2d42",
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        margin: 10,
        
    },
    btnText: {
        color: 'white',
    }
})

export default RoundButtons
