import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native'
import { Text } from 'react-native'

export default function Analyze() {
    return (
       <SafeAreaView>
           <View>
                <Text>
                    Hellloooo
                </Text>
                <TouchableOpacity>
                    <Text>Cancel</Text>
                </TouchableOpacity>
           </View>
       </SafeAreaView>
    )
}

