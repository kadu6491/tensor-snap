import React from 'react'

import { View, Text } from 'react-native'
import { ListItem } from 'react-native-elements'

import ItemListView from './ItemListView'

function ItemList({title, translate}){
    const [expanded, setExpanded] = React.useState(false)
    return (
        <View>
            <ListItem.Accordion
                content={
                    <>
                        <ListItem.Content>
                            <ListItem.Title>
                                {title}
                            </ListItem.Title>
                        </ListItem.Content>
                    </>
                }
                isExpanded={expanded}
                onPress={() => {
                    setExpanded(!expanded)
                }}
           >
            <ItemListView translate={translate} word={title}/>
           </ListItem.Accordion>
        </View>
    )
}

export default ItemList
