import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const HeaderCustom = ({ leftIcon, center, rightIcon }) => {
    return (
        <View style={styles.container}>
            {leftIcon ? <TouchableOpacity><Image source={leftIcon} style={styles.imgIcon} /></TouchableOpacity> : <View style={styles.emptyView} />}
            {center ? <Text style={styles.textCenter} >{center}</Text> : <View style={styles.emptyView} />}
            {rightIcon ? <TouchableOpacity><Image source={rightIcon} style={styles.imgIcon} /></TouchableOpacity> : <View style={styles.emptyView} />}
        </View>
    )
}

export default HeaderCustom

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingBottom: 10,
        borderBottomWidth: 0.5,
        marginTop: 20,
        alignItems: 'center'
    },
    imgIcon: {
        width: 24, height: 24
    },
    textCenter: {
        fontSize: 18, fontWeight: 'bold', color: '#000'
    }
})