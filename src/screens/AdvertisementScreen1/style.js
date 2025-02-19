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
    alignItems: 'center',
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
    // top: scale(),
    // alignItems: 'center',
    // marginTop: scale(150),
  },
  imageSize: {
    // flex: 1,
    height: '95%',
    // width: "100%",
  },
  tickMark: {
    height: scale(12),
    width: scale(12),
  },
  firstText: {
    fontSize: scale(35),
  },
  secondText: {
    fontSize: scale(35),
    color: '#f59c02',
    fontWeight: 800,
  },
  requirementText: {
    fontSize: scale(14),
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
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
  startButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: scale(15),
    left: scale(60),
  },
  startButtonText: {
    // fontSize: scale(12),
    fontWeight: 'bold',
    color: '#000',
  },
});

export default styles;
