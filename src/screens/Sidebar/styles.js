import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    marginHorizontal: scale(10),
    // marginVertical: scale(10),
    gap: scale(8),
  },
  modalContent: {
    width: '80%',
    height: '100%',
    backgroundColor: 'white',
  },
  image: {
    height: scale(60),
    width: scale(60),
    borderRadius: scale(30),
    marginTop: scale(10),
  },
  text1: {
    marginTop: scale(10),
    fontSize: scale(18),
    fontWeight: 600,
  },
  text2: {
    fontSize: scale(11),
  },
  mainContainer: {
    height: scale(80),
    width: scale(265),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dce0dd',
    borderRadius: scale(12),
    marginHorizontal: scale(8),
    marginVertical: scale(8),
    position: 'relative',
    flexDirection: 'row',
    gap: scale(15),
  },
  content: {
    height: scale(60),
    width: scale(115),
    backgroundColor: '#ffffff',
    borderRadius: scale(8),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: scale(10),
  },
  count: {
    fontSize: scale(18),
    fontWeight: '700',
  },
  linear: {
    flex: 0,
    height: scale(45),
    width: scale(265),
    marginHorizontal: scale(8),
    borderRadius: scale(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: scale(35),
  },
  txt: {
    fontSize: scale(13),
  },
  mainPart: {
    marginHorizontal: scale(20),
    marginVertical: scale(15),
    rowGap: scale(10),
  },
  contents: {
    marginLeft: scale(10),
    fontSize: scale(13),
  },
  heading: {
    fontSize: scale(18),
    fontWeight: '700',
  },
  about: {
    fontSize: scale(18),
    fontWeight: '800',
  },
  logo: {
    height: scale(25),
    width: scale(25),
    borderRadius: scale(12.5),
  },
  logoStyle: {
    flexDirection: 'row',
    gap: scale(20),
    justifyContent: 'center',
  },
  logoContent: {
    backgroundColor: '#afd3e3',
    height: scale(30),
    width: scale(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(8),
  },
  copyright: {
    // flex: 0,
    fontSize: scale(12),
    textAlign: 'center',
    // marginBottom: scale(10),
    color: '#bab9b5',
  },
});

export default styles;
