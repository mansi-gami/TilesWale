import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  card: {
    height: 280,
    width: 220,
    borderColor: '#ddd',
    borderWidth: 1,
    margin: 15,
    borderRadius: 15,
  },
  image: {
    height: 150,
    width: 220,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  size: {
    width: 210,
    fontSize: 16,
    overflow: 'hidden',
    color: 'gray',
    paddingLeft: 10,
  },
  name: {
    width: 190,
    fontSize: 16,
    overflow: 'hidden',
    fontWeight: 500,
    paddingLeft: 10,
    paddingTop: 10,
  },
  bottomColor: {
    backgroundColor: '#e6e8ed',
    height: 37,
    marginTop: 20,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 30,
    marginTop: 8,
  },
  views: {
    color: 'gray',
    fontSize: 18,
    marginTop: 5,
    marginLeft: 8,
  },
  arrowIcon: {
    marginTop: 8,
    marginLeft: 70,
  },
  shareCount: {
    color: 'gray',
    fontSize: 18,
    marginTop: 5,
    marginLeft: 8,
  },
  sponsored: {
    position: 'absolute',
    backgroundColor: '#000000',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopLeftRadius: 15,
    width: 100,
  },
  image1: {
    height: 150,
    width: 210,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});

export default styles;
