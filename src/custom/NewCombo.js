import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NewCombo = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, margin: 24 }}>
                    <Text style={{ fontSize: 16, fontWeight: 600, color: '#000' }}>Lemon Balm Grow Kit </Text>
                    <Text style={{ fontSize: 14, color: '#7D7B7B' }}>Gồm: hạt giống Lemon Balm, gói đất hữu cơ, chậu Planta, marker đánh dấu...</Text>
                </View>
                <Image source={require('../assets/image/lemon_balm_grow_kit.png')} style={{ borderRadius: 12 }} />
            </View>
        </View>
    )
}

export default NewCombo

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 135,
        backgroundColor: '#e6e6e6',
        borderRadius: 12
    },
})