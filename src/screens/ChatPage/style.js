import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const style = StyleSheet.create({
    main: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        gap: scale(10),
        padding: scale(10),
        alignItems: 'center',
        
      },
      heading: {
        fontSize: scale(18),
        fontWeight: 600,
      },
      btnAddRound: {
        position: 'absolute',
        height: scale(50),
        width: scale(50),
        borderRadius: scale(25),
        backgroundColor: '#f08d3a',
        justifyContent: 'center',
        alignItems: 'center',
        right: scale(20),
        bottom: scale(20),
        fontSize: scale(20),
      },
})

export default style;