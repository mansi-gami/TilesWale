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
        bottom: 230,
        alignSelf: 'center',
      },
      tickMark: {
        height: 15,
        width: 15,
        marginLeft: 30,
        marginTop: 10,
        marginRight: 5,
      },
      firstText: {
        fontSize: 40,
        marginTop: 20,
        marginLeft: 30,
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
        marginLeft: 120,
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
      startButton: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        backgroundColor: "transparent",
        flexDirection: 'row',
      },
      startButtonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
      },
})

export default styles;