import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const BrandScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.main}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <AntDesign name={'arrowleft'} size={30} />
        </TouchableOpacity>

        <Text style={styles.heading}>Brands in Spotlights</Text>
      </View>
      <View style={styles.part1}>
        <TouchableOpacity style={styles.card}>
          <Image
            style={styles.images}
            source={require('../../assets/alaska.jpeg')}
          />
          <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.texts}>
            ALASKA SURFACES LLP
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            style={styles.images}
            source={require('../../assets/coinn.jpeg')}
          />
          <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.texts}>
            Coinn Tiles LLP
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            style={styles.images}
            source={require('../../assets/hawk.webp')}
          />
          <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.texts}>
            Hawk Granito Pvt Ltd.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            style={styles.images}
            source={require('../../assets/liberta.jpg')}
          />
          <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.texts}>
            Liberta Vitrified LLP
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.part2}>
        <TouchableOpacity style={styles.card}>
          <Image
            style={styles.images}
            source={require('../../assets/linum.png')}
          />
          <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.texts}>
            Linum Ceramic
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            style={styles.images}
            source={require('../../assets/millennium.jpeg')}
          />
          <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.texts}>
            Linum Ceramic
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            style={styles.images}
            source={require('../../assets/torino.png')}
          />
          <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.texts}>
            Torino Tiles
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            style={styles.images}
            source={require('../../assets/valenza.png')}
          />
          <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.texts}>
            Valenza Granito
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default BrandScreen;
