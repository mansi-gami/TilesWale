import { StyleSheet } from "react-native";
import { Image } from "react-native-reanimated/lib/typescript/Animated";

const styles = StyleSheet.create({
    mainContainer: {
    
    },
    skip: {
        flexDirection: 'row',
        left: 380,
        top: 40,
    },
    skipText: {
        fontSize: 15,
        fontWeight: 600,
    },
    linear: {
        height: 750,
        marginTop: 80,
        borderRadius: 10,
      },
      Image: {
        width: 400,
        height: 800,
        bottom: 160,
        alignSelf: 'center',
      },
      text: {
        fontSize: 45,
        marginLeft: 30,
        marginTop: 30,
      },
      text1: {
        color: '#f59c02',
        fontSize: 45,
        fontWeight: 800,
        marginLeft: 30,
      },
      bottomBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderColor: "#ccc",
      },
      paginationContainer: {
        flexDirection: "row",
        alignItems: "center",
      },
      paginationDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: "#ccc",
        marginHorizontal: 15,
      },
      paginationDotActive: {
        width: 10,
        height: 10,
        borderRadius: 5,
        borderColor: '#000',
        borderWidth: 3,
        backgroundColor: "#fff",
        marginHorizontal: 15,
      },
})

export default styles;