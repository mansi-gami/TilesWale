import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: scale(10),
    marginVertical: scale(10),
    height: scale(232),
    width: scale(330),
    borderColor: '#d7d9db',
    borderWidth: scale(1),
    borderRadius: scale(12),
  },
  content: {
    flex: 1,
    marginTop: scale(10),
    // justifyContent: 'center',
    marginHorizontal: scale(10),
  },
  companyName: {
    fontSize: scale(20),
    fontWeight: 500,
  },
  part: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: scale(50),
  },
  count: {
    fontSize: scale(16),
    color: 'green',
    fontWeight: 600,
  },
  size: {
    fontSize: scale(13),
    color: '#878c91',
  },
  date: {
    fontSize: scale(11),
    color: '#878c91',
  },
  content1: {
    backgroundColor: '#d5e4f5',
    justifyContent: 'space-between',
    // alignItems: 'center',
    paddingHorizontal: scale(10),
    height: scale(125),
    borderBottomRightRadius: scale(8),
    borderBottomLeftRadius: scale(8),
    // flexDirection: 'row',
    paddingVertical: scale(10),
  },
  nameDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: scale(5),
  },
  btnDetail: {
    backgroundColor: '#34a1eb',
    height: scale(40),
    borderRadius: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical: scale(5),
  },
  leadBtnText: {
    fontSize: scale(15),
    color: '#ffffff',
    fontWeight: 600,
  },
  profile: {
    height: scale(50),
    width: scale(50),
    borderRadius: scale(25),
  },
  desc: {
    width: scale(120),
    marginRight: scale(40),
  },
  name: {
    fontSize: scale(17),
  },
  location: {
    fontStyle: 'italic',
    color: '#878c91',
  },
  btn: {
    backgroundColor: '#87888a',
    height: scale(18),
    width: scale(75),
    borderRadius: scale(15),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(5),
  },
  btnText: {
    fontSize: scale(11),
    color: '#ffffff',
    fontWeight: 500,
    alignSelf: 'center',
    // marginHorizontal: scale(5),
  },
  design: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: scale(5),
    gap: scale(3),
  },
  repeat: {
    backgroundColor: 'blue',
    height: scale(20),
    width: scale(65),
    marginLeft: scale(15),
    borderRadius: scale(16),
    flexDirection: 'row',
  },
  num: {
    backgroundColor: 'yellow',
    height: scale(12),
    width: scale(12),
    borderRadius: scale(6),
    textAlign: 'center',
    fontSize: scale(9),
    fontWeight: 800,
  },
  numText: {
    color: '#ffffff',
    fontSize: scale(10),
    fontWeight: 700,
  },
});

export default styles;
