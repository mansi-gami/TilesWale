// import {StyleSheet} from 'react-native';
// import {scale} from 'react-native-size-matters';

// const style = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//   },
//   main: {
//     backgroundColor: '#ffffff',
//     flexDirection: 'row',
//     gap: scale(10),
//     padding: scale(10),
//     alignItems: 'center',
//   },
//   heading: {
//     fontSize: scale(18),
//     fontWeight: 600,
//   },
//   part1: {
//     backgroundColor: '#e3e5e6',
//     gap: scale(5),
//     // paddingLeft: scale(10),
//     marginTop: scale(10),
//     paddingTop: scale(10),
//     // justifyContent: 'center',
//     alignItems: 'flex-start',
//   },
//   selectedText: {
//     fontSize: scale(12),
//     fontWeight: 500,
//   },
//   clearBtn: {
//     backgroundColor: '#ffffff',
//     borderColor: '#000000',
//     borderWidth: scale(0.3),
//     borderRadius: scale(8),
//     height: scale(28),
//     width: scale(90),
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   checkBox: {
//     backgroundColor: '#000000',
//   },
// });

// export default style;

import React from 'react';
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
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
});

export default styles;
