import { Text, View, StyleSheet} from 'react-native';

export default function AboutScreen() {
    return(
        <View>
            <Text>Tela de ABOUT</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff'
    }
});