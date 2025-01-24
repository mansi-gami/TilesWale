import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
  TouchableOpacity,
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
import {scale} from 'react-native-size-matters';

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
      <View style={{flex: 1, backgroundColor: 'rgba(100, 100, 100, 0.5)'}}>
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
              <View style={styles.content}>
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
              <View style={styles.content}>
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
              style={styles.linear}>
              <Text style={styles.txt}>Adverties & Grow Your Business</Text>
              <Ionicons
                style={styles.icon1}
                name={'chevron-forward'}
                size={30}
              />
            </LinearGradient>
            <View style={styles.mainPart}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons
                  style={styles.icons}
                  name={'heart-outline'}
                  size={25}
                />
                <Text style={styles.contents}>
                  Bookmarked / Favorite / Wishlist
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <SimpleLineIcons
                  style={styles.icons}
                  name={'handbag'}
                  size={25}
                />
                <Text style={styles.contents}>Tile Library</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Entypo style={styles.icons} name={'open-book'} size={25} />
                <Text style={styles.contents}>Catalogues</Text>
              </View>

              <Text style={styles.heading}>My Business</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialCommunityIcons
                  style={styles.icons}
                  name={'account-remove-outline'}
                  size={30}
                />
                <Text style={styles.contents}>Fraud List</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.about}>About TilesWale</Text>
                <Feather
                  style={styles.downarrow}
                  name={'chevron-down'}
                  size={30}
                />
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.about}>Tools</Text>
                <Feather
                  style={styles.downarrow1}
                  name={'chevron-down'}
                  size={30}
                />
              </View>
            </View>

            <View style={styles.logoStyle}>
              <TouchableOpacity style={styles.logoContent}>
                <Image
                  source={require('../../assets/fb.webp')}
                  style={styles.logo}></Image>
              </TouchableOpacity>
              <TouchableOpacity style={styles.logoContent}>
                <Image
                  source={require('../../assets/insta.png')}
                  style={styles.logo}></Image>
              </TouchableOpacity>
              <TouchableOpacity style={styles.logoContent}>
                <Image
                  source={require('../../assets/youtube.jpeg')}
                  style={styles.logo}></Image>
              </TouchableOpacity>
            </View>

            <View style={{margin: 'auto'}}>
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
