import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
// import * as Progress from 'react-native-progress';
import ProgressBar from 'react-native-progress/Bar'

export default function Progress() {
    return (
        <View style={styles.root}>
            <ProgressBar indeterminate width={200} />
            <Text style={styles.text}>Analyzing...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        // backgroundColor: "red",
        height: 300,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    text: {
        paddingTop: 20,
    }
})
