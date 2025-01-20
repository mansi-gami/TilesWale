import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  imageContent: {
    flex: 0,
    marginTop: scale(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: scale(180),
    width: scale(180),
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: scale(10),
  },
  indicator: {
    marginTop: scale(20),
  },
  text: {
    marginTop: scale(20),
    fontSize: scale(18),
    fontWeight: '500',
  },
  mainContent: {
    flexDirection: 'row',
    marginTop: scale(60),
    justifyContent: 'center',
    alignItems: 'center',
    gap: scale(10),
  },
  textStyle: {
    fontSize: scale(20),
    fontWeight: '500',
  },
  textStyle1: {
    fontSize: scale(12),
  },
  country: {
    fontSize: scale(17),
    textAlign: 'center',
    marginTop: scale(30),
  },
});

export default styles;
