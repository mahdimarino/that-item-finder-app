import { View, Text, Image, StyleSheet } from "react-native"

const Logoic = () => {
    return (
        <View style={styles.picdiv} ><Image style={{ width: 80, height: 60 }} source={require('./THATLOGO.png')} /></View>
    )
}

const styles = StyleSheet.create({

    picdiv: {
        marginRight: 45,

    }

})



export default Logoic