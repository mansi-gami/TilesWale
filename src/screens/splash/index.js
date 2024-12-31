import {View, Text, Image, ActivityIndicator, StyleSheet} from 'react-native';
import React, { useEffect } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function SplashScreen({navigation}) {
  useEffect(() => {  
  setTimeout(() => {
    navigation.navigate('HomeScreen'); // Navigate to HomeScreen after 3 seconds
  }, 3000);
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
const styles = StyleSheet.create({
  image: {
    height: 220,
    width: 220,
    alignSelf: 'center',
    marginTop: 250,
  },
  container: {
    flex: 0,
    flexDirection: 'row',
  },
  indicator: {
    marginLeft: 150,
    marginTop: 40,
  },
  text: {
    marginTop: 40,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: '500',
  },

  mainContent: {
    flexDirection: 'row',
    marginTop: 100,
    justifyContent: 'center',
  },
  content: {
    marginLeft: 15,
  },
  textStyle: {
    fontSize: 25,
    fontWeight: '500',
  },
  textStyle1: {
    fontSize: 15,
  },
  country: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});
