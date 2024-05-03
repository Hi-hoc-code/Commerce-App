import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductDetailAdapter from '../custom/ProductDetailAdapter'

const CartScreen = ({ navigation }) => {
  return (
    <View>
      <ProductDetailAdapter
        type="Cây trồng"
        image={require('../assets/image/black_love_anthurium.png')}
        title="Black Love Anthurium"
        charactor="Ưa bóng"
        price="250.000đ"
        size="Nhỏ"
        orig="Châu Phi"
        amount="còn 199 sp"
      />
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({})