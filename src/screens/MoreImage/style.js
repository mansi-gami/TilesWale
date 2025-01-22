import {StyleSheet} from 'react-native';
import {s, scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(10),
    marginVertical: scale(10),
  },
  image: {
    height: scale(450),
    marginTop: scale(50),
  },
  smallImageContent: {
    flexDirection: 'row',
    marginHorizontal: scale(20),
    marginTop: scale(60),
    gap: scale(5),
  },
  smallImage: {
    width: scale(50),
    height: scale(50),
    borderRadius: 5,
    marginHorizontal: scale(5),
  },
});

export default styles;
