import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';

const RegisterScreen = ({ navigation }) => {

    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")
    const [Pasword, setPasword] = useState("")
    const [Hide, setHide] = useState(true);
    const [UnCheck, setUnCheck] = useState(true);
    const LoginPress = () => {
        navigation.navigate('Home');
    }
    const Forgot = () => {
        navigation.navigate('Register');
    }
    const Login = () => {
        navigation.navigate('Login');
    }
    return (
        <View>
            <Image
                source={require('../assets/image/bgRegister.png')}
                style={styles.imgLogin}
            />
            <View style={styles.container}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#000', textAlign: 'center' }}>Đăng ký</Text>
                <Text style={{ fontSize: 18, color: '#000', textAlign: 'center' }}>Tạo tài khoản</Text>
                <View style={[styles.borderEdt, { marginTop: 20 }]}>
                    <TextInput placeholder='Nhập họ tên'
                        style={styles.textInput} />
                </View>
                <View style={[styles.borderEdt, { marginTop: 20 }]}>
                    <TextInput placeholder='Nhập email'
                        style={styles.textInput} />
                </View>
                <View style={[styles.borderEdt, { marginTop: 20 }]}>
                    <TextInput placeholder='Nhập số điện thoại'
                        style={styles.textInput} />
                </View>
                <View style={[styles.borderEdt, styles.row_between, { marginTop: 10 }]}>
                    <TextInput placeholder='Nhập mật khẩu'
                        style={styles.textInput} />
                    <TouchableOpacity>
                        <Image source={require('../assets/image/hide.png')}
                            style={{ width: 29, height: 28 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop:15 }}>
                        <Text style={{ textAlign: 'center', width: 300, fontSize:14 }}>Để đăng kí tài khoản, bạn đồng ý <Text style={styles.textNote}>Terms & Conditions</Text> và <Text style={styles.textNote}>Privacy Policy</Text></Text>
                </View>
                <LinearGradient
                    start={{ x: 0.0, y: 0.5 }} end={{ x: 0.5, y: 1.0 }}
                    colors={['#007537', '#4CAF50']}
                    style={styles.btnLogin}>
                    <TouchableOpacity onPress={LoginPress}>
                        <Text style={styles.textLogin}>Đăng kí</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <View style={[styles.row_center, { marginTop: 25 }]}>
                    <View style={{ flex: 1, backgroundColor: '#4CAF50', height: 1.5 }}></View>
                    <Text style={{ marginHorizontal: 5 }}>Hoặc</Text>
                    <View style={{ flex: 1, backgroundColor: '#4CAF50', height: 1.5 }}></View>
                </View>
                <View style={[styles.row_center, { marginTop: 25 }]}>
                    <TouchableOpacity>
                        <Image source={require('../assets/image/ggIcon.png')} />
                    </TouchableOpacity>
                    <View style={{ width: 30 }}></View>
                    <TouchableOpacity>
                        <Image source={require('../assets/image/fbIcon.png')} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.row_center, { marginTop: 30 }]}>
                    <Text style={{ color: '#000', fontSize: 12, marginRight: 5 }}>Tôi đã có tài khoản</Text>
                    <TouchableOpacity onPress={Login}><Text style={{ color: '#009245', fontSize: 12 }}>Đăng nhập</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30
    },
    row_between: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imgLogin: {
        width: "100%",
    },
    borderEdt: {
        borderColor: '#8B8B8B',
        borderWidth: 1,
        height: 50,
        borderRadius: 8,
        paddingHorizontal: 14,
    },
    textInput: {
        flex: 1
    },
    btnLogin: {
        width: '100%',
        height: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    textLogin: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    row_center: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textNote: {
        fontSize: 12,
        color: '#009245',
        fontWeight: 'bold'
    }
})