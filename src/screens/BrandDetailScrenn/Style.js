import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // height: scale(800),
    backgroundColor: '#ffffff',
  },
  mainContent: {
    backgroundColor: 'white',
  },
  image: {
    height: scale(155),
    borderRadius: scale(15),
    marginTop: scale(8),
    resizeMode: 'cover',
    //   backgroundColor: '#e0e0de',
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(15),
    marginTop: scale(20),
  },
  detailDisplay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  logoImg: {
    height: scale(60),
    width: scale(60),
    borderRadius: scale(30),
    borderColor: 'gray',
    borderWidth: scale(2),
  },
  content: {
    flexDirection: 'row',
    gap: scale(5),
  },
  verified: {
    flexDirection: 'row',
    gap: scale(5),
  },
  nameText: {
    fontSize: scale(15),
    fontWeight: 600,
  },
  nameContent: {
    marginHorizontal: scale(10),
    gap: scale(2),
  },
  manufacturerText: {
    backgroundColor: '#ccae04',
    color: '#000000',
    fontWeight: 500,
    borderRadius: scale(10),
    paddingHorizontal: scale(7),
    paddingVertical: scale(1),
  },
  ratingText: {
    backgroundColor: 'green',
    color: '#ffffff',
    fontWeight: 500,
    borderRadius: scale(10),
    paddingHorizontal: scale(7),
    paddingVertical: scale(1),
  },
  verifiedText: {
    color: '#527582',
    fontStyle: 'italic',
    fontSize: scale(12),
    fontWeight: 600,
  },
  sponsoredText: {
    color: '#d17e02',
    fontStyle: 'italic',
    fontSize: scale(12),
    fontWeight: 600,
  },
  Icon: {
    flexDirection: 'row',
    gap: scale(25),
    justifyContent: 'space-between',
    margin: scale(20),
  },
  iconContent: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: scale(5),
  },
  activeIcon: {
    backgroundColor: '#34a1eb',
    height: scale(35),
    width: scale(35),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(8),
  },
  notActiveIcon: {
    backgroundColor: '#cbcfd1',
    height: scale(35),
    width: scale(35),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(8),
    shadowColor: '#000000',
    shadowOffset: {
      width: scale(0),
      height: scale(3),
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.5,
    elevation: 7,
  },
  rateContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: scale(8),
  },
  rateText: {
    fontSize: scale(15),
    fontWeight: 600,
  },
});

export default style;
