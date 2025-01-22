import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation, useRoute} from '@react-navigation/native';
import {scale} from 'react-native-size-matters';

const ProductDetailScreen = ({item}) => {
  const route = useRoute();

  const {productImages} = route.params;
  const screenWidth = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState(0);
  const flatlistRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => {
        const nextIndex =
          prevIndex === productImages.length - 1 ? 0 : prevIndex + 1;
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

  const renderItem = ({item}) => {
    return (
      <View style={{}}>
        <Image
          source={item}
          style={{
            height: scale(155),
            width: screenWidth,
            borderRadius: scale(15),
            marginTop: scale(8),
            resizeMode: 'contain',
            backgroundColor: '#ffffff',
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

  const navigation = useNavigation();
  return (
    <>

      <View style={styles.main}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name={'arrowleft'} size={30} />
        </TouchableOpacity>
        <Text style={styles.heading}>Product Details</Text>
      </View>
      <View>
        <FlatList
          data={productImages}
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
    </>
  );
};

export default ProductDetailScreen;