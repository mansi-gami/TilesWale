import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const AdvertisementScreen4 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.skip}
        onPress={() => navigation.navigate('LanguageScreen')}>
        <Text style={styles.skipText}>Skip</Text>
        <MaterialIcons name={'keyboard-arrow-right'} size={20} />
      </TouchableOpacity>
      <View>
        <LinearGradient
          colors={['#e1f2fa', '#f2e7d3', '#dbc6a2']}
          start={{x: 1, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.linear}>
          <View style={styles.detail}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.firstText}>3000+</Text>
              <Text style={styles.secondText}> Verified</Text>
            </View>
            <Text style={styles.secondText}>Manufacturer</Text>
          
          <View style={styles.comment}>
            <Image
              style={styles.tickMark}
              source={require('../../assets/orangeTick.png')}
            />
            <Text style={styles.requirementText}>Free Contact Details</Text>
          </View>
          <View style={styles.comment}>
            <Image
              style={styles.tickMark}
              source={require('../../assets/orangeTick.png')}
            />
            <Text style={styles.requirementText}>Send Direct Inquiries</Text>
          </View>
          <View style={styles.comment}>
            <Image
              style={styles.tickMark}
              source={require('../../assets/orangeTick.png')}
            />
            <Text style={styles.requirementText}>Get Best Price Deals</Text>
          </View>
          <View style={styles.image}>
            <Image
              style={styles.imageSize}
              source={require('../../assets/FourPageImage.png')}
            />
          </View>
          </View>
        </LinearGradient>
      </View>

      <View style={styles.bottomBar}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AdvertisementScreen3')}>
          <MaterialIcons name={'keyboard-arrow-left'} size={30} />
        </TouchableOpacity>

        <View style={styles.paginationContainer}>
          <View style={styles.paginationDot} />
          <View style={styles.paginationDot} />
          <View style={styles.paginationDot} />
          <View style={styles.paginationDotActive} />
          <View style={styles.paginationDot} />
          <View style={styles.paginationDot} />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('AdvertisementScreen5')}>
          <MaterialIcons name={'keyboard-arrow-right'} size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdvertisementScreen4;
