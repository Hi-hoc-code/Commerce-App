import React from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import LoginScreen from './src/log/LoginScreen';
import RegisterScreen from './src/log/RegisterScreen';
import SplashScreen from './src/log/SplashScreen';
import HomeSceen from './src/screen/HomeSceen';
import SearchScreen from './src/screen/SearchScreen';
import NoticeScreen from './src/screen/NoticeScreen';
import ProfileScreen from './src/screen/ProfileScreen';
import CartScreen from './src/screen/CartScreen';
import ItemInCart from './src/custom/ItemInCart';
import B1 from './srcLab/lab1/B1';
import B2 from './srcLab/lab1/B2';
import B3 from './srcLab/lab1/B3';

const Stack = createNativeStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();
const Home = () => {
  return (
    <BottomTab.Navigator
      barStyle={{ height: 65 }}
    >
      <BottomTab.Screen name='Home' component={HomeSceen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={require('./src/assets/image/home.png')} style={{ tintColor: color }} />
          ),
          title: ''
        }} />
      <BottomTab.Screen name='Search' component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={require('./src/assets/image/search.png')} style={{ tintColor: color }} />
          ),
          title: ''
        }} />
      <BottomTab.Screen name='Notice' component={NoticeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={require('./src/assets/image/notification.png')} style={{ tintColor: color }} />
          ),
          title: ''
        }} />
      <BottomTab.Screen name='Profile' component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={require('./src/assets/image/profile.png')} style={{ tintColor: color }} />
          ),

          title: ''
        }} />
    </BottomTab.Navigator>
  )
}
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Splash' component={SplashScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Detail' component={CartScreen} />
        <Stack.Screen name='ItemCart' component={ItemInCart} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} />
      {/* <StackNavigation /> */}
      <View style={styles.containerLab}>
        {/* <B1 /> */}
        {/* <B2 /> */}
        <B3 />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLab: {
    paddingHorizontal: 30, paddingTop: 20
  }
});

export default App;
