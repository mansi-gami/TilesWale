import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import style from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ChatPage = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={style.main}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name={'arrowleft'} size={30} />
        </TouchableOpacity>
        <Text style={style.heading}>Chats</Text>
      </View>
      <ScrollView></ScrollView>
      <TouchableOpacity style={style.btnAddRound}>
        <MaterialCommunityIcons
          name={'account-multiple-plus'}
          size={30}
          color={'#ffffff'}
        />
      </TouchableOpacity>
    </>
  );
};

export default ChatPage;
