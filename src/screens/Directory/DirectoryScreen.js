import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../component/Header/Header'
import styles from './style';

const DirectoryScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header title={'Directory'} />
      <Text>DirectoryScreen</Text>
    </ScrollView>
  );
};

export default DirectoryScreen;