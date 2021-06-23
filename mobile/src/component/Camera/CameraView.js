import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera } from 'expo-camera';

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

  const onPress = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
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
        <ImageView 
          photo={capturedImage} 
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
        <FlipCameraButton onPress={onPress} />
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
