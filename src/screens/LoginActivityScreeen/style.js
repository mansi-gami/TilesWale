import {StyleSheet} from 'react-native';
import {Directions} from 'react-native-gesture-handler';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  bgImage: {
    height: scale(180),
    width: scale(380),
  },
  bgLogo: {
    height: scale(90),
    width: scale(130),
    marginLeft: scale(20),
  },
  text: {
    fontSize: scale(22),
    marginLeft: scale(20),
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: scale(60),
    marginVertical: scale(20),
  },
  subContent: {
    alignItems: 'center',
  },
  round: {
    height: scale(70),
    width: scale(70),
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius: scale(35),
    justifyContent: 'center',
    alignItems: 'center',
  },
  gooleIcon: {
    height: scale(50),
    width: scale(50),
    borderRadius: scale(25),
  },
  txt: {
    fontSize: scale(18),
  },
  privacyLinkText: {
    flex: 0.8,
    justifyContent: 'flex-end',
  },
  withoutLoginText: {
    fontSize: scale(16),
    textAlign: 'center',
  },
  withoutLinkText: {
    fontSize: scale(12),
    textAlign: 'center',
  },
  withoutLinkText1: {
    fontSize: scale(12),
  },
  linkText: {
    fontSize: scale(12),
    color: '#60becc',
  },
  privacyContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
