import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CheckBox from 'react-native-check-box'

const ItemCartAdapter = ({ img, title, charactor, price }) => {
  const [UnCheck, setUnCheck] = useState(true);
  const checkRemember = () => {
    setUnCheck(!UnCheck);
  }
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
        <TouchableOpacity onPress={checkRemember}>
          <Image source={UnCheck ? require('../assets/image/check-box-empty.png') : require('../assets/image/tick.png')}
            style={{ width: 24, height: 24, marginRight: 20 }} />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={img} style={{ width: 100, height: 100 }} />
          <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', color: '#333' }}>{title}</Text>
              <View style={{ width: 2, height: 20, backgroundColor: 'grey', marginHorizontal: 10 }}></View>
              <Text>{charactor}</Text>
            </View>
            <Text style={{ color: 'green', fontSize: 18, fontWeight: 500 }}>{price}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 20 }}>
              <TouchableOpacity>

                <Image source={require('../assets/image/more.png')} />
              </TouchableOpacity>
              <Text style={{ marginHorizontal: 20 }}>0</Text>
              <TouchableOpacity>
                <Image source={require('../assets/image/minus.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={{ borderBottomWidth: 2, marginLeft: 20 }}><Text>Xóa</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ItemCartAdapter

const styles = StyleSheet.create({

})