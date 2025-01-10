import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    borderColor: '#ddd',
    borderWidth: scale(1),
    marginHorizontal: scale(10),
    marginVertical: scale(10),
    borderRadius: scale(8),
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: scale(7),
    marginVertical: scale(7),
  },
  card: { 
    height: scale(55),
    width: scale(55),
    borderRadius: scale(8),
    borderColor: '#ddd',
    borderWidth: scale(1.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: scale(50),
    width: scale(40),
  },
  detail: {
    marginLeft: scale(15),
  },
  views: {
    flexDirection: 'row',
    height: scale(23),
    width: scale(38),
    borderColor: '#ddd',
    borderWidth: scale(1),
    marginLeft: scale(108),
    borderTopStartRadius: 10,
    borderBottomStartRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: scale(3),
  },
  name: {
    fontSize: scale(15),
    fontWeight: 600,
  },
  location: {
    fontSize: scale(11),
    color: 'gray',
  },
});

export default styles;
