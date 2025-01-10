import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  mainContent: {
    backgroundColor: 'white',
  },
  download: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    alignSelf: 'center',
    height: scale(70),
    width: scale(70),
  },
  comments: {
    alignSelf: 'center',
    fontSize: scale(16),
    color: '#000000',
    fontWeight: 800,
  },
  content: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    marginHorizontal: scale(8),
    marginVertical: scale(8),
  },
  text: {
    fontSize: scale(16),
    color: '#000000',
    fontWeight: '500',
  },
  linkText: {
    fontSize: scale(16),
    color: '#4071ed',
  },
});

export default styles;
