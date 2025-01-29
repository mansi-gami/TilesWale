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
    // fontSize: scale(12),
    fontWeight: 600,
  },
  linearContent: {
    flex: 1,
  },
  linear: {
    flex: 1,
    borderRadius: scale(8),
  },
  detail: {
    flex: 0.2,
    // justifyContent: 'center',
    marginHorizontal: scale(25),
    marginVertical: scale(25),
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(5),
  },
  image: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    // bottom: scale(58),
    // alignSelf: 'center',
    // resizeMode: 'contain',
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: scale(144),
  },
  imageSize: {
    height: "94%",
    // resizeMode: 'center',
    // width: scale(200),
    // height: scale(700),
  },
  firstText: {
    fontSize: scale(30),
  },
  secondText: {
    fontSize: scale(35),
    color: '#f59c02',
    fontWeight: 800,
  },
  tickMark: {
    height: scale(12),
    width: scale(12),
  },
  requirementText: {
    fontSize: scale(14),
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
