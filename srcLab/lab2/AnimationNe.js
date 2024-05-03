import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import React from 'react'

const AnimationNe = () => {
    const translateX = useSharedValue(0);
    const width = useSharedValue(150);
    const onClick = () => {
        if (width.value > 200 && translateX.value > 200) {
            width.value = withSpring(100)
            translateX.value = withSpring(translateX.value - 50);
        } else {
            width.value = withSpring(width.value + 50);
            translateX.value = withSpring(translateX.value + 50);
        }
    }

    return (
        <View>
            <Animated.View
                style={[{ width: 100, height: 90, backgroundColor: 'red', marginBottom: 50 }, { transform: [{ translateX }] }]}
            />
            <TouchableOpacity style={styles.btn} onPress={onClick}><Text style={{ color: '#fff', fontSize: 22 }}>Ấn vào em đi</Text></TouchableOpacity>
            {/* <TouchableOpacity style={styles.btn} onPress={onClick1}><Text style={{ color: '#fff', fontSize: 22 }}>Ấn vào em đi</Text></TouchableOpacity> */}

        </View>
    )
}

export default AnimationNe

const styles = StyleSheet.create({
    box: {

    },
    btn: {
        width: 200,
        height: 50,
        borderRadius: 8,
        backgroundColor: "green",
        justifyContent: 'center',
        alignItems: "center"
    }
})