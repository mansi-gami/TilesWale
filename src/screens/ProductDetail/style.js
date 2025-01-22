import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    gap: scale(10),
    padding: scale(10),
  },
  heading: {
    fontSize: scale(18),
    fontWeight: 600,
},
});

export default styles;
