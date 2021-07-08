import React, {useState, useEffect} from 'react'

import { View, Text, StyleSheet} from 'react-native'

function Spanish({spa_def}){
    return (
        <View>
            <Text>{JSON.stringify(spa_def)}</Text>
            {/* <FlatList 
                    data={span_img}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <ItemList 
                            title={item} 
                            translate={"Working on it"}
                            lang_dic="Diccionario"
                            lang_none="Sin Definición"
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

export default Spanish
