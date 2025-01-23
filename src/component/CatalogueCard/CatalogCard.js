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
          <View>
            <ScrollView horizontal={true} style={styles.horizontalScroll}>
              <View style={styles.card}>
                <Image
                  style={
                    category === 'Recently Added Catalogues'
                      ? styles.image
                      : styles.image1
                  }
                  source={
                    category === 'Recently Added Catalogues'
                      ? item.image
                      : item.image1
                  }
                />
                {showSponsored && (
                  <View style={styles.sponsored}>
                    <Text style={styles.sponsoredText}>Sponsored</Text>
                  </View>
                )}
                <View style={styles.detail}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode={'tail'}
                    style={styles.name}>
                    {item.name}
                  </Text>
                  <Text>{item.type}</Text>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode={'tail'}
                    style={styles.size}>
                    {item.size}
                  </Text>
                </View>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                  <View style={styles.bottomColor}>
                    <View style={styles.views}>
                      <Ionicons name={'eye'} size={20} color={'#919294'} />
                      <Text style={styles.viewsText}>{item.Views}</Text>
                    </View>
                    <View style={styles.views}>
                      <MaterialCommunityIcons
                        name={'arrow-down-box'}
                        size={20}
                        color={'#919294'}
                      />
                      <Text style={styles.viewsText}>{item.share}</Text>
                    </View>
                  </View>
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
