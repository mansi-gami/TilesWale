import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const AdvertisementScreen3 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.skip} onPress={() => navigation.navigate('LanguageScreen')}>
        <Text style={styles.skipText}>Skip</Text>
        <MaterialIcons name={'keyboard-arrow-right'} size={20} />
      </TouchableOpacity>
      <View style={styles.linearContent}>
        <LinearGradient
          colors={['#e1f2fa', '#f2e7d3', '#dbc6a2']}
          start={{x: 1, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.linear}>
            <View style={styles.detail}>
          <Text style={styles.text}>Daily</Text>

          <Text style={styles.text1}>Verified Leads</Text>
          </View>
          <View style={styles.image}> 
          <Image
            style={styles.imageSize}
            resizeMode= 'contain'
            source={require('../../assets/ThirdPageImage.png')}
          />
          </View>
        </LinearGradient>
      </View>
    
      <View style={styles.bottomBar}>

      <TouchableOpacity onPress={() => navigation.navigate('AdvertisementScreen2')}>
          <MaterialIcons name={'keyboard-arrow-left'} size={30} />
        </TouchableOpacity>

        <View style={styles.paginationContainer}>
          <View style={styles.paginationDot} />
          <View style={styles.paginationDot} />
          <View style={styles.paginationDotActive} />
          <View style={styles.paginationDot} />
          <View style={styles.paginationDot} />
          <View style={styles.paginationDot} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('AdvertisementScreen4')}>
          <MaterialIcons name={'keyboard-arrow-right'} size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdvertisementScreen3;
