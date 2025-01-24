import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  main: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(10),
    marginVertical: scale(10),
  },
  image: {
    // flex: 1,
    height: "80%",
    // marginVertical: scale(25),
    // height: scale(450),
    // resizeMode: 'contain',
    // marginTop: scale(50),
  },
  smallImageContent: {
    // flex: 0.5,
    flexDirection: 'row',
    marginHorizontal: scale(20),
    // justifyContent: 'flex-end'
    // marginTop: scale(60),
    gap: scale(5),
  },
  smallImage: {
    width: scale(50),
    height: scale(50),
    borderRadius: 5,
    marginHorizontal: scale(5),
    marginBottom: scale(20),
  },
});

export default styles;
