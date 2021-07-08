import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Platform} from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker'

import FlipCameraButton from '../Buttons/FlipCameraButton';
import SnapButton from '../Buttons/SnapButton';
import ImageView from './ImageView';


let camera = Camera

export default function CameraView({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [previewVisible, setPreviewVisible] = useState(false)
  const [capturedImage, setCapturedImage] = useState(null)
  const [loading, setLoading] = useState('')
  const [label, setLabel] = useState([])
  const [image, setImage] = useState(null)
  const [isNum, setIsNum] = useState(0)

  const takePicture = async () => {
      if (!camera) return
      const photo = await camera.takePictureAsync()
      console.log(photo)
      setIsNum(0)
      setPreviewVisible(true)
      setCapturedImage(photo)
      setImage(null)
      // getPrediction(photo.uri)
  }
  
  const retakePicture = () => {
      setCapturedImage(null)
      setPreviewVisible(false)
  }

  const onPress = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  }

  const pickImge = async () => {
    let result =  await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      // allowsEditing: true,
      // aspect: [4, 3], 
      quality: 1,
    })

    // console.log(result)
    // console.log(result.uri)

    if(!result.cancelled)
    {
      setPreviewVisible(true)
      setImage(result)
      setIsNum(1)
      setCapturedImage(null)
      // capturedImage(result)
      // console.log("***** " + image && image.uri + " ****")
    }
  }


  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();

    (async () => {
      if(Platform.OS !== 'web'){
        const { status }  = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(status !== 'granted')
        {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
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
      {previewVisible && (capturedImage || image) ? (
        <ImageView 
          photo={isNum === 0 ? capturedImage : image} 
          retakePicture={retakePicture}
          loading={loading}
          navigation={navigation}
        />) : (
        <Camera 
        style={styles.camera} 
        type={type}
        ref={(r) => {
          camera = r
        }}
      >
        <FlipCameraButton onPress={onPress} uploadBtn={pickImge}/>
        <SnapButton takePicture={takePicture}/>
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
