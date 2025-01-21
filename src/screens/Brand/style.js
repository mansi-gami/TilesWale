import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        gap: scale(10),
        padding: scale(10),
    },
    heading: {
        fontSize: scale(18),
        fontWeight: 600,
    },
    part1: {
        flexDirection: 'row',
        margin: scale(10),
    },
    part2: {
        flexDirection: 'row',
        margin: scale(10),
    },
      images: {
        height: scale(75),
        width: scale(75),
        borderColor: '#CAD5E2',
        borderWidth: scale(4),
        borderRadius: scale(6),
      },
      texts: {
        width: scale(85),
        fontSize: scale(14),
        overflow: 'hidden',
        fontWeight: 500,
      },
})

export default styles;