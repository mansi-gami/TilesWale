import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchPage = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={style.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name={'arrowleft'} size={30} />
        </TouchableOpacity>
        <TextInput
          placeholder="Ex: Search 'Ceramic Tiles"
          style={style.input}
        />
        <View style={style.icon}>
          <TouchableOpacity>
            <MaterialIcons
              style={style.voiceIcon}
              name={'keyboard-voice'}
              size={25}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name={'camera-outline'} size={25} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.line}></View>
    </>
  );
};

export default SearchPage;
