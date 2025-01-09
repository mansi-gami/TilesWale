import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const AdvertisementScreen6 = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.skip} onPress={() => navigation.navigate('LanguageScreen')}>
        <Text style={styles.skipText}>Done</Text>
      </TouchableOpacity>
      <View>
        <LinearGradient
          colors={['#e1f2fa', '#f2e7d3', '#dbc6a2']}
          start={{x: 1, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.linear}>
             <Text style={styles.text}>Tiles Store With</Text>

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.secondText}>15000+</Text>
            <Text style={styles.firstText}>collection</Text>
          </View>
         
          <Image
            style={styles.Image}
            source={require('../../assets/SixPageImage.png')}
          />
        </LinearGradient>
      </View>
    
      <View style={styles.bottomBar}>

      <TouchableOpacity onPress={() => navigation.navigate('AdvertisementScreen5')}>
          <MaterialIcons name={'keyboard-arrow-left'} size={30} />
        </TouchableOpacity>

        <View style={styles.paginationContainer}>
          <View style={styles.paginationDot} />
          <View style={styles.paginationDot} />
          <View style={styles.paginationDot} />
          <View style={styles.paginationDot} />
          <View style={styles.paginationDot} />
          <View style={styles.paginationDotActive} />
        </View>
        <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => navigation.navigate('LanguageScreen')}>
          <Text style={styles.start} >Start</Text>
          <MaterialIcons name={'keyboard-arrow-right'} size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdvertisementScreen6;
