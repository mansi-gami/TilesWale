import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  horizontalScroll: {
    flexDirection: 'row',
  },
  card: {
    height: scale(220),
    width: scale(175),
    borderColor: '#ddd',
    borderWidth: scale(1),
    borderRadius: scale(12),
    marginHorizontal: scale(10),
    marginVertical: scale(10),
  },
  image: {
    height: scale(120),
    width: scale(173),
    borderTopLeftRadius: scale(12),
    borderTopRightRadius: scale(12),
  },
  image1: {
    height: scale(120),
    width: scale(173),
    borderTopLeftRadius: scale(12),
    borderTopRightRadius: scale(12),
  },
  detail: {
    marginHorizontal: scale(10),
    marginTop: scale(6),
  },
  name: {
    width: scale(190),
    fontSize: scale(13),
    overflow: 'hidden',
    fontWeight: 500,
  },
  size: {
    width: scale(160),
    fontSize: scale(12),
    overflow: 'hidden',
    color: 'gray',
  },
  bottomColor: {
    backgroundColor: '#e6e8ed',
    height: scale(28),
    marginTop: scale(16),
    borderBottomRightRadius: scale(12),
    borderBottomLeftRadius: scale(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  views: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: scale(20),
    gap: scale(10),
  },
  viewsText: {
    color: 'gray',
    fontSize: scale(14),
  },
  sponsored: {
    position: 'absolute',
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: scale(12),
    width: scale(80),
    height: scale(20),
  },
  sponsoredText: {
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default styles;
