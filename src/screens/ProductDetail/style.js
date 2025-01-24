import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
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
  image: {
    height: scale(155),
    borderRadius: scale(15),
    marginTop: scale(8),
    resizeMode: 'contain',
    backgroundColor: '#e0e0de',
  },
  type: {
    marginTop: scale(10),
    marginHorizontal: scale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  typeText: {
    fontSize: scale(16),
    fontWeight: 'bold',
  },
  icon: {
    flexDirection: 'row',
    gap: scale(5),
  },
  iconStyle: {
    backgroundColor: '#e0e0de',
    height: scale(30),
    width: scale(30),
    borderRadius: scale(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  rupee: {
    marginHorizontal: scale(10),
    flexDirection: 'row',
    gap: scale(5),
    // justifyContent: 'space-between',
  },
  rupeeText: {
    fontSize: scale(14),
    fontWeight: 'bold',
    color: 'green',
  },
  taxText: {
    fontSize: scale(14),
    color: 'green',
  },
  sizeText: {
    marginTop: scale(3),
    fontSize: scale(12),
    color: 'gray',
    marginHorizontal: scale(10),
  },
  timeText: {
    marginTop: scale(3),
    fontSize: scale(12),
    color: 'gray',
    marginHorizontal: scale(10),
  },
  boxContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#f2f2f2',
    height: scale(25),
    width: scale(310),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: scale(10),
    borderRadius: scale(5),
  },
  boxText: {
    textAlign: 'center',
    color: 'gray',
    fontWeight: 500,
    fontSize: scale(12),
  },
  title: {
    fontSize: scale(15),
    marginHorizontal: scale(10),
    fontWeight: 500,
  },
  tableContent: {
    marginHorizontal: scale(10),
    marginVertical: scale(10),
  },
  table: {
    flexDirection: 'row',
  },
  box1: {
    flexDirection: 'row',
    width: scale(100),
    borderWidth: scale(0.6),
    borderColor: '#ddd',
  },
  box2: {
    flexDirection: 'row',
    width: scale(230),
    borderWidth: scale(0.6),
    borderColor: '#ddd',
  },
  row: {
    padding: 8,
  },
  cellKey: {
    fontSize: 14,
    color: 'gray',
  },
  cellValue: {
    fontSize: 14,
  },
  reportLine: {
    flexDirection: 'row',
    marginHorizontal: scale(10),
    gap: scale(5),
    alignItems: 'center',
  },
  reportText: {
    color: 'gray',
    fontSize: scale(12),
  },
  iconContent: {
    flex: 0.1,
    backgroundColor: '#ffffff',
    // marginHorizontal: scale(10),
    marginLeft: scale(10),
  },
  content: {
    flexDirection: 'row',
    gap: scale(10),
  },
  phone: {
    backgroundColor: '#dcedfc',
    height: scale(40),
    width: scale(60),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(10),
  },
  whatsapp: {
    backgroundColor: '#dcedfc',
    height: scale(40),
    width: scale(60),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(10),
  },
  chat: {
    backgroundColor: '#1d73b5',
    height: scale(40),
    width: scale(190),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(10),
    flexDirection: 'row',
    gap: scale(5),
  },
  chatText: {
    color: '#ffffff',
    fontSize: scale(18),
    fontWeight: 500,
  },
});

export default styles;
