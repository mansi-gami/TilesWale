import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 430,
    borderColor: '#ddd',
    borderWidth: 1,
    marginHorizontal: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  card: {
    height: 70,
    width: 70,
    borderRadius: 10,
    margin: 15,
    borderColor: '#ddd',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 60,
    width: 50,
  },
  views: {
    flexDirection: 'row',
    height: 30,
    width: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    left: 144,
    top: 10,
    borderTopStartRadius: 10,
    borderBottomStartRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  icon: {
    marginLeft: 2,
  },
  name: {
    marginTop: 25,
    fontSize: 18,
    fontWeight: 600,
  },
  location: {
    fontSize: 14,
    color: 'gray',
  },
});

export default styles;
