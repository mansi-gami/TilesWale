import {StyleSheet} from 'react-native';
import {s, scale} from 'react-native-size-matters';

const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  heading: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(20),
  },
  headingText: {
    fontSize: scale(18),
    fontWeight: 600,
  },
  descLine: {
    fontSize: scale(12),
    textAlign: 'center',
    marginHorizontal: scale(30),
    marginTop: scale(10),
  },
  avatarImage: {
    height: scale(200),
    width: scale(200),
  },
  imageContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown: {
    backgroundColor: '#ebeae8',
    height: scale(35),
    width: scale(70),
    borderRadius: scale(10),
    paddingHorizontal: scale(8),
  },
  selectedTextStyle: {
    fontWeight: 600,
    fontSize: scale(15),
  },
  iconStyle: {
    height: scale(25),
    color: '#000000',
  },
  input: {
    backgroundColor: '#ebeae8',
    height: scale(35),
    width: scale(200),
    borderRadius: scale(10),
    paddingHorizontal: scale(8),
    fontSize: scale(15),
    fontWeight: 600,
  },
  button: {
    flex: 0.9,
    justifyContent: 'flex-end',
  },
  btn: {
    backgroundColor: '#3c87d6',
    marginHorizontal: scale(10),
    height: scale(40),
    borderRadius: scale(6),
    justifyContent: 'center',
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
  btnText: {
    color: '#ffffff',
    fontSize: scale(16),
    textAlign: 'center',
    fontWeight: 500,
  },
});

export default style;
