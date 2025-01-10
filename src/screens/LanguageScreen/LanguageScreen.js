import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

const LanguageScreen = () => {
  const navigation = useNavigation();
  const [selectedLanguage, setSelectedLanguage] = useState('english');

  const languages = [
    {
      key: 'english',
      image: require('../../assets/EnglandFlag.webp'),
      firstText: 'English',
      secondText: 'English',
    },
    {
      key: 'hindi',
      image: require('../../assets/IndiaFlag.jpg'),
      firstText: 'हिन्दी',
      secondText: 'Hindi',
    },
    {
      key: 'arabic',
      image: require('../../assets/ArabicFlag.png'),
      firstText: 'عربي',
      secondText: 'Arabic',
    },
    {
      key: 'spanish',
      image: require('../../assets/SpanishFlag.webp'),
      firstText: 'Española',
      secondText: 'Spanish',
    },
    {
      key: 'russian',
      image: require('../../assets/RussianFlag.jpeg'),
      firstText: 'россия',
      secondText: 'Russian',
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Choose Language</Text>
      <View style={styles.border}></View>
      {languages.map(language => (
        <TouchableOpacity
          key={language.key}
          onPress={() => setSelectedLanguage(language.key)}
          style={[
            styles.content,
            {
              backgroundColor:
                selectedLanguage === language.key ? '#dde5ed' : 'white',
            },
          ]}>
          <Image style={styles.image} source={language.image} />
          <View>
            <Text style={styles.firstText}>{language.firstText}</Text>
            <Text style={styles.secondText}>{language.secondText}</Text>
          </View>
          {selectedLanguage === language.key && (
            <Image
              style={styles.blueTick}
              source={require('../../assets/blueTick.png')}
            />
          )}
        </TouchableOpacity>
      ))}
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('LoginActivityScreen')}>
          <Text style={styles.btnText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LanguageScreen;
