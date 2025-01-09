import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const AdvertisementScreen1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.skip} onPress={() => navigation.navigate('LanguageScreen')}>
        <Text style={styles.skipText}>Skip</Text>
        <MaterialIcons name={'keyboard-arrow-right'} size={20} />
      </TouchableOpacity>
      <View>
        <LinearGradient
          colors={['#e1f2fa', '#f2e7d3', '#dbc6a2']}
          start={{x: 1, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.linear}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.firstText}>Add</Text>
            <Text style={styles.secondText}>Free</Text>
          </View>

          <Text style={styles.text}>Requirements</Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.tickMark}
              source={require('../../assets/orangeTick.png')}
            />
            <Text style={styles.requirementText}>Verified Sellers and Manufactures</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.tickMark}
              source={require('../../assets/orangeTick.png')}
            />
            <Text style={styles.requirementText}>Find Nearest Sellers & Dealers</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.tickMark}
              source={require('../../assets/orangeTick.png')}
            />
            <Text style={styles.requirementText}>Best Deals Guaranteed</Text>
          </View>
          <Image
            style={styles.Image}
            source={require('../../assets/FirstPageImage.png')}
          />
        </LinearGradient>
      </View>

      <View style={styles.bottomBar}>
        <View style={styles.paginationContainer}>
        {[...Array(6)].map((_, index) => (
            <View
              key={index}
              style={
                index === 0
                  ? styles.paginationDotActive
                  : styles.paginationDot
              }
            />
          ))}
        </View>
        <TouchableOpacity
         style={styles.startButton} onPress={() => navigation.navigate('AdvertisementScreen2')}>
          <Text style={styles.startButtonText}>Start</Text>
          <MaterialIcons name={'keyboard-arrow-right'} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdvertisementScreen1;
