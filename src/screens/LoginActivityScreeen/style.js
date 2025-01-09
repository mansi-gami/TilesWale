import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ffffff',
    height: 950,
  },
  bgImage: {
    height: 255,
    width: 450,
  },
  bgLogo: {
    height: 120,
    width: 150,
    marginLeft: 30,
  },
  text: {
    fontSize: 30,
    marginLeft: 30,
  },
  content: {
    flexDirection: 'row',
    margin: 50,
    marginTop: 0,
  },
  round: {
    height: 80,
    width: 80,
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius: 40,
    marginTop: 50,
    marginLeft: 50,
    marginRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gooleIcon: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  txt: {
    fontSize: 20,
    marginLeft: 60,
    marginTop: 10,
  },
  withoutLoginText: {
    fontSize: 20,
    textAlign: 'center',
  },
  withoutLinkText: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 150,
  },
  withoutLinkText1: {
    fontSize: 15,
  },
  linkText: {
    fontSize: 15,
    color: '#60becc',
  },
  privacyContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
