import React, {useEffect, useState} from 'react'

import { View, Text, StyleSheet} from 'react-native'

import * as Speech from 'expo-speech'

import api from '../../api'
import Spanish from '../Translate/Spanish'
import English from '../Translate/English'
import French from '../Translate/French'


function ItemListView(props){
    const [expanded, setExpanded] = React.useState(false)
    const [defi, setDefi] = useState({})
    const [fra_def, setFra_Def] = useState({})
    const [eng_def, setEng_Def] = useState({})
    const [spa_def, setSpa_Def] = useState({})

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
        api.post('/api/word/', {word}).then(rep => {
            console.log(rep.data)
            setDefi(rep.data)
            setFra_Def(rep.data.fra_def)
            setEng_Def(rep.data.eng_def)
            setSpa_Def(rep.data.spa_def)
        })
    }, [])
    return (
        <View style={styles.root}>
            {props.num === 0 ? <English styles={styles.dic_text} eng_def={eng_def}/> : null}
            {props.num === 1 ? <Spanish spa_def={spa_def}/> : null}
            {props.num === 2 ? <French fra_def={fra_def}/> : null}
            
            {/* {defi === 'none' 
                ? <Text>{props.lang_none}</Text> 
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
            } */}
            
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
