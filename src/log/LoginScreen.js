import { Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';

const LoginScreen = ({ navigation }) => {
    const [Error, setError] = useState("");
    const [ErrorPass, setErrorPass] = useState("");
    const [Email, setEmail] = useState("");
    const [Pasword, setPasword] = useState("");
    const [Hide, setHide] = useState(true);
    const [UnCheck, setUnCheck] = useState(true);

    const checkEmail = (text) => {
        setEmail(text);
        console.log(text)
        if (text === "") {
            setError('Vui lòng không để trống');
        } else {
            setError('');
        }
    }
    const checkPass = (text) => {
        setPasword(text);
        console.log(text)
        if (text === "") {
            setErrorPass('Vui lòng không để trống');
        } else {
            setErrorPass('');
        }
    }
    const checkRemember = () => {
        setUnCheck(!UnCheck);
    }
    const LoginPress = () => {
        if ((Email == "Admin@gmail.com" && Pasword == "Admin123@") || (Email == "0708332716" && Pasword == "Admin123@")) {
            ToastAndroid.show("Đăng nhập thành công", ToastAndroid.SHORT);
            navigation.navigate("Home");
            console.log(Email, "+ ", Pasword)
        } else {
            ToastAndroid.show("Đăng nhập không thành công", ToastAndroid.SHORT);
            setEmail("")
            setPasword("")
        }
    }
    const Forgot = () => {
        navigation.navigate('Register');
    }
    const CreateAccount = () => {
        navigation.navigate('Register');
    }
    const showHidePass = () => {
        setHide(!Hide)
    }
    return (
        <View>
            <Image
                source={require('../assets/image/backgroundLogin.png')}
                style={styles.imgLogin}
            />
            <View style={styles.container}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#000', textAlign: 'center' }}>Chào mừng bạn</Text>
                <Text style={{ fontSize: 18, color: '#000', textAlign: 'center' }}>Đăng nhập tài khoản</Text>
                <View style={[styles.borderEdt, Error && styles.borderError, { marginTop: 20 }]}>
                    <TextInput
                        placeholder='Nhập email hoặc số điện thoại'
                        placeholderTextColor={{ color: '#333' } && styles.textError}
                        style={[styles.textInput, Error && styles.borderError]}
                        value={Email}
                        onChangeText={checkEmail} />
                </View>
                {Error ? <Text style={styles.textError}>{Error}</Text> : null}
                <View style={[styles.borderEdt, styles.row_between, ErrorPass && styles.borderError, { marginTop: 10, }]}>
                    <TextInput
                        placeholder='Nhập mật khẩu'
                        value={Pasword}
                        onChangeText={checkPass}
                        secureTextEntry={Hide}
                        style={styles.textInput}
                    />
                    <TouchableOpacity onPress={showHidePass}>
                        <Image source={Hide ? require('../assets/image/hide.png') : require('../assets/image/show.png')}
                            style={{ width: 29, height: 28 }} />
                    </TouchableOpacity>
                </View>
                {ErrorPass ? <Text style={styles.textError}>{ErrorPass}</Text> : null}
                <View style={[styles.row_between, { marginTop: 15 }]}>
                    <View style={styles.row_between}>
                        <TouchableOpacity onPress={checkRemember}>
                            <Image source={UnCheck ? require('../assets/image/check-mark.png') : require('../assets/image/check.png')}
                                style={{ width: 22, height: 22, marginRight: 5 }} />
                        </TouchableOpacity>
                        <Text style={{ color: "#949090", fontSize: 12, }}>Nhớ tài khoản</Text>
                    </View>
                    <TouchableOpacity onPress={Forgot}>
                        <Text style={{ color: "#009245", fontSize: 12, fontWeight: 'bold' }}>Quên mật khẩu?</Text>
                    </TouchableOpacity>
                </View>
                <LinearGradient
                    start={{ x: 0.0, y: 0.5 }} end={{ x: 0.5, y: 1.0 }}
                    colors={['#007537', '#4CAF50']}
                    style={styles.btnLogin}>
                    <TouchableOpacity onPress={LoginPress}>
                        <Text style={styles.textLogin}>Đăng nhập</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <View style={[styles.row_center, { marginTop: 25 }]}>
                    <View style={{ flex: 1, backgroundColor: '#4CAF50', height: 1.5 }}></View>
                    <Text style={{ marginHorizontal: 5 }}>Hoặc</Text>
                    <View style={{ flex: 1, backgroundColor: '#4CAF50', height: 1.5 }}></View>
                </View>
                <View style={[styles.row_center, { marginTop: 35 }]}>
                    <TouchableOpacity>
                        <Image source={require('../assets/image/ggIcon.png')} />
                    </TouchableOpacity>
                    <View style={{ width: 30 }}></View>
                    <TouchableOpacity>
                        <Image source={require('../assets/image/fbIcon.png')} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.row_center, { marginTop: 30 }]}>
                    <Text style={{ color: '#000', fontSize: 12, marginRight: 5 }}>Không có tài khoản</Text>
                    <TouchableOpacity onPress={CreateAccount}><Text style={{ color: '#009245', fontSize: 12 }}>Tạo tài khoản</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default LoginScreen

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
        marginTop: 60
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
    borderError: {
        borderColor: 'red'
    },
    textError: {
        color: 'red'
    }

})