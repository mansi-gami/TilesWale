import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  heading: {
    fontSize: scale(20),
    marginHorizontal: scale(20),
    marginVertical: scale(15),
  },
  border: {
    borderColor: '#ddd',
    borderWidth: scale(0.6),
  },
  content: {
    marginVertical: scale(10),
    marginHorizontal: scale(19),
    flexDirection: 'row',
    height: scale(55),
    // width: scale(312),
    backgroundColor: '#dde5ed',
    alignItems: 'center',
    paddingHorizontal: scale(15),
    borderRadius: scale(8),
    gap: scale(10),
  },
  image: {
    height: scale(25),
    width: scale(35),
    borderRadius: scale(4),
  },
  firstText: {
    fontSize: scale(15),
    fontWeight: 700,
  },
  secondText: {
    fontSize: scale(13),
  },
  blueTick: {
    height: scale(18),
    width: scale(18),
    left: scale(160),
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
    fontSize: scale(18),
    textAlign: 'center',
  },
});

export default style;
