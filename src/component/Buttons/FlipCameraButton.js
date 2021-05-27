import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'; 

export default function FlipCameraButton() {
    return (
        <View style={styles.main}>
            <SafeAreaView>
                <View style={styles.root}>
                    <TouchableOpacity>
                        <MaterialIcons name="flip-camera-ios" size={26} color="white" />
                        {/* <Ionicons name="camera-reverse" size={24} color="white" /> */}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.flash}>
                        <Ionicons name="md-flash-outline" size={26} color="white" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        width: 50,
        padding: 12,
        borderRadius: 15,
        marginRight: 15,
    },
    main: {
        alignItems: "flex-end"
    },
    flash: {
        paddingTop: 15,
    },
})
