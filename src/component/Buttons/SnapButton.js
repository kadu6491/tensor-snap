import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function SnapButton({takePicture}) {
    return (
        <View
            style={{
                position: 'absolute',
                bottom: 0,
                flexDirection: 'row',
                flex: 1,
                width: '100%',
                padding: 20,
                justifyContent: 'space-between'
            }}
        >
            <View
                style={{
                    alignSelf: 'center',
                    flex: 1,
                    alignItems: 'center',
                    paddingBottom: 40,
                }}
        >
            <TouchableOpacity
                onPress={takePicture}
                style={{
                    width: 80,
                    height: 80,
                    bottom: 0,
                    borderRadius: 50,
                    // backgroundColor: '#fff',
                    borderWidth: 8,
                    borderColor: "#fff",
                }}
            />
        </View>
        </View>
    )
}

