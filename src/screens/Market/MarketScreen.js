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
  const [selectedBox, setSelectedBox] = useState('Tiles');
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
        {selectedBox === 'Tiles' ? <Card Data={Tiles} category="Tiles" /> : ''}
        {selectedBox === 'SanitaryWare' ? (
          <Card Data={Sanitary} category="SanitaryWare" />
        ) : (
          ''
        )}
        {selectedBox === 'KitchenSink' ? (
          <Card Data={KitchenSink} category="KitchenSink" />
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
