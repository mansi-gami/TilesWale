import { StyleSheet } from "react-native";
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselItem: {
    height: scale(155),
    borderRadius: scale(15),
    marginTop: scale(8),
    position: 'relative',
  },
  mainContainer :{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: scale(20),
    marginVertical: scale(20),
  },
  mainContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: scale(20),
    marginVertical: scale(20),
  },
  textContainer: {
    flexDirection: 'column', 
    justifyContent: 'left', 
    alignItems: 'flex-start', 
  },
  textContainerRight: {
    flexDirection: 'column', 
    justifyContent: 'right', 
    alignItems: 'flex-end', 
  },
  carouselText: {
    fontSize: scale(20),
    fontWeight: 200,
  },
  carouselText1: {
    fontSize: scale(28),
    fontWeight: 800, 
  },
  boldText: {
    fontWeight: 700,
    fontSize: scale(15), 
  },
  carouselText2: {
    fontSize: scale(15),
    fontWeight: 'normal', 
  },
  btn: {
    backgroundColor: '#ffffff',
    height: scale(16),
    width: scale(70),
    borderRadius: scale(15),
    color: '#000000',
    justifyContent: 'center',
  },
  txt: {
    fontSize: scale(10),
    fontWeight: 600,
    textAlign: 'center',
  },
  image: {
    height: scale(115),
    width: scale(115),
  },
});

export default styles;