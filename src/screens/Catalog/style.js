import {StyleSheet} from 'react-native';

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
    height: 800,
  },
  image: {
    height: 90,
    width: 90,
  },
  comments: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '800',
  },
  content: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '500',
    margin: 10,
    width: 280,
  },
  linkText: {
    fontSize: 20,
    color: '#4071ed',
    margin: 10,
    width: 80,
    marginLeft: 60,
  },
});

export default styles;
