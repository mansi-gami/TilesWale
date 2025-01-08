import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function CatalogCard({Data, category, showSponsored}) {
    
  return (
    <>
    {Data?.map((item, index) => (
    <ScrollView style={styles.container}>
      <View >
        <ScrollView horizontal={true} style={{flexDirection: 'row'}}>
          <View style={styles.card}>
            <Image
              style={category === 'Recently Added Catalogues'
                ? styles.image
                : styles.image1}
              source={category === 'Recently Added Catalogues' ? item.image : item.image1}
            />
             {showSponsored && (
             <View style={styles.sponsored}>
              <Text style={{color: '#ffffff'}}>Sponsored</Text>
            </View>
            )}
            <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.name}>
              {item.name}
            </Text>
            <Text style={{paddingLeft: 10}}>{item.type}</Text>
            <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.size}>
             {item.size}
            </Text>
            <View style={styles.bottomColor}>
              <Ionicons
                style={styles.icon}
                name={'eye'}
                size={20}
                color={'#919294'}
              />
              <Text
                style={{
                  color: 'gray',
                  fontSize: 18,
                  marginTop: 5,
                  marginLeft: 8,
                }}>
                {item.Views}
              </Text>
              <MaterialCommunityIcons
                style={styles.arrowIcon}
                name={'arrow-down-box'}
                size={20}
                color={'#919294'}
              />
              <Text
                style={{
                  color: 'gray',
                  fontSize: 18,
                  marginTop: 5,
                  marginLeft: 8,
                }}>
                {item.share}
              </Text>
            </View>
          </View>
        </ScrollView>
        </View>
    </ScrollView>
    ))}
    </>
  );
}

export default CatalogCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  card: {
    height: 280,
    width: 220,
    borderColor: '#ddd',
    borderWidth: 1,
    margin: 15,
    borderRadius: 15,
  },
  image: {
    height: 150,
    width: 220,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  size: {
    width: 210,
    fontSize: 16,
    overflow: 'hidden',
    color: 'gray',
    paddingLeft: 10,
  },
  name: {
    width: 190,
    fontSize: 16,
    overflow: 'hidden',
    fontWeight: 500,
    paddingLeft: 10,
    paddingTop: 10,
  },
  bottomColor: {
    backgroundColor: '#e6e8ed',
    height: 37,
    marginTop: 20,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 30,
    marginTop: 8,
  },
  arrowIcon: {
    marginTop: 8,
    marginLeft: 70,
  },
  sponsored: {
    position: 'absolute',
    backgroundColor: '#000000',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopLeftRadius: 15,
    width: 100,
  },
  image1: {
    height: 150,
    width: 210,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  }
});
