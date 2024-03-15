import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

const HeaderCustom = ({ leftIcon, title, rightIcon }) => {
    return (
        <View style={[styles.row_between, { alignItems: 'center' }]}>
            {leftIcon ? <TouchableOpacity><Image source={leftIcon} style={styles.img} /></TouchableOpacity> : <View style={styles.emptyView} />}
            {title ? <Text style={styles.title} >{title}</Text> : <View style={styles.emptyView} />}
            {rightIcon ? <TouchableOpacity><Image source={rightIcon} style={styles.img} /></TouchableOpacity> : <View style={styles.emptyView} />}
        </View>
    )
}
export default HeaderCustom

const styles = StyleSheet.create({
    row_between: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    img: {
        width: 18,
        height: 18
    },
    title: {
        fontSize: 16,
        color: '#000'
    }
})