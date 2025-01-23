import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';

const DirectoryCard = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={{flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
            <View style={styles.card}>
              <Image
                style={styles.image}
                source={require('../../assets/tilesCard.jpg')}
              />
            </View>
            <View style={styles.detail}>
              <Text style={styles.name}>Akshar ceramic</Text>
              <Text style={styles.location}>Gandhinagar, Gujarat.</Text>
            </View>
          </View>
          <View style={styles.views}>
            <Ionicons name={'eye'} size={20} color={'#919294'} />
            <Text>20</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DirectoryCard;
