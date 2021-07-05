import React from 'react'

import { View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native'

import ItemList from '../Lists/ItemList'

function English({eng_def, styles}){
    return (
        <View>
            <Text style={styles}>Dictionary</Text>
            <Text>{JSON.stringify(eng_def)}</Text>
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

const styles = StyleSheet.create({
    root: {
        // backgroundColor: 'yellow',
        margin: 10,
    },  
    
})

export default English
