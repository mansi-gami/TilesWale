import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: scale(10),
    gap: scale(8),
  },
  scroll: {
    flexDirection: 'row',
    gap: scale(8),
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: scale(5),
    flexDirection: 'row',
    height: scale(28),
    width: scale(70),
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius: 20,
  },
  box1: {
    height: scale(28),
    width: scale(80),
  },
  box2: {
    height: scale(28),
    width: scale(100),
  },
  box3: {
    height: scale(28),
    width: scale(90),
  },
  box4: {
    height: scale(28),
    width: scale(175),
  },
  image: {
    height: scale(16),
    width: scale(16),
  },
  text: {
    fontSize: scale(12),
    fontWeight: 600,
  },
});

export default styles;
