import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      // justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 15,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: '#fff',
      gap: 20,
    },
    title: {
      flex: 1,
      fontSize: 20,
      fontWeight: 'bold',
    },
    icon: {
      width: 30,
      height: 30,
    },
    location: {
      height: 25,
      width: 90,
      backgroundColor: '#dce0dd',
      
      borderRadius: 20,
      flexDirection: 'row',
       
    },
    flag: {
      height: 16,
      width: 16,
      borderRadius: 8,
      marginVertical: 4,
      marginLeft: 6,
    },
    india: {
     textAlignVertical: 'center',
     marginLeft: 7,
    },
    downarrow1: {
      textAlignVertical: 'center',
      marginLeft: 4,
    },
  });

  export default styles;