import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    mainContainer:{
        backgroundColor: '#ffffff',
        height: 950,
    },
  heading: {
    fontSize: 25,
    margin: 25,
  },
  border: {
    borderColor: '#ddd',
    borderWidth: 1,
  },
  content: {
    flexDirection: 'row',
    height: 65,
    width: 400,
    backgroundColor: '#dde5ed',
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    alignItems: 'center',
    paddingLeft: 20,
    borderRadius: 10,
  },
  image: {
    height: 30,
    width: 40,
    borderRadius: 5,
  },
  firstText: {
    fontSize: 18,
    marginLeft: 15,
    fontWeight: 700,
    width: 80,
  },
  secondText: {
    fontSize: 18,
    marginLeft: 15,
    width: 80,
  },
  blueTick: {
    height: 20,
    width: 20,
    left: 200,
  },
  btn: {
    backgroundColor: '#3c87d6',
    margin: 16,
    marginTop:320,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    textAlignVertical: 'center',
    color: '#ffffff',
    fontWeight: 700,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.5,
    elevation: 7,
  },
  btnText: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default style;
