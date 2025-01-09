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
import styles from './style';

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
                style={styles.views}>
                {item.Views}
              </Text>
              <MaterialCommunityIcons
                style={styles.arrowIcon}
                name={'arrow-down-box'}
                size={20}
                color={'#919294'}
              />
              <Text
                style={styles.shareCount}>
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
