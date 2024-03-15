import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 800, // Thời gian fade-in
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500, // Thời gian fade-out
        useNativeDriver: true,
      }).start(() => {
        navigation.replace('Login'); 
      });
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigation, opacity]);

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <Image source={require('../assets/image/logo.jpg')} style={styles.logo} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain', 
  },
});

export default SplashScreen;
