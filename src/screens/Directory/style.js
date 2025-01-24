import React from 'react';
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  border: {
    borderColor: '#bab9b6',
    borderTopWidth: scale(0.5),
    marginTop: scale(8),
  },
  mainContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: scale(6),
    backgroundColor: '#ddd',
    borderRadius: scale(10),
    paddingHorizontal: scale(10),
  },
  loactionContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: scale(40),
  },
  location: {
    flexDirection: 'row',
  },
  locationText: {
    fontSize: scale(16),
    fontWeight: 500,
  },
  placeholderStyle: {
    fontSize: scale(15),
    fontWeight: 600,
    marginLeft: scale(60),
  },
  selectedTextStyle: {
    fontSize: scale(15),
    fontWeight: 600,
    marginLeft: scale(60),
  },
  iconStyle: {
    width: scale(23),
    height: scale(23),
    backgroundColor: 'black',
    borderRadius: scale(16),
  },
  dropdown1: {
    height: scale(30),
    width: scale(180),
    backgroundColor: '#ddd',
    borderRadius: scale(5),
  },
  locationContent: {
    flex: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  LocationIcon: {
    height: scale(25),
    width: scale(25),
  },
  locationtxt: {
    fontSize: scale(14),
    fontWeight: 500,
  },
  button: {
    backgroundColor: 'green',
    height: scale(20),
    borderRadius: scale(4),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(3),
  },
  linear: {
    flexDirection: 'row',
    marginHorizontal: scale(5),
    marginVertical: scale(8),
    borderRadius: scale(8),
    height: scale(40),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(5),
  },
  btnText: {
    color: 'white',
    fontWeight: 600,
    fontSize: scale(9.2),
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: scale(5),
    marginVertical: scale(5),
    gap: scale(5),
  },
  retailerCount: {
    fontSize: scale(15),
    fontWeight: 700,
  },
  retailerText: {
    fontSize: scale(15),
  },
});

export default styles;
