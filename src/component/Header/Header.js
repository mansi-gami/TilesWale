import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
} from 'react-native';
import SidebarScreen from '../../screens/Sidebar/SidebarScreen';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

const Header = ({
  title,
  onPress,
  leftIconSource,
  rightIconSource,
  containerStyle,
  textStyle,
  iconStyle,
}) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const shouldShowLocation = title !== 'Home' && title !== 'Directory';
  const shouldShowSearch = title !== 'Home';
  const navigation = useNavigation();
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        style={[styles.button, {flexDirection: 'row'}]}
        onPress={() => setShowModal(true)}>
        {leftIconSource && (
          <Image source={leftIconSource} style={[styles.icon, iconStyle]} />
        )}
      </TouchableOpacity>
      <Text style={[styles.title, textStyle]}>{title}</Text>
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
          <Image
            style={styles.flag}
            source={require('../../assets/flag.webp')}
          />
          <Text>INDIA</Text>
          <Feather name={'chevron-down'} size={18} />
        </View>
      )}
      {shouldShowSearch && (
        <TouchableOpacity onPress={() => navigation.navigate('SearchPage')}>
          <Fontisto name={'search'} size={20} />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        onPress={() => navigation.navigate('NotificationsPage')}>
        <Fontisto name={'bell'} size={20} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ChatPage')}>
        <AntDesign name={'message1'} size={20} />
      </TouchableOpacity>
    </View>
  );
};

Header.defaultProps = {
  title: 'Home',
  leftIconSource: require('../../assets/menu.png'),
  onPress: () => {},
  containerStyle: {},
  textStyle: {},
  iconStyle: {},
};

export default Header;
