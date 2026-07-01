//  import RNFS from 'react-native-fs';
// import React, { useEffect, useState } from 'react';
// import { View, Image, Button, Text } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { loadModelAsync } from '@tensorflow/tfjs-react-native';

import { Text, View } from "react-native";


const DiseaseDetectionScreen = ({navigation}) => {
  // const [model, setModel] = useState(null);
  // const [imageUri, setImageUri] = useState(null);
  // const [predictions, setPredictions] = useState([]);
  // const handleImageSelection = async () => {
  //   const { status } = await ImagePicker.requestCameraPermissionsAsync();

  //   if (status === 'granted') {
  //     // Open the camera to take a photo
  //     const photo = await ImagePicker.launchCameraAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     });

  //     if (!photo.canceled) {
  //       // Photo was taken, set the imageUri state to the photo URI
  //       console.log('Image selected:', photo.assets[0]);
  //       setImageUri(photo.assets[0].uri);
  //       console.log(imageUri);
  //     }
  //   } else {
  //     // Camera permission is not granted, show an error message or request permission again
  //     console.log('Camera permission not granted');
  //   }
  // };
  // // Call the loadWeightFile function
  // // useEffect(() => {
  // //   // Load the TensorFlow.js model
  // //   const loadModel = async () => {
  // //     const modelJson = require('../../assets/model.json');
  // //     const modelWeights  = require('../../assets/weights.bin');
  // //     const metaData  = require('../../assets/metadata.json');
  // //     try {
  // //       console.log('Loading model...');
  // //       const loadedModel = await loadModelAsync({ modelJson,metaData  });
  // //       console.log('Model loaded successfully');
  // //       setModel(loadedModel);
  // //     } catch (error) {
  // //       console.log('Error loading the model:', error);
  // //     }
  // //   };
  // //   loadModel();
  // // }, []);
 

  // const detectDisease = async () => {
  //   if (!model || !imageUri) {
  //     return;
  //   }
  //   // Load the image from the URI
  //   const image = await tf.browser.fromPixelsAsync({ uri: imageUri });
  //   console.log('Image loaded:', image);

  //   // Resize and preprocess the image
  //   const resizedImage = tf.image.resizeBilinear(image, [224, 224]);
  //   const preprocessedImage = resizedImage.toFloat().div(tf.scalar(255.0)).expandDims();
  //   console.log('Preprocessed image:', preprocessedImage);

  //   // Make predictions using the TensorFlow.js model
  //   const prediction = await model.predict(preprocessedImage);
  //   const predictionData = await prediction.data();
  //   console.log('Predictions:', predictionData);
  //   setPredictions(predictionData);
  // };

  return (
    <View>
    <Text> This is Disease Detection Screen 
    </Text>
      {/* <Button title="Select Image" onPress={handleImageSelection} />
      <Button title="Detect Disease" onPress={detectDisease} />
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}
      {predictions.map((prediction, index) => (
        <Text key={index}>{prediction}</Text>
      ))} */}
    </View>
  );
};

export default DiseaseDetectionScreen;
