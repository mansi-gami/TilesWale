import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './style';

const LeadCard = ({Data, category}) => {
  return (
    <>
      {Data?.map((item, index) => (
        <View style={styles.box}>
          <Text style={styles.companyName}>{item.companyName}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.count}>{item.count}</Text>
            {(category === 'sanitaryware' || category === 'kitchenSink') && (
              <View style={styles.repeat}>
                <Text style={styles.num}>{item.repeatNum}</Text>
                <Text style={styles.numText}>{item.repeat}</Text>
              </View>
            )}
          </View>
          <Text style={styles.size}>{item.size}</Text>
          <Text style={styles.date}>{item.date}</Text>

          <View style={styles.content}>
            <Image style={styles.profile} source={item.profile} />
            <View style={styles.desc}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.location}>{item.location}</Text>
            </View>
            <View style={styles.btn}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <Text style={styles.btnText}>{item.btn}</Text>
              </ScrollView>
            </View>
          </View>
        </View>
      ))}
    </>
  );
};

export default LeadCard;

