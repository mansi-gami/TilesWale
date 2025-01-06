import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';

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

const styles = StyleSheet.create({
  box: {
    height: 225,
    width: 425,
    borderColor: '#d7d9db',
    borderWidth: 2,
    borderRadius: 15,
    margin: 12,
  },
  companyName: {
    fontSize: 25,
    fontWeight: 500,
    margin: 10,
    marginBottom: 0,
  },
  count: {
    fontSize: 20,
    color: 'green',
    fontWeight: 600,
    marginLeft: 10,
  },
  size: {
    fontSize: 17,
    marginLeft: 10,
    color: '#878c91',
  },
  date: {
    fontSize: 15,
    marginLeft: 10,
    color: '#878c91',
  },
  content: {
    backgroundColor: '#d5e4f5',
    marginTop: 20,
    height: 87,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    flexDirection: 'row',
  },
  profile: {
    height: 60,
    width: 60,
    borderRadius: 30,
    margin: 10,
  },
  desc: {
    width: 130,
  },
  name: {
    fontSize: 20,
    marginTop: 15,
  },
  location: {
    fontStyle: 'italic',
    color: '#878c91',
  },
  btn: {
    backgroundColor: '#87888a',
    height: 23,
    width: 100,
    borderRadius: 20,
    marginTop: 30,
    marginLeft: 100,
  },
  btnText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 500,
    textAlign: 'center',
    marginLeft: 4,
    marginRight: 4,
  },
  repeat: {
    backgroundColor: 'blue',
    height: 25,
    width: 80,
    marginLeft: 15,

    borderRadius: 20,
    flexDirection: 'row',
  },
  num: {
    backgroundColor: 'yellow',
    height: 15,
    width: 15,
    borderRadius: 7,
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 800,
    margin: 5,
  },
  numText: {
    color: '#ffffff',
    fontSize: 12,
    alignSelf: 'center',
    fontWeight: 700,
  },
});
