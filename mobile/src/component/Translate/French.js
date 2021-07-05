import React, {useState, useEffect} from 'react'

import { View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native'
import ItemList from '../Lists/ItemList'

function French(props){

    return (
        <View>
            <Text>This is French</Text>
            <Text>{JSON.stringify(props.fra_def)}</Text>
            {/* <FlatList 
                data={fra_img}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <ItemList 
                        title={item} 
                        translate={"Working on it"}
                        lang_dic="Dictionnaire"
                        lang_none="Pas de définition"
                        predict={predict}
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

export default French
