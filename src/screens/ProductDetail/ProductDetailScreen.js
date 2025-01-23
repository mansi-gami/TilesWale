import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation, useRoute} from '@react-navigation/native';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import {scale} from 'react-native-size-matters';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProductDetailScreen = ({item}) => {
  const route = useRoute();

  const {
    productImages,
    type,
    rupee,
    tax,
    size,
    time,
    city,
    value,
    repeat,
    description,
    available,
  } = route.params;
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
        <Image source={item} style={[styles.image, {width: screenWidth}]} />
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
      <ScrollView style={styles.mainContainer}>
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
        <View style={styles.type}>
          <View>
            <Text style={styles.typeText}>{type}</Text>
          </View>
          <View style={styles.icon}>
            <View style={styles.iconStyle}>
              <Octicons name={'heart'} size={25} />
            </View>
            <View style={styles.iconStyle}>
              <Feather name={'share-2'} size={25} />
            </View>
          </View>
        </View>
        <View style={styles.rupee}>
          <Text style={styles.rupeeText}>{rupee}</Text>
          <Text style={styles.taxText}>{tax}</Text>
        </View>
        <View>
          <Text style={styles.sizeText}>{size}</Text>
        </View>
        <View>
          <Text style={styles.timeText}>{time}</Text>
        </View>
        <View style={styles.boxContent}>
          <View style={styles.box}>
            <Text style={styles.boxText}>{available}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.title}>Specification</Text>
        </View>
        <View style={styles.tableContent}>
          <View style={styles.table}>
            <View style={[styles.box1, {borderTopLeftRadius: scale(8)}]}>
              <View style={styles.row}>
                <Text style={styles.cellKey}>City</Text>
              </View>
            </View>
            <View style={[styles.box2, {borderTopRightRadius: scale(8)}]}>
              <View style={styles.row}>
                <Text style={styles.cellValue}>{city}</Text>
              </View>
            </View>
          </View>

          <View style={styles.table}>
            <View style={styles.box1}>
              <View style={styles.row}>
                <Text style={styles.cellKey}>Grade</Text>
              </View>
            </View>
            <View style={styles.box2}>
              <View style={styles.row}>
                <Text style={styles.cellValue}>{value}</Text>
              </View>
            </View>
          </View>

          <View style={styles.table}>
            <View style={styles.box1}>
              <View style={styles.row}>
                <Text style={styles.cellKey}>Sales Type</Text>
              </View>
            </View>
            <View style={styles.box2}>
              <View style={styles.row}>
                <Text style={styles.cellValue}>{repeat}</Text>
              </View>
            </View>
          </View>

          <View style={styles.table}>
            <View style={[styles.box1, {borderBottomLeftRadius: scale(8)}]}>
              <View style={styles.row}>
                <Text style={styles.cellKey}>Description</Text>
              </View>
            </View>
            <View style={[styles.box2, {borderBottomRightRadius: scale(8)}]}>
              <View style={styles.row}>
                <Text style={styles.cellValue}>{description}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.reportLine}>
          <MaterialIcons
            name={'report-gmailerrorred'}
            size={25}
            color={'gray'}
          />
          <Text style={styles.reportText}>Report this Selling post</Text>
        </View>
      </ScrollView>
      <View style={styles.iconContent}>
        <View style={styles.content}>
          <View style={styles.phone}>
            <Foundation name={'telephone'} size={40} color={'#1d73b5'} />
          </View>
          <View style={styles.whatsapp}>
            <FontAwesome name={'whatsapp'} size={40} color={'#1d73b5'} />
          </View>
          <View style={styles.chat}>
            <Ionicons name={'chatbox-ellipses'} size={30} color={'#ffffff'} />
            <Text style={styles.chatText}>Chat</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default ProductDetailScreen;
