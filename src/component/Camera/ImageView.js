import React from 'react'
import {ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function ImageView({photo, retakePicture, loading, navigation}) {
    const handleAnalysis = () => {
        navigation.navigate('Analysis')
    }
    return (
        <View style={styles.root}>
            <ImageBackground
                source={{uri: photo && photo.uri}}
                style={styles.imageBK}
            >
                <View style={styles.imageBkView}>
                    <SafeAreaView>
                    <View style={styles.loading}>
                        <Text>Do something here</Text>
                    </View>
                    </SafeAreaView>
                    <View style={styles.analysMenu}>
                        <TouchableOpacity 
                            style={styles.btn}
                            onPress={() => handleAnalysis()}
                        >
                            <Text style={styles.btnText}>Analyze</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnText}>Save</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.cancel} onPress={retakePicture}>
                            <Text style={styles.cancelText}>CANCEL</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'transparent',
        flex: 1,
        width: '100%',
        height: '50%'
    },
    imageBK: {
        flex: 1, 
    },
    imageBkView: {
        flex: 1,
        flexDirection: 'column',
        // padding: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: "rgba(0, 0, 0, 0.4)",
        backgroundColor: "red",
    },
    loading: {
        // backgroundColor: "pink",
        height: 300,
        width: 300,
        justifyContent: "flex-end",
        alignItems: "center"
    },  
    analysMenu: {
        // backgroundColor: "#14213D",
        backgroundColor: "#1f1f1f",
        justifyContent: "center",
        alignItems: "center",
        width: "60%",
        borderRadius: 10,
        marginBottom: 50,
        padding: 15,
    },
    tensorContainer: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        width: "50%",
        height: "20%",
        justifyContent: "center"
    },
    tensorText: {
        color: "white",
        textAlign: "center"
    },
    retakeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        backgroundColor: "pink"
    },
    retakeBtn: {
        width: 130,
        height: 40,
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: "red",
    },
    retakeText: {
        color: '#fff',
        fontSize: 20
    },
    btn: {
        backgroundColor: "white",
        width: "80%",
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    }  ,
    btnText: {
        color: "black",
        fontSize: 14,
        letterSpacing: 1,
        fontWeight: '500',
    },
    cancel: {
        // backgroundColor: "yellow",
        width: "80%",
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cancelText: {
        color: "white",
        fontSize: 15,
        letterSpacing: 1,
        fontWeight: '600'
    }
})

