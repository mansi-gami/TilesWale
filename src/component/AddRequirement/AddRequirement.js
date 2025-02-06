import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';
import {
  adhesive,
  bathWare2,
  kitchenSink,
  sanitaryWare2,
  tile,
} from '../../Constant/image';
import {useNavigation} from '@react-navigation/native';

const AddRequirement = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={style.content}>
        <Text style={style.headingText}>Post Your Requirement</Text>
        <Text style={style.titleText}>
          Get thousands of sellers with unbeatable prices
        </Text>
        <TouchableOpacity
          style={style.tilesBox}
          onPress={() =>
            navigation.navigate('TilesRequirementForm', {
              product: 'Ceramic Tiles',
            })
          }>
          <Text style={style.name}>Ceramic Tiles</Text>
          <Image style={style.image} source={tile} />
        </TouchableOpacity>
        <View style={style.boxPart}>
          <TouchableOpacity
            style={style.box}
            onPress={() =>
              navigation.navigate('TilesRequirementForm', {
                product: 'Sanitary Ware',
              })
            }>
            <Text style={style.name1}>Sanitary Ware</Text>
            <Image style={style.image1} source={sanitaryWare2} />
          </TouchableOpacity>
          <TouchableOpacity
            style={style.box}
            onPress={() =>
              navigation.navigate('TilesRequirementForm', {
                product: 'Kitchen Sink',
              })
            }>
            <Text style={style.name1}>Kitchen Sink</Text>
            <Image style={style.image1} source={kitchenSink} />
          </TouchableOpacity>
        </View>
        <View style={style.boxPart}>
          <TouchableOpacity
            style={style.box}
            onPress={() =>
              navigation.navigate('TilesRequirementForm', {product: 'BathWare'})
            }>
            <Text style={style.name1}>BathWare</Text>
            <Image style={style.image1} source={bathWare2} />
          </TouchableOpacity>
          <TouchableOpacity
            style={style.box}
            onPress={() =>
              navigation.navigate('TilesRequirementForm', {
                product: 'Adhesive & Chemical',
              })
            }>
            <Text style={style.name1}>Adhesive,Chemical & More</Text>
            <Image style={style.image1} source={adhesive} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default AddRequirement;
