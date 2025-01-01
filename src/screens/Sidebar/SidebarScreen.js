import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';
import React, {useEffect} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import styles from './styles';

const width = Dimensions.get('window');

const SidebarScreen = ({showModal, setShowModal, toggleModal}) => {
  const translateX = useSharedValue(-width);

  useEffect(() => {
    if (showModal) {
      translateX.value = withTiming(0, {duration: 300}); // Animate to the screen.
    }
  }, [showModal]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}],
  }));

  if (!showModal) {
    return null;
  }
  return (
    <>
      <View style={{flex:1, backgroundColor:'rgba(100, 100, 100, 0.5)'}}>
        <Pressable
          style={[StyleSheet.absoluteFillObject]}
          onPress={toggleModal}>
          <Animated.View style={[styles.modalContent, animatedStyle]}>
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={require('../../assets/email.jpg')}></Image>
              <View>
                <Text style={styles.text1}>Mansi Gami</Text>
                <Text style={styles.text2}>For Home / Personal Use</Text>
                <Text style={styles.text2}>Gandhinagar, Gujarat, India</Text>
              </View>
            </View>
            <View style={styles.mainContainer}>
              <View style={styles.content1}>
                <MaterialCommunityIcons
                  style={styles.icon}
                  name={'transit-connection-variant'}
                  size={25}
                />
                <View>
                  <Text style={styles.count}>20</Text>
                  <Text>Connects</Text>
                </View>
              </View>
              <View style={styles.content2}>
                <Entypo style={styles.icon} name={'link'} size={25} />
                <View>
                  <Text style={styles.count}>5</Text>
                  <Text>Leads</Text>
                </View>
              </View>
            </View>
            <LinearGradient
              colors={['#ffffff', '#afd3e3', '#9dcce0']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={{
                flex: 0,
                height: 50,
                width: 305,
                margin: 25,
                marginTop: 0,
                borderRadius: 10,
                flexDirection: 'row',
              }}>
              <Text style={styles.txt}>Adverties & Grow Your Business</Text>
              <Ionicons
                style={styles.icon1}
                name={'chevron-forward'}
                size={30}
              />
            </LinearGradient>
            <View style={{flexDirection: 'row'}}>
              <Ionicons style={styles.icons} name={'heart-outline'} size={25} />
              <Text style={styles.contents}>
                Bookmarked / Favorite / Wishlist
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <SimpleLineIcons
                style={styles.icons}
                name={'handbag'}
                size={25}
              />
              <Text style={styles.contents}>Tile Library</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Entypo style={styles.icons} name={'open-book'} size={25} />
              <Text style={styles.contents}>Catalogues</Text>
            </View>
            <Text style={styles.heading}>My Business</Text>
            <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons
                style={styles.icons}
                name={'account-remove-outline'}
                size={30}
              />
              <Text style={styles.contents}>Fraud List</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.about}>About TilesWale</Text>
              <Feather
                style={styles.downarrow}
                name={'chevron-down'}
                size={30}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.about}>Tools</Text>
              <Feather
                style={styles.downarrow1}
                name={'chevron-down'}
                size={30}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.logoContent}>
                <Image
                  source={require('../../assets/fb.webp')}
                  style={styles.logo}></Image>
              </View>
              <View style={styles.logoContent}>
                <Image
                  source={require('../../assets/insta.png')}
                  style={styles.logo}></Image>
              </View>
              <View style={styles.logoContent}>
                <Image
                  source={require('../../assets/youtube.jpeg')}
                  style={styles.logo}></Image>
              </View>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={styles.copyright}>TilesWale ©2024</Text>
              <Text style={styles.copyright}>(Version 2.2.9)</Text>
            </View>
          </Animated.View>
        </Pressable>
      </View>
    </>
  );
};

export default SidebarScreen;

