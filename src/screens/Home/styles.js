import React from 'react';
import {StyleSheet} from 'react-native';

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
  brand: {
    fontSize: 20,
    fontWeight: 700,
    margin: 25,
    marginLeft: 10,
  },
  link: {
    fontSize: 15,
    fontWeight: 600,
    margin: 25,
    marginLeft: 180,
  },
  card: {
    margin: 8,
  },
  images: {
    height: 100,
    width: 100,
    borderColor: '#CAD5E2',
    borderWidth: 4,
    borderRadius: 8,
  },
  texts: {
    width: 100,
    fontSize: 16,
    overflow: 'hidden',
    fontWeight: 500,
  },
  box: {
    height: 200,
    backgroundColor: '#f5edc4',
    marginTop: 25,
  },
  categories: {
    fontSize: 20,
    fontWeight: 700,
    marginLeft: 10,
    marginTop: 10,
  },
  content: {
    height: 180,
    width: 120,
    backgroundColor: '#ffffff',
    margin: 20,
  },
  img: {
    height: 100,
    width: 100,
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
    color: '#692f2f',
    margin: 10,
    marginBottom: 2,
  },
  form: {
    height: 600,
    backgroundColor: '#f2e22c',
    marginTop: 25,
    margin: 10,
    borderRadius: 15,
  },
  heading: {
    fontSize: 26,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 600,
  },
  para: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 17,
    fontWeight: 400,
  },
  dropdown: {
    margin: 16,
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginBottom: 0,
  },
  placeholderStyle: {
    fontSize: 18,
    marginLeft: 15,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 15,
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  input: {
    backgroundColor: '#ffffff',
    height: 50,
    width: 190,
    margin: 16,
    borderRadius: 5,
    fontSize: 16,
    paddingLeft: 15,
    fontWeight: 500,
  },
  dropdown1: {
    height: 50,
    width: 190,
    margin: 16,
    marginLeft: 0,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginBottom: 0,
  },
  textareaContainer: {
    height: 150,
    width: 395,
    padding: 5,
    marginTop: 0,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: '#ffffff',
  },
  textarea: {
    textAlignVertical: 'top',
    height: 170,
    fontSize: 14,
    color: '#333',
  },
  btn: {
    backgroundColor: 'red',
    margin: 16,
    marginTop: 28,
    height: 40,
    borderRadius: 8,
    textAlign: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 700,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.5,
    elevation: 7,
  },
});

export default styles;