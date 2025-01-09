import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';

const DirectoryCard = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.card}>
          <Image style={styles.image} source={require('../../assets/tilesCard.jpg')}/>
        </View>
        <View>
          <Text style={styles.name}>Akshar ceramic</Text>
          <Text style={styles.location}>Gandhinagar, Gujarat.</Text>
        </View>
        <View style={styles.views}>
            <Ionicons style={styles.icon} name={'eye'} size={20} color={'#919294'}/>
            <Text style={styles.count}>20</Text>
        </View>
      </View>
    </View>
  );
};

export default DirectoryCard;


