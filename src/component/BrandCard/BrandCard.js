import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import style from './style';

const BrandCard = ({Data, category}) => {
  const navigation = useNavigation();
  return (
    <>
      {Data?.map((item, index) => (
        <TouchableOpacity
          onPress={() =>
            navigation.push('BrandDetailScreen', {
              category,
              brandImage: [item.image, item.image1],
              logoImage: item.logo,
              name: item.name,
              manufacturer: item.manufacturer,
              rating: item.rating,
              about: item.about,
              type: item.type,
              size: item.size,
              contactImage: item.contactImage,
              contactName: item.contactName,
              catalogueImage: item.catalogueImage,
              catalogueName: item.catalogueName,
              catalogueSize: item.catalogueSize,
              catalogueType: item.catalogueType,
              viewers: item.viewers,
              share: item.share,
            })
          }
          style={style.card}>
          <Image style={style.images} source={item.logo} />
          <Text numberOfLines={1} ellipsizeMode={'tail'} style={style.texts}>
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default BrandCard;

// import {
//   View,
//   Text,
//   ScrollView,
//   FlatList,
//   Dimensions,
//   Image,
// } from 'react-native';
// import React, {useEffect, useRef, useState} from 'react';
// import style from './style';
// import {scale} from 'react-native-size-matters';
// import {LinumCeramic} from '../../Constant/Constant';

// const BrandCard = () => {
//   const screenWidth = Dimensions.get('window').width;
//   const [activeIndex, setActiveIndex] = useState(0);
//   const flatlistRef = useRef();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex(prevIndex => {
//         const nextIndex =
//           prevIndex === LinumCeramic.length - 1 ? 0 : prevIndex + 1;
//         flatlistRef.current.scrollToOffset({
//           offset: nextIndex * screenWidth,
//           animated: true,
//         });
//         return nextIndex;
//       });
//     }, 3000); // Change image every 2 seconds

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, [activeIndex]);

//   const getItemLayout = (data, index) => ({
//     length: screenWidth,
//     offset: screenWidth * index,
//     index: index,
//   });

//   const renderItem = ({item, index}) => {
//     return (
//       <View>
//         <Image
//           source={item.image}
//           style={{
//             height: scale(155),
//             width: screenWidth,
//             borderRadius: scale(15),
//             marginTop: scale(8),
//           }}
//         />
//       </View>
//     );
//   };

//   const handleScroll = event => {
//     const scrollPosition = event.nativeEvent.contentOffset.x;
//     const index = Math.floor(scrollPosition / screenWidth);
//     setActiveIndex(index);
//   };

//   return (
//     <ScrollView
//       style={style.mainContainer}
//       showsVerticalScrollIndicator={false}>
//       <View>
//         <FlatList
//           data={LinumCeramic}
//           ref={flatlistRef}
//           getItemLayout={getItemLayout}
//           renderItem={renderItem}
//           keyExtractor={item => item.id}
//           horizontal={true}
//           pagingEnabled={true}
//           onScroll={handleScroll}
//           showsHorizontalScrollIndicator={false}
//         />
//       </View>
//     </ScrollView>
//   );
// };

// export default BrandCard;
