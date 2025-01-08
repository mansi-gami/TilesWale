import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DirectoryCard = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.card}>
          <Image style={styles.image} source={require('../../assets/tilesCard.jpg')}/>
        </View>
        <View>
          <Text style={{marginTop: 25,fontSize: 18,fontWeight: 600}}>Akshar ceramic</Text>
          <Text style={{fontSize: 14,color: 'gray'}}>Gandhinagar, Gujarat.</Text>
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

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 430,
    borderColor: '#ddd',
    borderWidth: 1,
    marginHorizontal: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  card: {
    height: 70,
    width: 70,
    borderRadius: 10,
    margin: 15,
    borderColor: '#ddd',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 60,
    width: 50,
  },
  views: {
    flexDirection: 'row',
    height: 30,
    width: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    left: 144,
    top: 10,
    borderTopStartRadius: 10,
    borderBottomStartRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  icon: {
    marginLeft: 2,
  },
 
});
