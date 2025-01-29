import {View, Text, TouchableOpacity, ScrollView, Switch} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import Fontisto from 'react-native-vector-icons/Fontisto';

const NotificationsPage = () => {
  const navigation = useNavigation();
  const [isLocal, setIsLocal] = useState(false);
  const toggleSwitch = () => setIsLocal(previousState => !previousState);
  return (
    <>
      <View style={style.main}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name={'arrowleft'} size={30} />
        </TouchableOpacity>
        <Text style={style.heading}>Notifications</Text>
      </View>
      <ScrollView></ScrollView>
      <View style={style.footer}>
        <View style={style.comment}>
          <Fontisto name={'bell'} size={25} />
          <View>
            <Text style={style.textLine1}>Push Notifications</Text>
            <Text>Turn on Notifications to Stay Updated.</Text>
          </View>
        </View>
        <Switch
          trackColor={{false: '#767577', true: '#d5eced'}}
          thumbColor={isLocal ? '#176dcf' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isLocal}
        />
      </View>
    </>
  );
};

export default NotificationsPage;
