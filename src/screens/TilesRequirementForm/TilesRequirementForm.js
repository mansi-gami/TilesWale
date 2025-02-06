import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import {Dropdown} from 'react-native-element-dropdown';
import {scale} from 'react-native-size-matters';
import {launchImageLibrary} from 'react-native-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Textarea from 'react-native-textarea';

const data = [
  {label: 'Rajkot', value: '1'},
  {label: 'Gandhinagar', value: '2'},
  {label: 'Ahmedabad', value: '3'},
  {label: 'Morbi', value: '4'},
  {label: 'Puna', value: '5'},
  {label: 'Delhi', value: '6'},
  {label: 'Junagadh', value: '7'},
  {label: 'Jamnagar', value: '8'},
];

const Grade = [
  {label: 'Premium', value: '1'},
  {label: 'Standard', value: '2'},
  {label: 'Commerce', value: '3'},
  {label: 'Reject', value: '4'},
  {label: 'Dead Stock', value: '5'},
  {label: 'Diamond Cutting', value: '6'},
];

const Category = [
  {label: 'PGVT & GVT', value: '1'},
  {label: 'Digital Wall Tiles', value: '2'},
  {label: 'Full body Vitrified Tiles', value: '3'},
  {label: 'Border, Decorative & Poster tiles', value: '4'},
  {label: 'High Depth Elevation Tiles', value: '5'},
  {label: 'Step and Riser / Strips', value: '6'},
  {label: 'Subway & Mosaic Tiles', value: '7'},
  {label: 'Nano Vitrified Tiles', value: '8'},
  {label: 'Wooden Planks', value: '9'},
  {label: 'Ordibary wall Tiles', value: '10'},
  {label: 'Parking Tiles (Ivory Terracotta)', value: '11'},
  {label: 'Porcelain Slab', value: '12'},
  {label: 'Digital Porcelain Tiles', value: '13'},
  {label: 'Double Charged Vitrified Tiles', value: '14'},
  {label: 'Digital Parking Tiles', value: '15'},
  {label: 'Floor (porcelain body) Tiles', value: '16'},
  {label: 'Granite,Stone & Quartz', value: '17'},
];

const Surface = [
  {label: 'Glossy', value: '1'},
  {label: 'Matt', value: '2'},
  {label: 'Satin', value: '3'},
  {label: 'Sugar', value: '4'},
  {label: 'Polished', value: '5'},
  {label: 'Rustic', value: '6'},
  {label: 'Bookmatch', value: '7'},
  {label: 'Carving', value: '8'},
  {label: 'High Glossy', value: '9'},
  {label: 'Metallic', value: '10'},
  {label: 'Glint', value: '11'},
  {label: 'Silk', value: '12'},
  {label: 'Wood', value: '13'},
  {label: 'Galicha', value: '14'},
  {label: 'Marble', value: '15'},
  {label: 'Wood', value: '16'},
  {label: 'Galicha', value: '17'},
  {label: 'Marble', value: '18'},
];

const Unit = [
  {label: 'Boxes', value: '1'},
  {label: 'Sq. Ft.', value: '2'},
  {label: 'Sq. Mtr.', value: '3'},
  {label: 'Ton', value: '4'},
  {label: 'Pieces', value: '5'},
  {label: 'Container', value: '6'},
  {label: 'Pallets', value: '7'},
];

const TilesRequirementForm = ({route}) => {
  const navigation = useNavigation();
  const {product} = route.params;
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [imageUri, setImageUri] = useState(null);

  const pickImage = () => {
    let options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, response => {
      if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  return (
    <>
      <View style={{flex: 1, backgroundColor: '#ffffff'}}>
        <View style={style.main}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <AntDesign name={'arrowleft'} size={30} />
          </TouchableOpacity>
          <Text style={style.heading}>{product} Requirement</Text>
        </View>
        <View
          style={{
            backgroundColor: '#000000',
            height: scale(0.2),
            width: scale(450),
          }}></View>
        <Dropdown
          style={style.dropdown}
          placeholderStyle={style.placeholderStyle}
          selectedTextStyle={style.selectedTextStyle}
          inputSearchStyle={style.inputSearchStyle}
          iconStyle={style.iconStyle}
          placeholder="Select City"
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          searchPlaceholder="Search..."
          selectedValue={selectedValue}
          onChange={item => {
            setSelectedValue(item.selectedValue);
          }}
        />
        <View style={{flexDirection: 'row'}}>
          {(product === 'Ceramic Tiles' || product === 'Sanitary Ware') && (
            <Dropdown
              style={[style.dropdown, {width: scale(155)}]}
              placeholderStyle={style.placeholderStyle}
              selectedTextStyle={style.selectedTextStyle}
              inputSearchStyle={style.inputSearchStyle}
              iconStyle={style.iconStyle}
              placeholder="Select Grade"
              data={Grade}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              searchPlaceholder="Search..."
              selectedGrade={selectedGrade}
              onChange={item => {
                setSelectedGrade(item.selectedGrade);
              }}
            />
          )}

          <Dropdown
            style={[
              style.dropdown,
              {
                width:
                  product === 'Kitchen Sink' ||
                  product === 'BathWare' ||
                  product === 'Adhesive & Chemical'
                    ? scale(330)
                    : scale(155),
              },
            ]}
            placeholderStyle={style.placeholderStyle}
            selectedTextStyle={style.selectedTextStyle}
            inputSearchStyle={style.inputSearchStyle}
            iconStyle={style.iconStyle}
            placeholder="Select Category"
            data={Category}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            searchPlaceholder="Search..."
            selectedValue={selectedValue}
            onChange={item => {
              setSelectedValue(item.selectedValue);
            }}
          />
        </View>
        {product === 'Ceramic Tiles' && (
          <Dropdown
            style={style.dropdown}
            placeholderStyle={style.placeholderStyle}
            selectedTextStyle={style.selectedTextStyle}
            inputSearchStyle={style.inputSearchStyle}
            iconStyle={style.iconStyle}
            placeholder="Select Surface Or Series (Optional)"
            data={Surface}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            searchPlaceholder="Search..."
            selectedValue={selectedValue}
            onChange={item => {
              setSelectedValue(item.selectedValue);
            }}
          />
        )}
        <View style={{flexDirection: 'row'}}>
          <Dropdown
            style={[style.dropdown, {width: scale(155)}]}
            placeholderStyle={style.placeholderStyle}
            selectedTextStyle={style.selectedTextStyle}
            inputSearchStyle={style.inputSearchStyle}
            iconStyle={style.iconStyle}
            placeholder="Select Unit"
            data={Unit}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            searchPlaceholder="Search..."
            selectedGrade={selectedGrade}
            onChange={item => {
              setSelectedGrade(item.selectedGrade);
            }}
          />
          <TextInput placeholder="Quantity" style={style.input} />
        </View>
        <View style={style.imageBox}>
          <TouchableOpacity onPress={pickImage} style={style.box}>
            <MaterialCommunityIcons name={'camera-plus'} size={25} />
            <Text style={style.imageBoxText}>
              Upload Sample Images (Optional)
            </Text>
          </TouchableOpacity>

          {imageUri && (
            <Image
              source={{uri: imageUri}}
              style={{width: 100, height: 100, marginTop: 10}}
            />
          )}
        </View>

        <Textarea
          containerStyle={style.textareaContainer}
          maxLength={500}
          placeholder={'Describe Your Inquiry...'}
          placeholderTextColor={'#000000'}
          underlineColorAndroid={'transparent'}
        />
      </View>
      <View style={{backgroundColor: '#ffffff'}}>
        <TouchableOpacity style={style.postBtn}>
          <Text style={style.btnText}>Post Requirement</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default TilesRequirementForm;
