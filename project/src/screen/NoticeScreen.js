import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductDetail from '../custom/ProductDetailAdapter'
import HeaderCustom from '../custom/HeaderCustom'
import NoticeAdapter from '../custom/NoticeAdapter'

const NoticeScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={require('../assets/image/back.png')}
        title="THÔNG BÁO"
      />
      {/* <Text style={{ fontSize: 14, color: '#000', textAlign: 'center', marginTop: 20 }}>Hiện chưa có thông báo nào</Text> */}
      <View style={{ paddingHorizontal: 20 }}>
        {/* date, image, status, title, charactor, amount } */}
        <NoticeAdapter
          date="Thứ tư, 03/09/2021"
          image={require('../assets/image/black_love_anthurium.png')}
          title="Spider Plant"
          charactor="Ưa bóng"
          amount="2 sản phẩm"
          status="Đặt hàng thành công" />
      </View>
    </View>
  )
}

export default NoticeScreen

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingTop: 30
  }
})