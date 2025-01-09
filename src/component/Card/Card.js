import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import styles from './style';

const Card = ({Data, category}) => {
  return (
    <>
      {Data?.map((item, index) => (
        <View style={styles.content}>
          <View style={styles.part1}>
            <Image style={styles.logo} source={item.logo} />
            <View style={styles.name}>
              <Text style={styles.txt}>{item.name}</Text>
              <Text>{item.otherName}</Text>
              <Text style={styles.txt1}>{item.location}</Text>
            </View>
            <View style={styles.btn}>
              <Text style={styles.btnText}>{item.salesType}</Text>
            </View>
          </View>
          <View style={styles.part2}>
            <Image style={styles.shreeimg} source={item.image} />
            <Image style={styles.shreeimg} source={item.image1} />
          </View>
          <View style={styles.part3}>
            <View style={{width: 260}}>
              <Text
                numberOfLines={1}
                ellipsizeMode={'tail'}
                style={styles.txtName}>
                {item.type}
              </Text>
              <Text style={styles.txtSize}>{item.size}</Text>
              <Text style={styles.txtValue}>{item.value}</Text>
              {(category === 'tiles' || category === 'sanitaryware' || category === 'kitchenSink') && item.repeat &&(
              <TouchableOpacity style={styles.repeat}>
                <Feather
                  style={styles.icon}
                  name={'repeat'}
                  size={12}
                  color={'#ffffff'}
                />
                <Text style={styles.repeatText}>{item.repeat}</Text>
              </TouchableOpacity>)}
              <View style={styles.time}>
                <Text style={styles.timeText}>{item.time}</Text>
              </View>
            </View>
            <View>
                <Text style={styles.ruppe}>{item.ruppe}</Text>
                <Text numberOfLines={2}
                ellipsizeMode={'tail'} style={styles.tax}>{item.tax}</Text>
            </View>
          </View>
        </View>
      ))}
    </>
  );
};

export default Card;


