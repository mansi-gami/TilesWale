import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    content: {
      height: 510,
      margin: 10,
      borderRadius: 10,
      borderColor: 'gray',
      borderWidth: 1,
    },
    part1: {
      flexDirection: 'row',
    },
    logo: {
      height: 50,
      width: 50,
      borderRadius: 25,
      margin: 15,
    },
    name: {
      marginTop: 10,
      width: 180,
    },
    txt: {
      fontSize: 18,
      fontWeight: 700,
    },
    txt1: {
      fontStyle: 'italic',
    },
    btn: {
      height: 20,
      width: 90,
      backgroundColor: '#5d6063',
      marginTop: 28,
      marginLeft: 60,
      borderRadius: 10,
    },
    btnText: {
      color: '#ffffff',
      textAlign: 'center',
      fontWeight: 500,
    },
    part2: {
      flexDirection: 'row',
    },
    shreeimg: {
      height: 250,
      width: 210,
    },
    txtName: {
      marginLeft: 20,
      marginTop: 15,
      fontSize: 22,
      fontWeight: 700,
      overflow: 'hidden',
    },
    part3: {
      flexDirection: 'row',
      width: 310,
    },
    txtSize: {
      marginTop: 5,
      marginLeft: 20,
      color: 'gray',
      fontWeight: 600,
    },
    txtValue: {
      marginLeft: 20,
      color: 'gray',
      fontWeight: 600,
    },
    repeat: {
      height: 25,
      width: 75,
      backgroundColor: '#1659b8',
      marginLeft: 20,
      marginTop: 5,
      borderRadius: 20,
      flexDirection: 'row',
    },
    repeatText: {
      color: '#ffffff',
      textAlign: 'center',
      marginLeft: 3,
    },
    icon: {
      alignSelf: 'center',
      marginLeft: 5,
    },
    time: {
      margin: 20,
    },
    timeText: {
      color: 'gray',
      fontWeight: 800,
    },
    ruppe: {
      color: 'green',
      fontSize: 25,
      marginTop: 10,
      marginLeft: 55,
      fontWeight: 800,
    },
    tax: {
      color: 'green',
      width: 100,
      marginLeft: 55,
    }
  });

  export default styles;