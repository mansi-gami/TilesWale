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
import Zocial from 'react-native-vector-icons/Zocial';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// function Store() {
//   return (
//     <ScrollView
//       nestedScrollEnabled={true}
//       contentContainerStyle={{flexGrow: 1}}>
//       <View>
//         <Text>Store Page</Text>
//       </View>
//     </ScrollView>
//   );
// }

function Review({rating}) {
  const ratingsData = [
    {stars: 5, count: 16, color: '#4CAF50'}, // Green
    {stars: 4, count: 10, color: '#8BC34A'}, // Light Green
    {stars: 3, count: 1, color: '#FFC107'}, // Amber
    {stars: 2, count: 1, color: '#FF9800'}, // Orange
    {stars: 1, count: 4, color: '#F44336'}, // Red
  ];

  const totalRatings = 18;

  return (
    <ScrollView
      nestedScrollEnabled={true}
      contentContainerStyle={{flexGrow: 1}}>
      <View style={style.container}>
        {/* Left Section: Average Rating */}
        <View style={style.leftSection}>
          <Text style={style.ratingTextCount}>4.7</Text>
          <View style={style.starsContainer}>
            {[...Array(5)].map((_, index) => (
              <FontAwesome
                key={index}
                name={index < 4 ? 'star' : 'star-half-full'}
                size={20}
                color="#FFC107"
              />
            ))}
          </View>
          <Text style={style.totalRatings}>{totalRatings} Ratings</Text>
        </View>

        {/* Divider */}
        <View style={style.divider}></View>

        {/* Right Section: Rating Distribution */}
        <View style={style.rightSection}>
          {ratingsData.map(({stars, count, color}) => (
            <View key={stars} style={style.ratingRow}>
              <FontAwesome name="star" size={16} color="#000" />
              <Text style={style.ratingNumber}>{stars}</Text>
              <View style={style.progressBarContainer}>
                <View
                  style={[
                    style.progressBar,
                    {
                      backgroundColor: color,
                      width: `${(count / totalRatings) * 100}%`,
                    },
                  ]}
                />
              </View>
              <Text style={style.ratingCount}>{count}</Text>
            </View>
          ))}
        </View>
      </View>
      <View>
        <Text style={style.otherReview}>Other Reviews</Text>
      </View>
    </ScrollView>
  );
}

function Catalogue({
  catalogueImage = [],
  catalogueName = [],
  catalogueSize = [],
  catalogueType = [],
  viewers = [],
  share = [],
}) {
  const imagePairs = [];

  for (let i = 0; i < catalogueImage.length; i += 2) {
    imagePairs.push({
      images: catalogueImage.slice(i, i + 2),
      names: catalogueName.slice(i, i + 2),
      sizes: catalogueSize.slice(i, i + 2),
      types: catalogueType.slice(i, i + 2),
      viewers: viewers.slice(i, i + 2),
      share: share.slice(i, i + 2),
    });
  }
  return (
    <ScrollView
      nestedScrollEnabled={true}
      contentContainerStyle={{flexGrow: 1}}>
      {imagePairs.map((pair, index) => (
        <View style={{flexDirection: 'row'}} key={index}>
          {pair.images.map((image, idx) => (
            <View style={{flex: 1}} key={idx}>
              <TouchableOpacity style={style.card}>
                <Image style={style.catalogueImage} source={image} />
                <Text
                  numberOfLines={1}
                  ellipsizeMode={'tail'}
                  style={style.catalogueName}>
                  {pair.names[idx]}
                </Text>
                <Text
                  numberOfLines={1}
                  ellipsizeMode={'tail'}
                  style={style.catalogueType}>
                  {pair.types[idx]}
                </Text>
                <Text
                  numberOfLines={1}
                  ellipsizeMode={'tail'}
                  style={style.catalogueSize}>
                  {pair.sizes[idx]}
                </Text>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                  <View style={style.bottomColor}>
                    <View style={style.views}>
                      <Ionicons name={'eye'} size={20} color={'#919294'} />
                      <Text style={style.viewsText}>{pair.viewers[idx]}</Text>
                    </View>
                    <View style={style.views}>
                      <MaterialCommunityIcons
                        name={'arrow-down-box'}
                        size={20}
                        color={'#919294'}
                      />
                      <Text style={style.viewsText}>{pair.share[idx]}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

function Contacts({contactImage = [], contactName = []}) {
  return (
    <ScrollView
      nestedScrollEnabled={true}
      contentContainerStyle={{flexGrow: 1}}>
      {contactImage.map((contactImage, index) => (
        <View
          style={[style.specificationCard, {justifyContent: 'space-between'}]}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: scale(10),
            }}>
            <View>
              <Image
                style={{
                  height: scale(40),
                  width: scale(40),
                  borderRadius: scale(20),
                }}
                source={contactImage}
              />
            </View>
            <View>
              <Text
                style={{
                  fontWeight: 700,
                  fontSize: scale(15),
                  // marginRight: scale(40),
                }}>
                {contactName[index]}
              </Text>
            </View>
          </View>
          <View>
            <View style={{flexDirection: 'row', gap: scale(20)}}>
              <TouchableOpacity style={style.iconBG}>
                <Ionicons name={'call'} color={'white'} size={20} />
              </TouchableOpacity>
              <TouchableOpacity style={style.wpIconBG}>
                <FontAwesome name={'whatsapp'} color={'white'} size={20} />
              </TouchableOpacity>
              <TouchableOpacity style={style.emailIconBG}>
                <Zocial name={'email'} color={'white'} size={20} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

function ProductInfo({type = [], size = []}) {
  return (
    <ScrollView
      nestedScrollEnabled={true}
      contentContainerStyle={{flexGrow: 1}}>
      <View
        style={{
          marginTop: scale(15),
          marginHorizontal: scale(10),
        }}>
        <Text style={style.descriptionText}>Tiles' Specifications</Text>
      </View>
      {type.map((type, index) => (
        <View style={style.specificationCard}>
          <View>
            <Text
              style={{fontWeight: 700, width: scale(70), fontSize: scale(12)}}>
              {type}
            </Text>
          </View>
          <View
            style={{
              borderColor: 'gray',
              borderWidth: 0.2,
              height: scale(45),
            }}></View>
          <View>
            {size[index]
              ? size[index]
                  .split(',')
                  .map((s, idx) => <Text key={idx}>{s.trim()}</Text>)
              : 'No size available'}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

function About({about}) {
  return (
    <ScrollView
      nestedScrollEnabled={true}
      contentContainerStyle={{flexGrow: 1}}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: scale(15),
            gap: scale(8),
            alignItems: 'center',
            marginHorizontal: scale(10),
          }}>
          <Text style={style.descriptionText}>Description</Text>
          <View style={style.line}></View>
        </View>
        <Text style={style.aboutText}>{about}</Text>
      </View>
    </ScrollView>
  );
}

const Tab = createMaterialTopTabNavigator();

function BrandTopTab({
  about,
  type,
  size,
  contactImage,
  contactName,
  catalogueImage,
  catalogueName,
  catalogueSize,
  catalogueType,
  viewers,
  share,
  rating,
}) {
  return (
    <Tab.Navigator
      initialRouteName="Review & Rating"
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarActiveTintColor: '#4071ed',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {fontSize: 15, fontWeight: '600', height: 20},
        tabBarStyle: {backgroundColor: 'white'},
      }}>
      {/* <Tab.Screen name="Store" component={Store} /> */}
      <Tab.Screen name="Review & Rating">
        {() => <Review rating={rating} />}
      </Tab.Screen>
      <Tab.Screen name="Catalogue">
        {() => (
          <Catalogue
            catalogueImage={catalogueImage}
            catalogueName={catalogueName}
            catalogueSize={catalogueSize}
            catalogueType={catalogueType}
            viewers={viewers}
            share={share}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Contacts">
        {() => (
          <Contacts contactImage={contactImage} contactName={contactName} />
        )}
      </Tab.Screen>
      <Tab.Screen name="ProductInfo">
        {() => <ProductInfo type={type} size={size} />}
      </Tab.Screen>
      <Tab.Screen name="About">{() => <About about={about} />}</Tab.Screen>
    </Tab.Navigator>
  );
}

const BrandDetailScreen = ({item}) => {
  const [ratingStar, setRatingStar] = useState(0);

  const handleRating = selectedRating => {
    setRatingStar(selectedRating); // Update the rating when a star is pressed
  };

  const route = useRoute();

  const {
    brandImage,
    logoImage,
    name,
    manufacturer,
    rating,
    about,
    type,
    size,
    contactImage,
    contactName,
    catalogueImage,
    catalogueName,
    catalogueSize,
    catalogueType,
    viewers,
    share,
  } = route.params;

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
          <TouchableOpacity>
            <Feather name={'share-2'} size={25} />
          </TouchableOpacity>
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
          {[1, 2, 3, 4, 5].map(starNumber => (
            <TouchableOpacity
              key={starNumber}
              onPress={() => handleRating(starNumber)}>
              <Entypo
                name="star"
                size={35}
                color={starNumber <= ratingStar ? '#FFD700' : '#cbcfd1'} // Gold for filled stars, grey for empty ones
              />
            </TouchableOpacity>
          ))}
        </View>
        <View style={{height: 950}}>
          <BrandTopTab
            about={about}
            type={type}
            size={size}
            contactImage={contactImage}
            contactName={contactName}
            catalogueImage={catalogueImage}
            catalogueName={catalogueName}
            catalogueSize={catalogueSize}
            catalogueType={catalogueType}
            viewers={viewers}
            share={share}
            rating={rating}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default BrandDetailScreen;
