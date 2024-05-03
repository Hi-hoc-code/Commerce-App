import { Image, StyleSheet, Text, ToastAndroid, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

const HistorySearch = ({ leftIcon, title, rightIcon, ItemClick }) => {
    return (
        <View >
            <TouchableOpacity onPress={ItemClick}>
                <View style={[styles.row_between, { alignItems: 'center', marginTop: 20 }]}>
                    {leftIcon ? <TouchableOpacity><Image source={leftIcon} style={[styles.img, { marginRight: 5 }]} /></TouchableOpacity> : <View style={styles.emptyView} />}
                    {title ? <Text style={styles.title} >{title}</Text> : <View style={styles.emptyView} />}
                    {rightIcon ? <TouchableOpacity><Image source={rightIcon} style={styles.img} /></TouchableOpacity> : <View style={styles.emptyView} />}
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default HistorySearch

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
        color: '#000',
        flex: 1
    }
})