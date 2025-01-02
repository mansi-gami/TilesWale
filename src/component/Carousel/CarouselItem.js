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
    }, 3000); // Change image every 2 seconds

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
          <View style={{flexDirection: 'row'}}>
            <View style={styles.textContainer}>
              <Text style={styles.carouselText}>GET</Text>
              <Text style={styles.carouselText1}>350+</Text>
              <Text style={styles.boldText}>
                Contracts<Text style={styles.carouselText2}> for the top</Text>{' '}
              </Text>
              <Text style={styles.carouselText3}>Bathware brands</Text>
              <View style={styles.btn}>
                <Text style={styles.txt}>Reach Out</Text>
              </View>
            </View>
            <View style={styles.imageContainer}>
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
          <View style={{flexDirection: 'row'}}>
            <View style={styles.imageContainerRight}>
              <Image
                style={styles.imageRight}
                source={
                  imageIndex === 0
                    ? require('../../assets/sanitaryware.png')
                    : require('../../assets/SanitaryWare2.png')
                }
              />
            </View>
            <View style={styles.textContainerRight}>
              <Text style={styles.carouselTextRight}>EXPLORE</Text>
              <Text style={styles.carouselText1Right}>500+</Text>
              <Text style={styles.boldTextRight}>
                Stunning
                <Text style={styles.carouselText2Right}> brands of</Text>{' '}
              </Text>
              <Text style={styles.carouselText3Right}>SanitaryWare</Text>
              <View style={styles.btnRight}>
                <Text style={styles.txtRight}>Connect Now</Text>
              </View>
            </View>
          </View>
        )}
        {item.color === '#f5bfc9' && (
          <View style={{flexDirection: 'row'}}>
            <View style={styles.textContainer}>
              <Text style={styles.carouselText}>DISCOVER</Text>
              <Text style={styles.carouselText1}>2000+</Text>
              <Text style={styles.carouselText2}>most popular</Text>
              <Text style={styles.carouselText3}>Tile brands</Text>
              <View style={styles.btn}>
                <Text style={styles.txt}>Reach Out</Text>
              </View>
            </View>
            <View style={styles.imageContainer}>
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
          <View style={{flexDirection: 'row'}}>
            <View style={styles.imageContainerRight}>
              <Image
                style={styles.imageRight}
                source={
                  imageIndex === 0
                    ? require('../../assets/kitchenSink.png')
                    : require('../../assets/kitchenSink2.png')
                }
              />
            </View>
            <View style={styles.textContainerRight1}>
              <Text style={styles.carouselTextRight1}>GET CONNECT WITH</Text>
              <Text style={styles.carouselText1Right1}>450+</Text>
              <Text style={styles.carouselText2Right1}>
                Stylish<Text style={styles.boldTextRight}> Kitchen Sink</Text>{' '}
              </Text>
              <Text style={styles.carouselText3Right1}>brands</Text>
              <View style={styles.btnRight1}>
                <Text style={styles.txtRight1}>Get in touch</Text>
              </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselItem: {
    height: 200,
    borderRadius: 20,
    marginTop: 10,
    position: 'relative',
  },
  textContainer: {
    flexDirection: 'column', // Stack the text vertically
    justifyContent: 'left', // Align text to the top
    alignItems: 'flex-start', // Align text to the left
    padding: 10,
    // paddingBottom: 0,
    position: 'absolute', // Optional: keep the text centered even if you add images
  },
  carouselText: {
    fontSize: 25,
    fontWeight: 200,
    marginTop: 5,
    marginLeft: 15,
  },
  carouselText1: {
    fontSize: 35,
    fontWeight: 800,
    marginLeft: 15,
  },
  carouselText2: {
    fontSize: 18,
    fontWeight: 'normal', // Regular weight for "Contracts"
    marginLeft: 15,
  },
  boldText: {
    fontWeight: 700,
    fontSize: 18, // Bold styling for the second part of the text
    marginLeft: 15,
  },
  carouselText3: {
    fontWeight: 700,
    fontSize: 18, // Bold styling for the second part of the text
    marginLeft: 15,
  },
  btn: {
    backgroundColor: '#ffffff',
    height: 20,
    width: 80,
    marginLeft: 15,
    marginTop: 10,
    borderRadius: 15,
    color: '#000000',
  },
  txt: {
    fontSize: 12,
    fontWeight: 500,
    textAlign: 'center',
  },
  image: {
    height: 150,
    width: 150,
    marginLeft: 250,
    marginTop: 30,
  },
  textContainerRight: {
    flexDirection: 'column', // Stack the text vertically
    justifyContent: 'right', // Align text to the top
    alignItems: 'flex-end', // Align text to the left
    padding: 20,
  },
  carouselTextRight: {
    fontSize: 25,
    fontWeight: 200,
    marginLeft: 110,
  },
  carouselText1Right: {
    fontSize: 35,
    fontWeight: 800,
  },
  carouselText2Right: {
    fontSize: 18,
    fontWeight: 'normal', // Regular weight for "Contracts"
    marginLeft: 15,
  },
  boldTextRight: {
    fontWeight: 700,
    fontSize: 18, // Bold styling for the second part of the text
    marginLeft: 15,
  },
  carouselText3Right: {
    fontWeight: 700,
    fontSize: 18, // Bold styling for the second part of the text
    marginLeft: 15,
  },
  btnRight: {
    backgroundColor: '#ffffff',
    height: 20,
    width: 100,
    marginLeft: 15,
    marginTop: 10,
    borderRadius: 15,
    color: '#000000',
  },
  txtRight: {
    fontSize: 12,
    fontWeight: 500,
    textAlign: 'center',
  },
  imageRight: {
    height: 150,
    width: 150,
    marginLeft: 30,
    marginTop: 30,
  },
  textContainerRight1: {
    marginLeft: 50,
    marginTop: 30,
  },
  carouselTextRight1: {
    fontSize: 20,
    fontWeight: 200,
  },
  carouselText1Right1: {
    marginLeft: 110,
    fontSize: 35,
    fontWeight: 800,
  },
  carouselText2Right1: {
    marginLeft: 40,
  },
  carouselText3Right1: {
    fontWeight: 700,
    fontSize: 18,
    marginLeft: 130,
  },
  btnRight1: {
    backgroundColor: '#ffffff',
    height: 20,
    width: 100,
    marginLeft: 90,
    marginTop: 10,
    borderRadius: 15,
    color: '#000000',
  },
  txtRight1: {
    fontSize: 12,
    fontWeight: 500,
    textAlign: 'center',
  },
});
