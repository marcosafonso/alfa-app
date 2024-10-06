import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';
// import { Image } from 'expo-image';
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
const PlaceholderImage = require('../../assets/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
        {/* <Image source={PlaceholderImage} style={styles.image}/> */}
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Escolha a foto"/>
        <Button label="Use esta foto" />
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
