import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

const LoginActivityScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View>
        <Image
          style={styles.bgImage}
          source={require('../../assets/BGDesign.jpg')}
        />
        <Image
          style={styles.bgLogo}
          source={require('../../assets/BGLogo.jpg')}
        />
        <Text style={styles.text}>World's Largest B2B2C Live</Text>
        <Text style={styles.text}>Ceramic Marketplace</Text>
        <View style={styles.content}>
          <View>
            <TouchableOpacity style={styles.round}>
              <Image
                style={styles.gooleIcon}
                source={require('../../assets/googleIcon.jpg')}
              />
            </TouchableOpacity>
            <Text style={styles.txt}>Google</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.round}>
              <Image
                style={styles.gooleIcon}
                source={require('../../assets/phoneIcon.jpg')}
              />
            </TouchableOpacity>
            <Text style={styles.txt}>Mobile</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Splash')}>
          <Text style={styles.withoutLoginText}>Continue without Login</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.withoutLinkText}>By continuing you agree to our</Text>
      <View style={styles.privacyContent}>
        <TouchableOpacity>
          <Text style={styles.linkText}>Privacy Policy</Text>
        </TouchableOpacity>
        <Text style={styles.withoutLinkText1}> and</Text>
        <TouchableOpacity>
          <Text style={styles.linkText}> Terms-Condition</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginActivityScreen;