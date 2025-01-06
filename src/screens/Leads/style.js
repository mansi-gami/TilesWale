import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  label: {
    fontSize: 18,
  },
  switch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
  },
  btnadd: {
    position:'absolute',
    height: 35,
    width: 170,
    borderRadius: 25,
    backgroundColor: '#f08d3a',
    justifyContent:'center',
    alignItems:'center',
    right:15,
    bottom:15,
    paddingHorizontal:10
  },
  btnAddRound: {
    position:'absolute',
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#f08d3a',
    justifyContent:'center',
    alignItems:'center',
    right:15,
    bottom:15,
    paddingHorizontal:10,
    fontSize: 20,
  },
  btnaddText: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 5,
  },
});
export default styles;
