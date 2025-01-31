import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './style';

const Carousel = () => {
  const screenWidth = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
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
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [activeIndex]);

  useEffect(() => {
    const imageToggle = setInterval(() => {
      setImageIndex(prevIndex => (prevIndex === 0 ? 1 : 0)); // Toggle between 0 and 1
    }, 1000); // Change image every 2 seconds

    return () => clearInterval(imageToggle); // Cleanup on unmount
  }, []);

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });

  const carouselData = [
    {
      id: '01',
      color: '#efd5f0',
    },
    {
      id: '02',
      color: '#d5f0db',
    },
    {
      id: '03',
      color: '#f5bfc9',
    },
    {
      id: '04',
      color: '#c0eaed',
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <View
        style={[
          styles.carouselItem,
          {backgroundColor: item.color, width: screenWidth},
        ]}>
        {item.color === '#efd5f0' && (
          <View style={styles.mainContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.carouselText}>GET</Text>
              <Text style={styles.carouselText1}>350+</Text>
              <Text style={styles.boldText}>
                Contracts<Text style={styles.carouselText2}> for the top</Text>{' '}
              </Text>
              <Text style={styles.boldText}>Bathware brands</Text>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.txt}>Reach Out</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Image
                style={styles.image}
                source={
                  imageIndex === 0
                    ? require('../../assets/BathWare.png')
                    : require('../../assets/BathWare2.png')
                }
              />
            </View>
          </View>
        )}
        {item.color === '#d5f0db' && (
          <View style={styles.mainContainer2}>
            <View>
              <Image
                style={styles.image}
                source={
                  imageIndex === 0
                    ? require('../../assets/sanitaryware.png')
                    : require('../../assets/SanitaryWare2.png')
                }
              />
            </View>
            <View style={styles.textContainerRight}>
              <Text style={styles.carouselText}>EXPLORE</Text>
              <Text style={styles.carouselText1}>500+</Text>
              <Text style={styles.boldText}>
                Stunning
                <Text style={styles.carouselText2}> brands of</Text>{' '}
              </Text>
              <Text style={styles.boldText}>SanitaryWare</Text>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.txt}>Connect Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {item.color === '#f5bfc9' && (
          <View style={styles.mainContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.carouselText}>DISCOVER</Text>
              <Text style={styles.carouselText1}>2000+</Text>
              <Text style={styles.carouselText2}>most popular</Text>
              <Text style={styles.boldText}>Tile brands</Text>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.txt}>Reach Out</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Image
                style={styles.image}
                source={
                  imageIndex === 0
                    ? require('../../assets/tiles.png')
                    : require('../../assets/tiles2.png')
                }
              />
            </View>
          </View>
        )}
        {item.color === '#c0eaed' && (
          <View style={styles.mainContainer2}>
            <View>
              <Image
                style={styles.image}
                source={
                  imageIndex === 0
                    ? require('../../assets/kitchenSink.png')
                    : require('../../assets/kitchenSink2.png')
                }
              />
            </View>
            <View style={styles.textContainerRight}>
              <Text style={styles.carouselText}>GET CONNECT WITH</Text>
              <Text style={styles.carouselText1}>450+</Text>
              <Text style={styles.carouselText2}>
                Stylish<Text style={styles.boldText}> Kitchen Sink</Text>{' '}
              </Text>
              <Text style={styles.boldText}>brands</Text>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.txt}>Get in touch</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  };

  const handleScroll = event => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.floor(scrollPosition / screenWidth);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
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
