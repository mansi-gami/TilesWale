import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  content: {
    height: scale(410),
    margin: scale(10),
    borderRadius: scale(10),
    borderColor: 'gray',
    borderWidth: scale(0.8),
  },
  part1: { 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: scale(10),
  },
  subPart1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: scale(40),
    width: scale(40),
    borderRadius: scale(20),
  },
  name: {
    marginLeft: scale(10),
  },
  txt: {
    fontSize: scale(14),
    fontWeight: 700,
  },
  txt1: {
    fontStyle: 'italic',
  },
  btn: {
    height: scale(18),
    width: scale(70),
    backgroundColor: '#5d6063',
    borderRadius: scale(10),
  },
  btnText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 500,
  },
  part2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shreeimg: {
    height: scale(200),
    width: scale(160),
  },
  txtName: {
    fontSize: scale(18),
    fontWeight: 700,
    overflow: 'hidden',
  },
  part3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scale(10),
    marginLeft: scale(10),
    marginRight: scale(10),
  },
  txtSize: {
    color: 'gray',
    fontWeight: 600,
  },
  txtValue: {
    color: 'gray',
    fontWeight: 600,
  },
  repeat: {
    height: scale(20),
    width: scale(65),
    backgroundColor: '#1659b8',
    marginTop: scale(10),
    borderRadius: scale(12),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  repeatText: {
    color: '#ffffff',
    paddingLeft: scale(5),
  },
  detail: {
    width: scale(200),
  },
  timeText: {
    color: 'gray',
    fontWeight: 800,
    marginTop: scale(10),
  },
  ruppe: {
    color: 'green',
    fontSize: scale(20),
    fontWeight: 800,
  },
  tax: {
    color: 'green',
    width: scale(80),
  },
  
});

export default styles;
