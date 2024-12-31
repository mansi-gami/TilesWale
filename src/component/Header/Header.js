import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Modal } from 'react-native';
import SidebarScreen from '../../screens/Sidebar/SidebarScreen';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from  'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Header = ({ title, onPress, leftIconSource, rightIconSource, containerStyle, textStyle, iconStyle }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const shouldShowLocation = title !== 'Home' && title !== 'Directory';
  const shouldShowSearch = title !== 'Home';
    return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity 
        style={[styles.button, {flexDirection: 'row'}]} 
        onPress={() => setShowModal(true)}
      >
        {leftIconSource && (
          <Image source={leftIconSource} style={[styles.icon, iconStyle]} />
        )}</TouchableOpacity><Text style={[styles.title, textStyle]}>{title}</Text>
        <Modal
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}>
        <SidebarScreen
          showModal={showModal}
          setShowModal={setShowModal}
          toggleModal={toggleModal}
        />    
      </Modal>
      {shouldShowLocation && (
      <View style={styles.location}>
        <Image style={styles.flag} source={require('../../assets/flag.webp')}/>
        <Text style={styles.india}>INDIA</Text>
        <Feather style={styles.downarrow1} name={'chevron-down'} size={18} />
      </View>
      )}
      {shouldShowSearch && (
      <View>
        <Fontisto name={'search'} size={20}/>
      </View>
      )}
      <Fontisto name={'bell'} size={20}/>
      <AntDesign name={'message1'} size={20}/>
    </View>
  );
};

Header.defaultProps = {
  title: 'Home',
  leftIconSource: require('../../assets/menu.png'),
  onPress: () => {},
  containerStyle: {},
  textStyle: {},
  iconStyle: {}
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    gap: 20,
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    width: 30,
    height: 30,
  },
  location: {
    height: 25,
    width: 90,
    backgroundColor: '#dce0dd',
    
    borderRadius: 20,
    flexDirection: 'row',
     
  },
  flag: {
    height: 16,
    width: 16,
    borderRadius: 8,
    marginVertical: 4,
    marginLeft: 6,
  },
  india: {
   textAlignVertical: 'center',
   marginLeft: 7,
  },
  downarrow1: {
    textAlignVertical: 'center',
    marginLeft: 4,
  },
});

export default Header;
