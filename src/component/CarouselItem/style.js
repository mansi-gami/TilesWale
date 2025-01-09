import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselItem: {
    height: 200,
    borderRadius: 20,
    marginTop: 10,
    position: 'relative',
  },
  textContainer: {
    flexDirection: 'column', // Stack the text vertically
    justifyContent: 'left', // Align text to the top
    alignItems: 'flex-start', // Align text to the left
    padding: 10,
    // paddingBottom: 0,
    position: 'absolute', // Optional: keep the text centered even if you add images
  },
  carouselText: {
    fontSize: 25,
    fontWeight: 200,
    marginTop: 5,
    marginLeft: 15,
  },
  carouselText1: {
    fontSize: 35,
    fontWeight: 800,
    marginLeft: 15,
  },
  carouselText2: {
    fontSize: 18,
    fontWeight: 'normal', // Regular weight for "Contracts"
    marginLeft: 15,
  },
  boldText: {
    fontWeight: 700,
    fontSize: 18, // Bold styling for the second part of the text
    marginLeft: 15,
  },
  carouselText3: {
    fontWeight: 700,
    fontSize: 18, // Bold styling for the second part of the text
    marginLeft: 15,
  },
  btn: {
    backgroundColor: '#ffffff',
    height: 20,
    width: 80,
    marginLeft: 15,
    marginTop: 10,
    borderRadius: 15,
    color: '#000000',
  },
  txt: {
    fontSize: 12,
    fontWeight: 500,
    textAlign: 'center',
  },
  image: {
    height: 150,
    width: 150,
    marginLeft: 250,
    marginTop: 30,
  },
  textContainerRight: {
    flexDirection: 'column', // Stack the text vertically
    justifyContent: 'right', // Align text to the top
    alignItems: 'flex-end', // Align text to the left
    padding: 20,
  },
  carouselTextRight: {
    fontSize: 25,
    fontWeight: 200,
    marginLeft: 110,
  },
  carouselText1Right: {
    fontSize: 35,
    fontWeight: 800,
  },
  carouselText2Right: {
    fontSize: 18,
    fontWeight: 'normal', // Regular weight for "Contracts"
    marginLeft: 15,
  },
  boldTextRight: {
    fontWeight: 700,
    fontSize: 18, // Bold styling for the second part of the text
    marginLeft: 15,
  },
  carouselText3Right: {
    fontWeight: 700,
    fontSize: 18, // Bold styling for the second part of the text
    marginLeft: 15,
  },
  btnRight: {
    backgroundColor: '#ffffff',
    height: 20,
    width: 100,
    marginLeft: 15,
    marginTop: 10,
    borderRadius: 15,
    color: '#000000',
  },
  txtRight: {
    fontSize: 12,
    fontWeight: 500,
    textAlign: 'center',
  },
  imageRight: {
    height: 150,
    width: 150,
    marginLeft: 30,
    marginTop: 30,
  },
  textContainerRight1: {
    marginLeft: 50,
    marginTop: 30,
  },
  carouselTextRight1: {
    fontSize: 20,
    fontWeight: 200,
  },
  carouselText1Right1: {
    marginLeft: 110,
    fontSize: 35,
    fontWeight: 800,
  },
  carouselText2Right1: {
    marginLeft: 40,
  },
  carouselText3Right1: {
    fontWeight: 700,
    fontSize: 18,
    marginLeft: 130,
  },
  btnRight1: {
    backgroundColor: '#ffffff',
    height: 20,
    width: 100,
    marginLeft: 90,
    marginTop: 10,
    borderRadius: 15,
    color: '#000000',
  },
  txtRight1: {
    fontSize: 12,
    fontWeight: 500,
    textAlign: 'center',
  },
});

export default styles;