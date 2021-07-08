import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'; 

import * as ImagePicker from 'expo-image-picker'

export default function UploadImge({onPress}) {
    return (
        <View style={styles.main}>
            <Text>This is the select image</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: "green",
    },
})
