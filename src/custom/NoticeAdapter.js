import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NoticeAdapter = ({ date, image, status, title, charactor, amount }) => {
    return (
        <View style={{ borderRadius: 8, padding: 10 }}>
            {!!date && <Text>{date}</Text>}
            <View style={{ width: "100%", height: 1, backgroundColor: 'grey', marginVertical: 15 }}></View>
            <View style={styles.row}>
                {!!image && <Image source={image} style={{ width: 77, height: 77, marginRight: 15 }} />}
                <View>
                    {!!status && <Text style={styles.status}>{status}</Text>}
                    <View style={styles.row}>
                        {!!title && <Text style={styles.title}>{title}</Text>}
                        <View style={{ width: 2, height: 15, backgroundColor: 'grey', marginHorizontal: 3 }}></View>
                        {!!charactor && <Text style={styles.charactor}>{charactor}</Text>}
                    </View>
                    {!!amount && <Text style={styles.amount}>{amount}</Text>}
                </View>
            </View>
        </View>
    )
}

export default NoticeAdapter

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    status: {
        color: "#007537",
        fontSize: 16,

    },
    title: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold'
    },
    charactor: {
        fontSize: 14,
        color: '#7D7B7B'
    },
    amount: {
        fontSize: 14,
        color: '#000',
    }
})