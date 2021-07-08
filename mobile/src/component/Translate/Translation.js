import React from 'react'

import { View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native'

import ItemList from '../Lists/ItemList'
import ItemListView from '../Lists/ItemListView'

function Translation({predict, num, extra}){
    let t = "dope"
    return (
        <View>
            <FlatList 
                    data={predict}
                    extraData={extra}
                    keyExtractor={item => item}
                    renderItem={({ item, index }) => (
                        <ItemList 
                            title={item}
                            text={extra[index]}
                            num={num}
                        />
                        // <Text>{item.className}</Text>
                    )}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        // backgroundColor: 'yellow',
        margin: 10,
    },  
    
})

export default Translation
