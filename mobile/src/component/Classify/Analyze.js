import React, {useEffect, useState} from 'react'

import * as tf from '@tensorflow/tfjs'
import * as mn from '@tensorflow-models/mobilenet'
import {fetch} from '@tensorflow/tfjs-react-native'
import * as jpeg from 'jpeg-js'
import api from '../../api'

import { Text, TouchableOpacity, View, SafeAreaView, FlatList} from 'react-native'
import ProgressBar from '../Loading/ProgressBar'
import ItemList from '../Lists/ItemList'

export default function Analyze({ route, navigation }) {
    const img = route.params;

    const [loading, setLoading] = useState('')
    const [guess, setGuess] = useState([])

//     const getPrediction = async () => {
//         setLoading("loading")
//         await tf.ready()
//         const model = await mn.load()
//         const response = await fetch(img.uri, {}, {isBinary: true})
//         const imageData = await response.arrayBuffer()
//         const imageTensor = imageToTensor(imageData)
//         const prediction = await model.classify(imageTensor)
//         console.log(prediction[0])
//         setGuess(prediction)
//         // setLoading(JSON.stringify(prediction))
//         setLoading('done')
//     }
  
//     function imageToTensor(rawData){
//       const {width, height, data} = jpeg.decode(rawData, true)
//       const buffer = new Uint8Array(width*height*3)
//       let offset = 0;
//       for(let i = 0; i < buffer.length; i+=3)
//       {
//           buffer[i] = data[offset]
//           buffer[i + 1] = data[offset + 1]
//           buffer[i + 2] = data[offset + 2]
//           buffer[i + 3] = data[offset + 3]
//           offset += 4
//       }
  
//       return tf.tensor3d(buffer, [height, width, 3])
//   }
    let imgURL = img.uri.replace('file://', '')
    let newURL = imgURL.replace(/%25/g, '%')
    let imgss = "pETer"

    // console.log("**************************************\n")
    // console.log(imgURL)
    // console.log('\n')
    // console.log(newURL)

  useEffect(() => {
    //   console.log(img.uri)
    api.post('/api/', {'imgURL':newURL}).then(rep => {
        console.log(rep.data)
        setGuess(rep.data.class)
    })
  }, [])
  
    return (
       <View>
           {/* <ItemList title={"Works"} translate={"Nothing too crazy"}/> */}
           {guess.length === 0 ? <ProgressBar /> 
            : 
                // <Text>{JSON.stringify(guess)}</Text>
            // <Text>{guess.className}</Text>
            <FlatList 
                data={guess}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <ItemList title={item} translate={"Working on it"}/>
                    // <Text>{item.className}</Text>
                )}
            />
            }
       </View>
    )
}

