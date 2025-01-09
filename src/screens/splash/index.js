import {View, Text, Image, ActivityIndicator, StyleSheet} from 'react-native';
import React, { useEffect } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './style';

export default function SplashScreen({navigation}) {
  useEffect(() => {  
  setTimeout(() => {
    navigation.navigate('HomeScreen'); // Navigate to HomeScreen after 2 seconds
  }, 2000);
  }, []);
  return (
    <>
      <Image
        source={require('../../assets/logo.jpeg')}
        style={styles.image}></Image>
      <View style={styles.container}>
        <ActivityIndicator
          size={'large'}
          color={'#000000'}
          style={styles.indicator}
        />
        <Text style={styles.text}>Loading...</Text>
      </View>
      <View style={styles.mainContent}>
        <MaterialIcons name={'security'} size={65} />
        <View style={styles.content}>
          <Text style={styles.textStyle}>100%</Text>
          <Text style={styles.textStyle1}>SECURE</Text>
        </View>
      </View>

      <Text style={styles.country}>Made in India 🇮🇳</Text>
    </>
  );
}

