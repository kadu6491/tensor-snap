import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera } from 'expo-camera';
import SnapButton from './src/component/Buttons/SnapButton';
import CameraView from './src/component/Camera/CameraView';

let camera = Camera

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [previewVisible, setPreviewVisible] = useState(false)
  const [capturedImage, setCapturedImage] = useState(null)

  const takePicture = async () => {
    if (!camera) return
    const photo = await camera.takePictureAsync()
    console.log(photo)
    setPreviewVisible(true)
    setCapturedImage(photo)
  }

  const retakePicture = () => {
    setCapturedImage(null)
    setPreviewVisible(false)
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
        />) : (
        <Camera 
        style={styles.camera} 
        type={type}
        ref={(r) => {
          camera = r
        }}
      >
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
