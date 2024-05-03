import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import HeaderCustom from '../custom/HeaderCustom'
import HistorySearch from '../custom/HistorySearch'

const SearchScreen = ({ navigation }) => {
  const [Search, setSearch] = useState('')
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={require('../assets/image/back.png')}
        title='TÌM KIẾM'
      />
      <View style={{ paddingHorizontal: 25 }}>
        <View style={[styles.row_between, { borderBottomWidth: 2, borderColor: '#000', height: 50, marginTop: 15 }]}>
          <TextInput
            placeholder='Tìm kiếm'
            placeholderTextColor='#ABABABđ'
            style={{ fontSize: 18, flex: 1 }} />
          <Image source={require('../assets/image/search.png')} style={{ width: 22, height: 22 }} />
        </View>
        <Text style={{ marginTop: 40, fontSize: 16, color: '#000' }}>Tìm kiếm gần đây</Text>
        <HistorySearch
          leftIcon={require('../assets/image/clock.png')}
          title='Sprider Plant'
          rightIcon={require('../assets/image/delete.png')}
          ItemClick={() => { navigation.navigate('Detail') }}
        />
        <HistorySearch
          leftIcon={require('../assets/image/clock.png')}
          title='Song of India'
          rightIcon={require('../assets/image/delete.png')}
          ItemClick={() => { navigation.navigate('Detail') }}
        />

      </View>

    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    padding: 24
  },
  row_between: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})