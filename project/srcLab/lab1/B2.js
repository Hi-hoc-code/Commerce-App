import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SectionCustom from './SectionCustom'

const DATA = [
    {
        title: "Lịch trình",
        location: "Hồ Tràm, Vũng Tàu",
        time1: "09:00 AM - 12h00 AM, 12/12/2024",
        goBy: "Xe bus",
        time2: "21:00- 22h00",
        img: require('../assets/image/dulich.jpg'),
    },
    {
        title: "Lịch trình",
        location: "Hồ Tràm, Vũng Tàu",
        time1: "09:00 AM - 12h00 AM, 12/12/2024",
        goBy: "Xe bus",
        time2: "21:00- 22h00",
        img: require('../assets/image/dulich.jpg'),
    }
]

const B2 = () => {
    return (
        <View style={{}}>
            <SectionCustom
                title="Lịch trình"
                data={DATA} />
        </View>
    )
}

export default B2

const styles = StyleSheet.create({})