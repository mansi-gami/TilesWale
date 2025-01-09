import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
  },
  modalContent: {
    width: '80%',
    height: '100%',
    backgroundColor: 'white',
    // marginTop: 40,
    // paddingHorizontal: SIZES.padding,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginTop: 25,
    marginLeft: 25,
  },
  text1: {
    fontSize: 25,
    marginTop: 20,
    fontWeight: 600,
    marginLeft: 10,
  },
  text2: {
    marginLeft: 10,
  },
  mainContainer: {
    height: 92,
    width: 305,
    margin: 25,
    backgroundColor: '#dce0dd',
    borderRadius: 15,
    position: 'relative',
    flexDirection: 'row',
  },
  content1: {
    height: 70,
    width: 130,
    backgroundColor: '#ffffff',
    margin: 11,
    borderRadius: 10,
    flexDirection: 'row',
  },
  content2: {
    height: 70,
    width: 130,
    backgroundColor: '#ffffff',
    margin: 11,
    borderRadius: 10,
    flexDirection: 'row',
  },
  icon: {
    margin: 20,
  },
  count: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: '700',
  },
  linear: {
    flex: 0,
    height: 50,
    width: 305,
    margin: 25,
    marginTop: 0,
    borderRadius: 10,
    flexDirection: 'row',
  },
  txt: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 16,
    marginLeft: 15,
  },
  icon1: {
    alignSelf: 'center',
    marginLeft: 30,
  },
  icons: {
    marginLeft: 25,
    marginTop: 20,
  },
  contents: {
    marginLeft: 15,
    marginTop: 20,
    fontSize: 16,
  },
  heading: {
    margin: 25,
    marginBottom: 0,
    fontSize: 25,
    fontWeight: '700',
  },
  about: {
    fontSize: 20,
    marginHorizontal: 25,
    marginVertical: 20,
    fontWeight: '800',
  },
  downarrow: {
    marginHorizontal: 25,
    marginVertical: 20,
    marginLeft: 100,
  },
  downarrow1: {
    marginHorizontal: 25,
    marginVertical: 20,
    marginLeft: 200,
  },
  logo: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  logoContent: {
    backgroundColor: '#afd3e3',
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 50,
    marginTop: 10,
    borderRadius: 10,
    alignContent: 'center',
  },
  copyright: {
    fontSize: 15,
    textAlign: 'center',
    color: '#bab9b5',
  },
});

export default styles;
