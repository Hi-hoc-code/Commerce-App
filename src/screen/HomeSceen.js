import { FlatList, Image, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer'
import { DataPlant, listAccessory, listPlanta } from '../custom/Data';
import NewCombo from '../custom/NewCombo';


const HomeSceen = ({ navigation }) => {
  const renderPlant = ({ item }) => {
    const { name, charactor, img, price } = item;
    return (
      <View style={{ width: 175, height: 'auto', backgroundColor: '#fff', marginRight: 15 }}>
        <TouchableOpacity onPress={clickItemPlant}>
          <Image source={img} style={{ width: '100%', height: 135, borderRadius: 10 }} />
          <Text style={{ color: '#221F1F', fontSize: 14, fontWeight: 'bold' }}>{name}</Text>
          <Text style={{ color: '#7D7B7B', fontSize: 16 }}>{charactor}</Text>
          <Text style={{ color: '#007537', fontSize: 18, fontWeight: 'bold' }}>{price}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderListStand = ({ item }) => {
    const { name, img, price } = item;
    return (
      <View style={{ width: 175, height: 'auto', backgroundColor: '#fff', marginRight: 15 }}>
        <TouchableOpacity onPress={clickItemPlant}>
          <Image source={img} style={{ width: '100%', height: 135, borderRadius: 10 }} />
          <Text style={{ color: '#221F1F', fontSize: 14, fontWeight: 'bold' }}>{name}</Text>
          <Text style={{ color: '#007537', fontSize: 18, fontWeight: 'bold' }}>{price}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const clickItemPlant = () => {
    navigation.navigate('Detail')
  }

  const clickPlant = () => {

  }

  return (
    <View>
      <ScrollView >
        <View style={{ backgroundColor: '#F6F6F6' }}>
          <View style={[styles.row_between, { paddingHorizontal: 30, marginTop: 20 }]}>
            <Text style={{ fontSize: 24, fontWeight: 500, width: 220, color: '#000' }}>Planta - toả sáng không gian nhà bạn</Text>
            <TouchableOpacity onPress={() => { navigation.navigate('ItemCart'); }}>
              <Image source={require('../assets/image/cart.png')} />
            </TouchableOpacity>
          </View>
          <Image source={require('../assets/image/img1Home.png')} style={{ width: '100%', height: 170, }} />
        </View>
        <View style={[styles.container, { marginTop: 20 }]}>
          <Text style={{ fontSize: 24, fontWeight: 500, color: '#000', }}>Cây trồng</Text>
          <FlatList
            style={{ marginTop: 20 }}
            numColumns={2}
            data={DataPlant}
            keyExtractor={(item) => item.name}
            renderItem={renderPlant}
          />
          <View style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
            <TouchableOpacity><Text style={{ textAlign: 'right', fontSize: 16, fontWeight: "bold", marginTop: 15, borderBottomWidth: 1, width: 160 }}>Xem thêm Cây Trồng </Text></TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontSize: 24, color: '#000' }}>Chậu cây trồng</Text>
            <FlatList
              style={{ marginTop: 20 }}
              numColumns={2}
              data={listPlanta}
              keyExtractor={(item) => item.name}
              renderItem={renderListStand}
            />
            <View style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
              <TouchableOpacity><Text style={{ textAlign: 'right', fontSize: 16, fontWeight: "bold", marginTop: 15, borderBottomWidth: 1, width: 160 }} onPress={clickPlant}>Xem thêm Chậu cây </Text></TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 24, color: '#000' }}>Phụ kiện</Text>
            <FlatList
              style={{ marginTop: 20 }}
              numColumns={2}
              data={listAccessory}
              keyExtractor={(item) => item.name}
              renderItem={renderListStand}
            />
            <View style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
              <TouchableOpacity><Text style={{ textAlign: 'right', fontSize: 16, fontWeight: "bold", marginTop: 15, borderBottomWidth: 1, width: 160 }}>Xem thêm Phụ kiện </Text></TouchableOpacity>
            </View>
          </View>
          <Text style={{ fontSize: 24, color: "#221F1F", marginTop: 40 }}>Combo chăm sóc (mới)</Text>
          <NewCombo />
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeSceen

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingTop: 25,
    backgroundColor: '#fff',
    width: '100%',
  },
  row_between: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})