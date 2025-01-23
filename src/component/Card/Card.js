import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {TilesCatalogue} from '../../Constant/Constant';
import {valenza} from '../../Constant/image';

const Card = ({Data, category}) => {
  const navigation = useNavigation();
  return (
    <>
      {Data?.map((item, index) => (
        <TouchableOpacity
          style={styles.content}
          onPress={() =>
            navigation.navigate('ProductDetailScreen', {
              category,
              productImages: [item.image, item.image1],
              type: item.type,
              rupee: item.rupee,
              tax: item.tax,
              size: item.size,
              time: item.time,
              city: item.city,
              grade: item.value,
              repeat: item.repeat,
              value: item.value,
              description: item.description,
              available: item.available,
            })
          }>
          <View style={styles.part1}>
            <View style={styles.subPart1}>
              <Image style={styles.logo} source={item.logo} />
              <View style={styles.name}>
                <Text style={styles.txt}>{item.name}</Text>
                <Text>{item.otherName}</Text>
                <Text style={styles.txt1}>{item.location}</Text>
              </View>
            </View>
            <View style={styles.subPart2}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>{item.salesType}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.part2}
            onPress={() =>
              navigation.navigate('MoreImage', {
                category,
                images: [item.image, item.image1],
              })
            }>
            <Image style={styles.shreeimg} source={item.image} />
            <Image style={styles.shreeimg} source={item.image1} />
          </TouchableOpacity>
          <View style={styles.part3}>
            <View style={styles.detail}>
              <Text
                numberOfLines={1}
                ellipsizeMode={'tail'}
                style={styles.txtName}>
                {item.type}
              </Text>
              <Text style={styles.txtSize}>{item.size}</Text>
              <Text style={styles.txtValue}>{item.value}</Text>
              {(category === 'tiles' ||
                category === 'sanitaryware' ||
                category === 'kitchenSink') &&
                item.repeat && (
                  <TouchableOpacity style={styles.repeat}>
                    <Feather
                      style={styles.icon}
                      name={'repeat'}
                      size={12}
                      color={'#ffffff'}
                    />
                    <Text style={styles.repeatText}>{item.repeat}</Text>
                  </TouchableOpacity>
                )}
              <View style={styles.time}>
                <Text style={styles.timeText}>{item.time}</Text>
              </View>
            </View>
            <View style={styles.price}>
              <Text style={styles.ruppe}>{item.rupee}</Text>
              <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.tax}>
                {item.tax}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default Card;
