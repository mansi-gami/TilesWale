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
      firstText: {
        fontSize: 30,
        marginLeft: 30,
        marginTop: 30,
      },
      secondText: {
        fontSize: 40,
        marginTop: 20,
        marginLeft: 10,
        color: '#f59c02',
        fontWeight: 800,
      },
      text: {
        fontSize: 40,
        marginLeft: 30,
        color: '#f59c02',
        fontWeight: 800,
      },
      Image: {
        width: 400,
        height: 800,
        bottom: 260,
        alignSelf: 'center',
      },
      tickMark: {
        height: 15,
        width: 15,
        marginLeft: 30,
        marginTop: 10,
        marginRight: 5,
      },
      requirementText: {
        fontSize: 18,
        marginLeft: 5,
        marginTop: 5,
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