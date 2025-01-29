import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from '../../component/Header/Header';
import styles from './style';
import HorizontalScrollBar from '../../navigation/HorizontalScrollBar/HorizontalScrollBar';
import Card from '../../component/Card/Card';
import {
  Adhesive,
  Bathware,
  KitchenSink,
  Sanitary,
  Tiles,
} from '../../Constant/Constant';

const MarketScreen = () => {
  const [selectedBox, setSelectedBox] = useState('tiles');
  return (
    <>
      <View>
        <Header title={'Market'} />
      </View>
      <ScrollView style={styles.maincontainer}>
        <HorizontalScrollBar
          selectedBox={selectedBox}
          setSelectedBox={setSelectedBox}
        />
        {selectedBox === 'tiles' ? <Card Data={Tiles} category="tiles" /> : ''}
        {selectedBox === 'sanitaryware' ? (
          <Card Data={Sanitary} category="sanitaryware" />
        ) : (
          ''
        )}
        {selectedBox === 'kitchenSink' ? (
          <Card Data={KitchenSink} category="kitchenSink" />
        ) : (
          ''
        )}
        {selectedBox === 'BathWare' ? <Card Data={Bathware} /> : ''}
        {selectedBox === 'Adhesive' ? <Card Data={Adhesive} /> : ''}
      </ScrollView>
    </>
  );
};

export default MarketScreen;
