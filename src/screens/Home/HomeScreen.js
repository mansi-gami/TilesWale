import { View, Text, StyleSheet, TextInput, Image, Button, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../../component/Header/Header';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from '../../component/Carousel/Carousel'

const HomeScreen = () => {
  const [placeholder, setPlaceholder] = useState('Hello');

  const placeholders = ['Search for Tiles', 'Search for Sanitary Ware', 'Search for Kitchen Sink', 'Serach for Bathware', 'Search for Chemical & Adhesive'];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % placeholders.length; // Cycle through the placeholders
      setPlaceholder(placeholders[index]); // Update the placeholder text
    }, 1000); // Change every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Header title={'Home'} />
      <View>
        <TextInput style={styles.textInput} placeholder={placeholder} />
        <Fontisto style={styles.search} name={'search'} size={20}/>
        <MaterialIcons style={styles.voiceIcon} name={'keyboard-voice'} size={25}/>
      </View> 
      <LinearGradient
                    colors={['#afd3e3', '#94eba4', '#c9f5d1']}
                    start={{x: 0, y: 1.0}}
                    end={{x: 1, y: 1}}
                    style={{
                      flex: 0,
                      height: 50,
                      width: 432,
                      margin: 8,
                      marginTop: 10,
                      borderRadius: 10,
                      flexDirection: 'row',
                    }}>
                    <Image source={require('../../assets/locationIcon.png')} style={styles.LocationIcon}/>
                    <Text style={styles.locationtxt}>Add Location for Local Search</Text>
                    <TouchableOpacity style={styles.button}>
                      <Text style={{color: 'white',margin: 5, fontWeight: 500}}>Share Location</Text>
                    </TouchableOpacity>
                  </LinearGradient>
                 <Carousel/>
                <View>
                  <Text>Brands in Spotlight</Text>
                </View>
    </ScrollView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  textInput: {
    borderColor: '#00000',
    borderWidth: 1,
    margin: 8,
    borderRadius: 8,
    position: 'relative',
    paddingLeft: 40,
  },
  search: {
    position: 'absolute',
    margin: 20,
  },
  voiceIcon: {
    position: 'absolute',
    marginLeft: 400,
    marginTop: 15,
  },
  LocationIcon: {
    height: 30,
    width: 30,
    alignSelf: 'center',
    marginLeft: 10,
  },
  locationtxt: {
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: 500,
    marginLeft: 15,
  },
  button: {
    backgroundColor: 'green',
    height: 35,
    margin: 8,
    marginLeft: 20,
    borderRadius: 5,
  },
});