import React, {useEffect, useState} from 'react'

import { View, Text, StyleSheet} from 'react-native'

import * as Speech from 'expo-speech'

import api from '../../api'


function ItemListView(props){
    const [expanded, setExpanded] = React.useState(false)
    const [defi, setDefi] = useState({})

    const speak = () => {
        Speech.speak(
            'Good morning', {
                    pitch: 0.9,
                    rate: 0.8,
                    language: 'en'
                }
            )
    }

   
    let word = props.word
    useEffect(() => {
        api.post('/api/definition/', {word}).then(rep => {
            // console.log(rep.data)
            setDefi(rep.data)
        })
    }, [])
    return (
        <View style={styles.root}>
            <Text style={styles.dic_text}>Dictionary</Text>
            
            {defi === 'none' 
                ? <Text>No Definition</Text> 
                : Object.keys(defi).map((item, i) => (
                    <View key={i}>
                        <Text style={styles.dic_type}>{item}</Text>
                        {defi[item].slice(0, 4).map((it, id) => (
                            <Text id={id} style={styles.def_text}>
                                {'\u2022'} {it.replace(/\(/g, '')}
                            </Text>
                        ))}
                    </View>
                ))
            }
            
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        // backgroundColor: 'red',
        padding: 15,
    },
    dic_text: {
        fontWeight: '800',
        fontSize: 16,
        paddingBottom: 10,
    },
    dic_type: {
        fontWeight: '500',
    },  
    def_text: {
        padding: 14,
    }
})

export default ItemListView
