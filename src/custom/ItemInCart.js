import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderCustom from './HeaderCustom'
import ItemCartAdapter from './ItemCartAdapter'

const ItemInCart = () => {
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={require('../assets/image/back.png')}
        title="GIỎ HÀNG"
        rightIcon={require('../assets/image/remove.png')} />
      <ItemCartAdapter
        charactor="Ưa sáng"
        img={require('../assets/image/pink_anthurium.png')}
        price="250.000đ"
        title="Sprider"
      />
    </View>
  )
}

export default ItemInCart

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})