import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const style = StyleSheet.create({
  content: {
    alignItems: 'center',
  },
  headingText: {
    fontSize: scale(18),
    fontWeight: 800,
    paddingBottom: scale(4),
  },
  titleText: {
    fontSize: scale(12),
    color: 'gray',
  },
  tilesBox: {
    height: scale(90),
    width: scale(320),
    backgroundColor: '#faf7e6',
    marginVertical: scale(10),
    borderRadius: scale(10),
    borderColor: '#d1cbae',
    borderWidth: scale(1.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(10),
  },
  name: {
    fontSize: scale(13),
    fontWeight: 800,
  },
  image: {
    height: scale(80),
    width: scale(80),
  },
  boxPart: {
    flexDirection: 'row',
  },
  box: {
    height: scale(90),
    width: scale(155),
    backgroundColor: '#faf7e6',
    marginVertical: scale(10),
    borderRadius: scale(10),
    borderColor: '#d1cbae',
    borderWidth: scale(1.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(10),
    marginHorizontal: scale(5),
  },
  name1: {
    fontSize: scale(13),
    fontWeight: 800,
    width: scale(80),
  },
  image1: {
    height: scale(60),
    width: scale(60),
  },
});

export default style;
