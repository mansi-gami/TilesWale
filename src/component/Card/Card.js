import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

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

const styles = StyleSheet.create({
  content: {
    height: 510,
    margin: 10,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  part1: {
    flexDirection: 'row',
  },
  logo: {
    height: 50,
    width: 50,
    borderRadius: 25,
    margin: 15,
  },
  name: {
    marginTop: 10,
    width: 180,
  },
  txt: {
    fontSize: 18,
    fontWeight: 700,
  },
  txt1: {
    fontStyle: 'italic',
  },
  btn: {
    height: 20,
    width: 90,
    backgroundColor: '#5d6063',
    marginTop: 28,
    marginLeft: 60,
    borderRadius: 10,
  },
  btnText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 500,
  },
  part2: {
    flexDirection: 'row',
  },
  shreeimg: {
    height: 250,
    width: 210,
  },
  txtName: {
    marginLeft: 20,
    marginTop: 15,
    fontSize: 22,
    fontWeight: 700,
    overflow: 'hidden',
  },
  part3: {
    flexDirection: 'row',
    width: 310,
  },
  txtSize: {
    marginTop: 5,
    marginLeft: 20,
    color: 'gray',
    fontWeight: 600,
  },
  txtValue: {
    marginLeft: 20,
    color: 'gray',
    fontWeight: 600,
  },
  repeat: {
    height: 25,
    width: 75,
    backgroundColor: '#1659b8',
    marginLeft: 20,
    marginTop: 5,
    borderRadius: 20,
    flexDirection: 'row',
  },
  repeatText: {
    color: '#ffffff',
    textAlign: 'center',
    marginLeft: 3,
  },
  icon: {
    alignSelf: 'center',
    marginLeft: 5,
  },
  time: {
    margin: 20,
  },
  timeText: {
    color: 'gray',
    fontWeight: 800,
  },
  ruppe: {
    color: 'green',
    fontSize: 25,
    marginTop: 10,
    marginLeft: 55,
    fontWeight: 800,
  },
  tax: {
    color: 'green',
    width: 100,
    marginLeft: 55,
  }
});
