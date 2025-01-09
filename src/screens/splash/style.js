import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image: {
      height: 220,
      width: 220,
      alignSelf: 'center',
      marginTop: 250,
    },
    container: {
      flex: 0,
      flexDirection: 'row',
    },
    indicator: {
      marginLeft: 150,
      marginTop: 40,
    },
    text: {
      marginTop: 40,
      marginLeft: 20,
      fontSize: 20,
      fontWeight: '500',
    },
  
    mainContent: {
      flexDirection: 'row',
      marginTop: 100,
      justifyContent: 'center',
    },
    content: {
      marginLeft: 15,
    },
    textStyle: {
      fontSize: 25,
      fontWeight: '500',
    },
    textStyle1: {
      fontSize: 15,
    },
    country: {
      fontSize: 20,
      textAlign: 'center',
      marginTop: 20,
    },
  });

  export default styles;