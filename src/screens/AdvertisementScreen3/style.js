import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  skip: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: scale(20),
  }, 
  skipText: {
    fontSize: scale(12),
    fontWeight: 600,
  }, 
  linear: {
    flex: 1,
    borderRadius: scale(8),
  },
  linearContent: {
    flex: 1,
  },
  detail: {
    flex: 0.5,
    // justifyContent: 'center',
    marginHorizontal: scale(25),
    marginVertical: scale(25),
  },
  image: {
    flex: 0.5,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginBottom: scale(62),
  },
  imageSize: {
    height: "163%",
    // width: scale(300),
  },
  text: {
    fontSize: scale(32),
  },
  text1: {
    color: '#f59c02',
    fontSize: scale(32),
    fontWeight: 800,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginVertical: scale(10),
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paginationDot: {
    width: scale(5),
    height: scale(5),
    borderRadius: scale(2),
    backgroundColor: '#ccc',
    marginHorizontal: scale(12),
  },
  paginationDotActive: {
    width: scale(8),
    height: scale(8),
    borderRadius: scale(4),
    borderColor: '#000',
    borderWidth: scale(2.2),
    backgroundColor: '#fff',
    marginHorizontal: scale(12),
  },
});

export default styles;
