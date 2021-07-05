import React from 'react'

import { View, Text } from 'react-native'
import { ListItem } from 'react-native-elements'

import ItemListView from './ItemListView'


function ItemList({title, lang_dic, num, text}){
    const [expanded, setExpanded] = React.useState(false)
   
    return (
        <View>
            <ListItem.Accordion
                content={
                    <>
                        <ListItem.Content>
                            <ListItem.Title>
                                {text}
                            </ListItem.Title>
                        </ListItem.Content>
                    </>
                }
                isExpanded={expanded}
                onPress={() => {
                    setExpanded(!expanded)
                }}
           >
            <ItemListView 
                // translate={translate} 
                word={title} 
                lang_dic={lang_dic}
                num={num}
                // lang_none={lang_none}
            />
           </ListItem.Accordion>
        </View>
    )
}

export default ItemList
