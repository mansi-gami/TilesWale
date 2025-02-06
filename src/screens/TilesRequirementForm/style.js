import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const style = StyleSheet.create({
  main: {
    // backgroundColor: '#ffffff',
    flexDirection: 'row',
    gap: scale(10),
    padding: scale(10),
    alignItems: 'center',
  },
  heading: {
    fontSize: scale(18),
    fontWeight: 600,
  },
  dropdown: {
    margin: scale(10),
    height: scale(45),
    borderColor: '#000000',
    borderWidth: scale(0.8),
    borderRadius: scale(5),
    marginBottom: scale(0),
    justifyContent: 'center',
  },
  placeholderStyle: {
    fontSize: scale(12),
    marginHorizontal: scale(10),
    backgroundColor: '#ffffff',
  },
  selectedTextStyle: {
    fontSize: scale(15),
    marginHorizontal: scale(10),
    width: scale(10),
    // backgroundColor: '#ffffff',
  },
  iconStyle: {
    width: scale(25),
    height: scale(25),
  },
  inputSearchStyle: {
    height: scale(35),
    fontSize: scale(13),
  },
  input: {
    backgroundColor: '#ffffff',
    height: scale(45),
    width: scale(155),
    margin: scale(10),
    borderColor: '#000000',
    borderWidth: scale(0.8),
    borderRadius: scale(5),
    fontSize: scale(13),
    paddingHorizontal: scale(10),
    fontWeight: 500,
    color: '#000000',
  },
  imageBox: {
    marginHorizontal: scale(10),
  },
  box: {
    height: scale(45),
    borderColor: '#000000',
    borderWidth: scale(0.8),
    borderRadius: scale(5),
    alignItems: 'center',
    paddingHorizontal: scale(10),
    gap: scale(10),
    // justifyContent: 'center',
    flexDirection: 'row',
  },
  imageBoxText: {
    fontSize: scale(14),
  },
  textareaContainer: {
    borderColor: '#000000',
    borderWidth: scale(0.8),
    marginHorizontal: scale(10),
    marginVertical: scale(10),
    borderRadius: scale(10),
    width: scale(330),
  },
  postBtn: {
    height: scale(40),
    marginVertical: scale(10),
    backgroundColor: '#34a1eb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#ffffff',
    fontSize: scale(15),
    fontWeight: 500,
  },
});

export default style;
