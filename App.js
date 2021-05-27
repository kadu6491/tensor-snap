import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Camera } from 'expo-camera';
import SnapButton from './src/component/Buttons/SnapButton';
import CameraView from './src/component/Camera/CameraView';
import * as tf from '@tensorflow/tfjs'
import * as mn from '@tensorflow-models/mobilenet'
import {fetch} from '@tensorflow/tfjs-react-native'
import * as jpeg from 'jpeg-js'
import FlipCameraButton from './src/component/Buttons/FlipCameraButton';



let camera = Camera

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [previewVisible, setPreviewVisible] = useState(false)
  const [capturedImage, setCapturedImage] = useState(null)
  const [loading, setLoading] = useState('')
  const [label, setLabel] = useState([])

  const takePicture = async () => {
      if (!camera) return
      const photo = await camera.takePictureAsync()
      console.log(photo)
      setPreviewVisible(true)
      setCapturedImage(photo)
      // getPrediction(photo.uri)
  }
  
  const retakePicture = () => {
      setCapturedImage(null)
      setPreviewVisible(false)
  }

  async function getPrediction(url){
      setLoading("analyzing....")
      await tf.ready()
      const model = await mn.load()
      const response = await fetch(url, {}, {isBinary: true})
      const imageData = await response.arrayBuffer()
      const imageTensor = imageToTensor(imageData)
      setLoading("Getting Classification Result....")
      const prediction = await model.classify(imageTensor)
      console.log(prediction[0])
      setLoading("done!")
  }

  function imageToTensor(rawData){
    const {width, height, data} = jpeg.decode(rawData, true)
    const buffer = new Uint8Array(width*height*3)
    let offset = 0;
    for(let i = 0; i < buffer.length; i+=3)
    {
        buffer[i] = data[offset]
        buffer[i + 1] = data[offset + 1]
        buffer[i + 2] = data[offset + 2]
        buffer[i + 3] = data[offset + 3]
        offset += 4
    }

    return tf.tensor3d(buffer, [height, width, 3])
}


  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      {previewVisible && capturedImage ? (
        <CameraView 
          photo={capturedImage} 
          retakePicture={retakePicture}
          loading={loading}
        />) : (
        <Camera 
        style={styles.camera} 
        type={type}
        ref={(r) => {
          camera = r
        }}
      >
        <FlipCameraButton />
        <SnapButton takePicture={takePicture} />
      </Camera>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
