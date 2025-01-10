import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(10),
    paddingVertical: scale(8),
    backgroundColor: '#fff',
    gap: scale(15),
  },
  title: {
    flex: 1,
    fontSize: scale(18),
    fontWeight: 'bold',
  },
  icon: {
    width: scale(22),
    height: scale(22),
  },
  location: {
    height: scale(20),
    width: scale(70),
    backgroundColor: '#dce0dd',
    borderRadius: scale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(5),
  },
  flag: {
    height: scale(13),
    width: scale(13),
    borderRadius: scale(6),
  },
});

export default styles;
