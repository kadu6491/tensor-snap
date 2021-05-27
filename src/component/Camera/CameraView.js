import React, {useState} from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'

import * as tf from '@tensorflow/tfjs'
import * as mn from '@tensorflow-models/mobilenet'
import {fetch} from '@tensorflow/tfjs-react-native'

export default function CameraView({photo, retakePicture, savePhoto}) {
    const [loading, setLoading] = useState('')

    async function prediction(url){
        setLoading("analyzing....")
        await tf.ready()
        setLoading("analyzing Model....")
        const model = await mn.load()
        const response = await fetch(url, {}, {isBinary: true})
        const imageData = await response.arrayBuffer()
    }

    return (
        <View
            style={{
                backgroundColor: 'transparent',
                flex: 1,
                width: '100%',
                height: '50%'
            }}
        >
            <ImageBackground
                source={{uri: photo && photo.uri}}
                style={{
                  flex: 1
                }}
            >
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        padding: 15,
                        justifyContent: 'space-between',
                        // backgroundColor: "red",
                    }}
                >
                    <View 
                        style={{
                            // backgroundColor: "green",
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: 'rgba(52, 52, 52, 0.8)',
                                width: "50%",
                                height: "20%",
                                justifyContent: "center"
                            }}
                        >
                            <Text
                                style={{
                                    color: "white",
                                    textAlign: "center"
                                }}
                            >
                                {loading}
                            </Text>
                        </View>
                    </View>
                     <View
                        style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                        }}
                    >
                        <TouchableOpacity
                            onPress={retakePicture}
                            style={{
                                width: 130,
                                height: 40,

                                alignItems: 'center',
                                borderRadius: 4
                            }}
                        >
                            <Text
                                style={{
                                color: '#fff',
                                fontSize: 20
                                }}
                            >
                                Re-take
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>

        </View>
    )
}

