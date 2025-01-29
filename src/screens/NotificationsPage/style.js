import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const style = StyleSheet.create({
  main: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    gap: scale(10),
    padding: scale(10),
    alignItems: 'center',
    
  },
  heading: {
    fontSize: scale(18),
    fontWeight: 600,
  },
  footer: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: scale(10),
    
  },
  comment: {
    flexDirection: 'row', 
    alignItems: 'center',
    gap: scale(10),
  },
  textLine1: {
    fontSize: scale(14),
    fontWeight: 600,
  },
});

export default style;
