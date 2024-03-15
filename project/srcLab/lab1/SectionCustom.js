import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

// title: "Lịch trình",
// location: "Hồ Tràm, Vũng Tàu",
// time1: "09:00 AM - 12h00 AM, 12/12/2024",
// goBy: "Xe bus",
// time2: "21:00- 22h00",
// img: require('../assets/image/dulich.jpg'),

const SectionCustom = ({ title, data }) => {
    return (
        <View>
            <Text style={{ fontSize: 26, fontWeight: 'bold', color: "#333" }}>{title}</Text>
            {renderItem(data)}
        </View>
    )
}

const renderItem = (data) => {
    return (
        data.map((item, index) => (
            <View key={index} style={styles.container}>
                <Text>Địa điểm</Text>
                <Text style={styles.textSty}>{item.location}</Text>
                <Text>Thời gian</Text>
                <Text style={styles.textSty}>{item.time1}</Text>
                <Text>Phương tiện di chuyển</Text>
                <Text style={styles.textSty}>{item.goBy}</Text>
                <Text>Hình ảnh</Text>
                <Image source={item.img} style={styles.imgCus} />
            </View>
        ))
    )
}

export default SectionCustom

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: "auto",
        padding: 15,
        borderRadius: 15,
        borderColor: '#333',
        backgroundColor: '#ccfffa',
        shadowRadius: 2,
        marginVertical: 15
    },
    textSty: {
        color: "#000",
        fontSize: 16,
        fontWeight: 'bold'
    },
    imgCus: {
        width: "100%",
        height: 150,
        borderRadius: 15
    }
})