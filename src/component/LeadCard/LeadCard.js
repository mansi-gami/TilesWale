import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './style';

const LeadCard = ({Data, category}) => {
  return (
    <>
      {Data?.map((item, index) => (
        <View style={styles.box}>
          <View style={styles.content}>
            <Text style={styles.companyName}>{item.companyName}</Text>
            <View style={styles.part}>
              <Text style={styles.count}>{item.count}</Text>
              {(category === 'sanitaryware' || category === 'kitchenSink') && (
                <View style={styles.repeat}>
                  <View style={styles.design}>
                    <Text style={styles.num}>{item.repeatNum}</Text>
                    <Text style={styles.numText}>{item.repeat}</Text>
                  </View>
                </View>
              )}
            </View>
            <Text style={styles.size}>{item.size}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
          <View style={styles.content1}>
            <Image style={styles.profile} source={item.profile} />
            <View>
              <View style={styles.desc}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.location}>{item.location}</Text>
              </View>
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
