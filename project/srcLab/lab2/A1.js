import { StyleSheet, Text, ToastAndroid, TouchableOpacity, View, useAnimatedValue } from 'react-native'
import React from 'react'

const A1 = () => {
    const width = useAnimatedValue(100);
    const height = useAnimatedValue(90);
    function onClick() {

    }
    return (
        <View>
            <View style={{ width, height, backgroundColor: "red" }}></View>
            <TouchableOpacity style={styles.btn} onPress={onClick}><Text style={{ color: '#fff', fontSize: 22 }}>Ấn vào em đi</Text></TouchableOpacity>
        </View>
    )
}

export default A1

const styles = StyleSheet.create({
    btn: {
        width: 200,
        height: 50,
        height: 50,
        borderRadius: 8,
        backgroundColor: "green",
        justifyContent: 'center',
        alignItems: "center"
    }
})