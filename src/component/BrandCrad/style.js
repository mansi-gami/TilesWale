import {StyleSheet} from 'react-native';
import { scale } from 'react-native-size-matters';

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  images: {
      height: scale(85),
      width: scale(85),
      borderColor: '#CAD5E2',
      borderWidth: scale(4),
      borderRadius: scale(6),
    },
    texts: {
      width: scale(85),
      fontSize: scale(14),
      overflow: 'hidden',
      fontWeight: 500,
    },
    card: {
      margin: scale(6),
    },
});

export default style;
