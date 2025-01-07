import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import Header from '../../component/Header/Header';
import styles from './style'

const CatalogScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header title={'Catalogue'} />
      <Text>CatalogScreen</Text>
    </ScrollView>
  )
}

export default CatalogScreen; 