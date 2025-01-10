import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Header from '../../component/Header/Header';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {Dropdown} from 'react-native-element-dropdown';
import DirectoryCard from '../../component/DirectoryCard/DirectoryCard';

const DirectoryType = [
  {label: 'All', value: '1'},
  {label: 'Verified', value: '2'},
  {label: 'Unlocked', value: '3'},
  {label: 'New Arrival', value: '4'},
  {label: 'Most Popular', value: '5'},
];

const DirectoryScreen = () => {
  const [selectDirectoryType, setSelectDirectoryType] = useState(null);
  return (
    <ScrollView style={styles.container}>
      <Header title={'Directory'} />
      <View style={styles.border}></View>
      <View style={styles.mainContent}>
        <View style={styles.loactionContent}>
          <View style={styles.location}>
            <Ionicons name={'location-outline'} size={30} />
            <Text style={styles.locationText}>Gandhinagar</Text>
          </View>
        </View>
        <Dropdown
          style={styles.dropdown1}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          placeholder="All"
          data={DirectoryType}
          maxHeight={300}
          labelField="label"
          valueField="value"
          selectUnit={selectDirectoryType}
          onChange={item => {
            setSelectDirectoryType(item.selectDirectoryType);
          }}
        />
      </View>
      <LinearGradient
        colors={['#afd3e3', '#94eba4', '#c9f5d1']}
        start={{x: 0, y: 1.0}}
        end={{x: 1, y: 1}}
        style={styles.linear}>
        <View style={styles.locationContent}>
          <Image
            source={require('../../assets/locationIcon.png')}
            style={styles.LocationIcon}
          />
          <Text style={styles.locationtxt}>Add Location for Local Country</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>Use Current Location</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <View style={styles.detail}>
        <Text style={styles.retailerCount}>24</Text>
        <Text style={styles.retailerText}>
          Retailer found in Gandhinagar City
        </Text>
      </View>
      <DirectoryCard />
    </ScrollView>
  );
};

export default DirectoryScreen;
