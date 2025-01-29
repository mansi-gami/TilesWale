import {StyleSheet} from 'react-native';
import {s, scale} from 'react-native-size-matters';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: scale(10),
    // marginVertical: scale(10),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    fontSize: scale(16),
    width: scale(200),
  },
  icon: {
    flexDirection: 'row',
    gap: scale(10),
  },
  line: {
    color: 'gray',
    borderWidth: scale(0.2),
  },
});

export default style;
