import {
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './style';

const MoreImage = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const {images} = route.params; // Extract images from route params
  const screenWidth = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState(0);
  const flatlistRef = useRef();

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });

  const renderItem = ({item}) => (
    <View>
      <Image source={item} style={[styles.image, {width: screenWidth}]} />
    </View>
  );

  const handleScroll = event => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.floor(scrollPosition / screenWidth);
    setActiveIndex(index);
  };

  const handleThumbnailPress = index => {
    flatlistRef.current.scrollToIndex({index});
    setActiveIndex(index);
  };

  return (
    <>
      <View>
        <TouchableOpacity
          style={styles.main}
          onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} />
          <Entypo name="share" size={30} />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={images}
          ref={flatlistRef}
          getItemLayout={getItemLayout}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          pagingEnabled
          onScroll={handleScroll}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.smallImageContent}>
        {images.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleThumbnailPress(index)}>
            <Image
              source={item}
              style={[
                styles.smallImage,
                {
                  borderWidth: activeIndex === index ? 1 : 0,
                  borderColor: activeIndex === index ? 'black' : 'transparent',
                },
              ]}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

export default MoreImage;

