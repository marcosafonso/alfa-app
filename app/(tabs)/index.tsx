import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';
import { useState } from 'react';

// import { Image } from 'expo-image';
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
const PlaceholderImage = require('../../assets/images/background-image.png');
import * as ImagePicker from 'expo-image-picker';


export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1.
    });

    if(!result.canceled){
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('Você não selecionou imagem.');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={ selectedImage }/>
        {/* <Image source={PlaceholderImage} style={styles.image}/> */}
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Escolha a foto" onPress={pickImageAsync}/>
        <Button label="Use esta fotox" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1/3,
    alignItems: 'center',
  },
  text: {
    color: '#fff'
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
})
