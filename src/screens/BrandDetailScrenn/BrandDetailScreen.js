/* eslint-disable no-undef */
import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import style from './Style';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {scale} from 'react-native-size-matters';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

function Store() {
  return (
    <ScrollView
      nestedScrollEnabled={true}
      contentContainerStyle={{flexGrow: 1}}>
      <View>
        <Text>Store Page</Text>
      </View>
    </ScrollView>
  );
}

function Review() {
  return (
    <ScrollView
      nestedScrollEnabled={true}
      contentContainerStyle={{flexGrow: 1}}>
      <View>
        <Text>Review Page</Text>
      </View>
    </ScrollView>
  );
}

function Contacts() {
  return (
    <ScrollView
      nestedScrollEnabled={true}
      contentContainerStyle={{flexGrow: 1}}>
      <View>
        <Text>Contacts Page</Text>
      </View>
    </ScrollView>
  );
}

const Tab = createMaterialTopTabNavigator();

function BrandTopTab() {
  return (
    <Tab.Navigator
      initialRouteName="Store"
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarActiveTintColor: '#4071ed',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {fontSize: 20, fontWeight: '600', height: 30},
        tabBarStyle: {backgroundColor: 'white'},
      }}>
      <Tab.Screen name="Store" component={Store} />
      <Tab.Screen name="Review" component={Review} />
      <Tab.Screen name="Contacts" component={Contacts} />
    </Tab.Navigator>
  );
}

const BrandDetailScreen = ({item}) => {
  const route = useRoute();

  const {brandImage, logoImage, name, manufacturer, rating} = route.params;

  const screenWidth = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState(0);
  // const [showDetails, setShowDetails] = useState(true);
  const flatlistRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => {
        const nextIndex =
          prevIndex === brandImage.length - 1 ? 0 : prevIndex + 1;
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
        <Image source={item} style={[style.image, {width: screenWidth}]} />
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
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={{flexGrow: 1}}
        style={style.mainContainer}
        showsVerticalScrollIndicator={false}>
        <View>
          <FlatList
            data={brandImage}
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
        <View style={style.detail}>
          <View style={style.detailDisplay}>
            <View>
              <Image source={logoImage} style={style.logoImg} />
            </View>
            <View style={style.nameContent}>
              <View>
                <Text style={style.nameText}>{name}</Text>
              </View>
              <View style={style.content}>
                <Text style={style.manufacturerText}>{manufacturer}</Text>
                <Text style={style.ratingText}>{rating}</Text>
              </View>
              <View style={style.verified}>
                <Text style={style.verifiedText}>Verified</Text>
                <Text style={style.sponsoredText}>Sponsored</Text>
              </View>
            </View>
          </View>
          <View>
            <Feather name={'share-2'} size={25} />
          </View>
        </View>
        <View style={style.Icon}>
          <View style={style.iconContent}>
            <TouchableOpacity>
              <View style={style.activeIcon}>
                <Foundation name={'telephone'} size={25} color={'#ffffff'} />
              </View>
            </TouchableOpacity>
            <Text>Call</Text>
          </View>
          <View style={style.iconContent}>
            <TouchableOpacity>
              <View style={style.notActiveIcon}>
                <FontAwesome name={'whatsapp'} size={25} />
              </View>
            </TouchableOpacity>
            <Text>Whatsapp</Text>
          </View>
          <View style={style.iconContent}>
            <TouchableOpacity>
              <View style={style.notActiveIcon}>
                <Fontisto name={'email'} size={25} />
              </View>
            </TouchableOpacity>
            <Text>Email</Text>
          </View>
          <View style={style.iconContent}>
            <TouchableOpacity>
              <View style={style.notActiveIcon}>
                <MaterialIcons name={'web'} size={25} />
              </View>
            </TouchableOpacity>
            <Text>Web</Text>
          </View>
          <View style={style.iconContent}>
            <TouchableOpacity>
              <View style={style.notActiveIcon}>
                <Ionicons name={'location-outline'} size={25} />
              </View>
            </TouchableOpacity>
            <Text>Location</Text>
          </View>
        </View>
        <View style={style.rateContent}>
          <Text style={style.rateText}>Rate this company</Text>
          <TouchableOpacity>
            <Entypo name={'star'} size={35} color={'#cbcfd1'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name={'star'} size={35} color={'#cbcfd1'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name={'star'} size={35} color={'#cbcfd1'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name={'star'} size={35} color={'#cbcfd1'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name={'star'} size={35} color={'#cbcfd1'} />
          </TouchableOpacity>
        </View>
        <View style={{height: 950}}>
          <BrandTopTab />
        </View>
      </ScrollView>
      {/* <BrandDetailTab /> */}
    </>
  );
};

export default BrandDetailScreen;
