import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

const Carousel = () => {
  const screenWidth = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState(0);
  const flatlistRef = useRef();

  //Auto Scroll

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => {
        const nextIndex =
          prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1;
        flatlistRef.current.scrollToOffset({
          offset: nextIndex * screenWidth,
          animated: true,
        });
        return nextIndex;
      });
    }, 3000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [activeIndex]);

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });

  const carouselData = [
    {
      id: '01',
      image: require('../../assets/img1.jpg'),
    },
    {
      id: '02',
      image: require('../../assets/img2.webp'),
    },
    {
      id: '03',
      image: require('../../assets/img3.webp'),
    },
    {
      id: '04',
      image: require('../../assets/img4.jpg'),
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <View>
        <Image
          source={item.image}
          style={{
            height: 200,
            width: screenWidth,
            borderRadius: 20,
            marginTop: 10,
          }}
        />
      </View>
    );
  };

  const handleScroll = event => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.floor(scrollPosition / screenWidth);
    setActiveIndex(index);
  };

  return (
    <View>
      <FlatList
        data={carouselData}
        ref={flatlistRef}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        pagingEnabled={true}
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
export default Carousel;
