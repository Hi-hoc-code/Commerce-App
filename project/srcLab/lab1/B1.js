import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderCustom from './HeaderCustom'

const B1 = () => {
    return (
        <View>
            <HeaderCustom
                leftIcon={require('../assets/image/back.png')}
                center="HEADER"
                rightIcon={require('../assets/image/avatar.png')} />
            <HeaderCustom
                leftIcon={require('../assets/image/back.png')}
                center="Trang chủ"
                rightIcon={require('../assets/image/avatar.png')} />
            <HeaderCustom
                leftIcon={require('../assets/image/back.png')}
                rightIcon={require('../assets/image/avatar.png')} />
        </View>
    )
}

export default B1

const styles = StyleSheet.create({})