import React, {useEffect, useState} from 'react'

import api from '../../api'

import { Text, View, SafeAreaView, FlatList, StyleSheet} from 'react-native'
import ProgressBar from '../Loading/ProgressBar'
import ItemList from '../Lists/ItemList'
import RoundButtons from '../Buttons/RoundButtons'
import Spanish from '../Translate/Spanish'
import English from '../Translate/English'
import French from '../Translate/French'
import Translation from '../Translate/Translation'

export default function Analyze({ route, navigation }) {
    const img = route.params;

    const [prediction, setPrediction] = useState([])
    const [spa_img, setSpa_Img] = useState([])
    const [fra_img, setFra_Img] = useState([])
    const [lang_num, setLang_Num] = useState(0)

    
    let imgURL = img.uri.replace('file://', '')
    let newURL = imgURL.replace(/%25/g, '%')
    let imgss = "pETer"

  useEffect(() => {
    //   console.log(img.uri)
    api.post('/api/img/', {'imgURL':newURL}).then(rep => {
        console.log(rep.data)
        setPrediction(rep.data.classify)
        setSpa_Img(rep.data.spa_img_trans)
        setFra_Img(rep.data.fra_img_trans)
    })
  }, [])
  
    return (
       <View>
           <View style={styles.btn}>
                    <RoundButtons 
                        text="English" 
                        onPress={() => setLang_Num(0)} 
                    />
                    <RoundButtons 
                        text="Spanish" 
                        onPress={() => setLang_Num(1)} 
                    />
                    <RoundButtons 
                        text="French" 
                        onPress={() => setLang_Num(2)} 
                    />
            </View>
           {prediction.length === 0 ? <ProgressBar /> 
            : 
            <View>
                {/* <Translation 
                    predict={prediction} 
                    num={lang_num} 
                    allPredicts={allData} 
                    extra={spa_img}
                /> */}
                {lang_num === 0 
                    ? <Translation 
                        predict={prediction} 
                        num={lang_num} 
                        extra={prediction}
                    />
                    : null
                }

                {lang_num === 1 
                    ? <Translation 
                        predict={prediction} 
                        num={lang_num} 
                        extra={spa_img}
                    />
                    : null
                }

                {lang_num === 2 
                    ? <Translation 
                        predict={prediction} 
                        num={lang_num} 
                        extra={fra_img}
                    />
                    : null
                }
            </View>
            }
       </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        // backgroundColor: "pink",
        flexDirection: 'row',
        justifyContent: 'center',
    }
})

