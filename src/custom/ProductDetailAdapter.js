import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderCustom from './HeaderCustom'
import { PaperProvider } from 'react-native-paper'

const ProductDetailAdapter = ({ image, title, charactor, price, size, orig, amount, type }) => {
    return (
        <ScrollView>

            <View style={styles.container}>
                <HeaderCustom
                    leftIcon={require('../assets/image/back.png')}
                    title={title}
                    rightIcon={require('../assets/image/shoping_cart.png')}
                />
                <Image
                    style={{ width: "100%", height: 270 }}
                    source={image} />
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Text style={{ height: 28, width: "auto", padding: 5, backgroundColor: '#009245', borderRadius: 6, color: '#fff', marginRight: 10 }}>{type}</Text>
                    <Text style={{ height: 28, width: "auto", padding: 5, backgroundColor: '#009245', borderRadius: 6, color: '#fff' }}>{charactor}</Text>
                </View>
                <Text style={{ fontSize: 24, color: '#007537', marginTop: 20, fontWeight: 500 }}>{price}</Text>
                <Text style={[styles.borderBottom, { fontSize: 18, fontWeight: 500, borderBottomWidth: 2 }]}>Chi tiết sản phẩm</Text>
                <View style={[styles.borderBottom, styles.row_between, {}]}>
                    <Text style={[styles.fontProduct]}>Kích cỡ</Text>
                    <Text style={[styles.fontProduct]}>{size}</Text>
                </View>
                <View style={[styles.borderBottom, styles.row_between,]}>
                    <Text style={[styles.fontProduct]}>Xuất xứ</Text>
                    <Text style={[styles.fontProduct]}>{orig}</Text>
                </View>
                <View style={[styles.borderBottom, styles.row_between,]}>
                    <Text style={[styles.fontProduct]}>Tình trạng</Text>
                    <Text style={{ color: '#007537' }}>{amount}</Text>
                </View>

            </View>
            <View style={{ paddingHorizontal: 25 }}>
                <View style={[styles.row_between, { marginTop: 30 }]}>
                    <Text style={[styles.fontProduct]}>Đã chọn sản phẩm</Text>
                    <Text style={[styles.fontProduct]}>Tạm tính</Text>
                </View>
                <View style={styles.row_between}>
                    <View style={[styles.row_between, { justifyContent: 'flex-start', flex: 1 }]}>
                        <TouchableOpacity>
                            <Image source={require('../assets/image/minus.png')} />
                        </TouchableOpacity>
                        <Text style={{ marginHorizontal: 20 }}>0</Text>
                        <TouchableOpacity>
                            <Image source={require('../assets/image/more.png')} />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ textAlign: 'right', fontSize: 26, fontWeight: 'bold' }}>0đ</Text>
                </View>
                <View style={styles.btnBuy}>
                    <TouchableOpacity><Text style={{ color: '#FFF', fontSize: 24 }}>CHỌN MUA</Text></TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default ProductDetailAdapter

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 35,
        paddingTop: 40
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderColor: '#ABABAB',
        paddingBottom: 5
    },
    btnBuy: {
        width: '100%',
        height: 50,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop:20

    },
    row_between: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15
    },
    fontProduct: {
        fontSize: 16,
        fontWeight: 500,
        color: '#333'
    }
})