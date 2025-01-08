import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  border:{
    borderColor: '#bab9b6',
    borderTopWidth: 0.5,
    marginTop: 10,
  },
  mainContent: {
    flexDirection: 'row',
    marginTop: 10,  
    backgroundColor: '#ddd',
    borderRadius: 8,
  },
  location: {
    flexDirection: 'row',
    margin: 10,
  },
  locationText: {
    fontSize: 20,
    fontWeight: 500,
    marginLeft: 10,
  },
  placeholderStyle: {
    fontSize: 18,
    marginLeft: 15,
    width: 150,
  },
  selectedTextStyle: {
    fontSize: 18,
    marginLeft: 15,
    fontWeight: 600,
  },
  iconStyle: {
    width: 30,
    height: 30,
    right: 80,
  },
  dropdown1: {
    height: 30,
    width: 240,
    margin: 10,
    marginLeft: 90,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginBottom: 0,
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
    marginLeft: 5,
  },
  button: {
    backgroundColor: 'green',
    height: 25,
    margin: 8,
    marginLeft: 5,
    borderRadius: 5,
    alignSelf: 'center',
  },
});

export default styles;
