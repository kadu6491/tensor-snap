import React from 'react'

import { View, Text, StyleSheet, FlatList} from 'react-native'

function Language({lang_def, def_text, nodef_text, styles}){
    return (
        <View>
            <Text style={styles.dic_text}>{def_text}</Text>
            {lang_def === 'none' || lang_def === undefined
                ? <Text>{nodef_text}</Text> 
                : Object.keys(lang_def).map((item, i) => (
                    <View key={i}>
                        <Text style={styles.dic_type}>{item}</Text>
                        {lang_def[item].slice(0, 4).map((it, id) => (
                            <Text id={id} style={styles.def_text}>
                                {'\u2022'} {it.replace(/\(/g, '')}
                            </Text>
                        ))}
                    </View>
                ))
            }
            {/* <FlatList 
                    data={predict}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <ItemList 
                            title={item}
                            translate={"Working on it"}
                            lang_dic="Dictionary"
                            lang_none="No Definition"
                        />
                        // <Text>{item.className}</Text>
                    )}
                /> */}
        </View>
    )
}

export default Language
