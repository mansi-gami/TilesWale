import {
  View,
  Text, 
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../../component/Header/Header';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from '../../component/Carousel/Carousel';
import {Dropdown} from 'react-native-element-dropdown';
import Textarea from 'react-native-textarea';
import styles from './styles';
import CarouselItem from '../../component/CarouselItem/CarouselItem';
import { scale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

const data = [
  {label: 'Tiles', value: '1'},
  {label: 'Sanitary Ware', value: '2'},
  {label: 'Kitchen Sink', value: '3'},
  {label: 'Bath Fitting & Accessories', value: '4'},
  {label: 'Faucets', value: '5'},
  {label: 'Showers', value: '6'},
  {label: 'Bath Tub', value: '7'},
  {label: 'Cistern & Seat Cover', value: '8'},
  {label: 'Allied Products', value: '9'},
  {label: 'Mirror', value: '10'},
  {label: 'Adhesive & Chemicals', value: '11'},
  {label: 'Tiles Display Stand', value: '12'},
  {label: 'Roofing Tiles,Machine Tools & Lighting', value: '13'},
  {label: 'Tiles Accessories', value: '14'},
  {label: 'WPC (Wood Polymer Composite)', value: '15'},
  {label: 'SPC (Stone Polymer Composite)', value: '16'},
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

const Size = [
  {label: '200 x 600 mm (08 x 24 inch)', value: '1'},
  {label: '200 x 1200 mm (08 x 48 inch)', value: '2'},
  {label: '300 x 1200 mm (12 x 48 inch)', value: '3'},
  {label: '150 x 900 mm (06 x 36 inch)', value: '4'},
  {label: '200 x 1000 mm (08 x 40 inch)', value: '5'},
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

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectSize, setSelectSize] = useState(null);
  const [selectUnit, setSelectUnit] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showRequirementsButton, setShowRequirementsButton] = useState(true);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);

  const [placeholder, setPlaceholder] = useState('Hello');

  const placeholders = [
    'Search for Tiles',
    'Search for Sanitary Ware',
    'Search for Kitchen Sink',
    'Serach for Bathware',
    'Search for Chemical & Adhesive',
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % placeholders.length; // Cycle through the placeholders
      setPlaceholder(placeholders[index]); // Update the placeholder text
    }, 1000); // Change every 2.5 seconds
    return () => clearInterval(interval);
  }, []);
 
  const handleScroll = event => {
    const contentHeight = event.nativeEvent.contentSize.height;
    const scrollY = event.nativeEvent.contentOffset.y;

    setScrollPosition(scrollY); // Update the current scroll position

    // Check if scrolling up or down
    if (scrollY > prevScrollPosition) {
      // Scrolling down: Show "+ Requirements"
      setShowRequirementsButton(true);
    } else if (scrollY < prevScrollPosition) {
      // Scrolling up: Show only "+"
      setShowRequirementsButton(false);
    }

    // Update the previous scroll position
    setPrevScrollPosition(scrollY);
  };

  return (
    <>
      <ScrollView
        style={styles.container}
        onScroll={handleScroll}
        showsVerticalScrollIndicator={false}>
        <Header title={'Home'} />
        <View style={styles.mainInput}>
          <TextInput style={styles.textInput} placeholder={placeholder} />
          <Fontisto style={styles.search} name={'search'} size={20} />
          <MaterialIcons
            style={styles.voiceIcon}
            name={'keyboard-voice'}
            size={25}
          />
        </View>
        <LinearGradient
          colors={['#afd3e3', '#94eba4', '#c9f5d1']}
          start={{x: 0, y: 1.0}}
          end={{x: 1, y: 1}}
          style={styles.linear}>
          <Image
            source={require('../../assets/locationIcon.png')}
            style={styles.LocationIcon}
          />
          <Text style={styles.locationtxt}>Add Location for Local Search</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>
              Share Location
            </Text>
          </TouchableOpacity>
        </LinearGradient>
        <Carousel />
        <View style={{flexDirection: 'row', gap: scale(125)}}>
          <Text style={styles.brand}>Brands in Spotlight</Text>
          <TouchableOpacity onPress={()=> navigation.navigate('Brand')}>
            <Text style={styles.link}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.card}>
            <Image
              style={styles.images}
              source={require('../../assets/alaska.jpeg')}
            />
            <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.texts}>
              ALASKA SURFACES LLP
            </Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.images}
              source={require('../../assets/coinn.jpeg')}
            />
            <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.texts}>
              Coinn Tiles LLP
            </Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.images}
              source={require('../../assets/hawk.webp')}
            />
            <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.texts}>
              Hawk Granito Pvt Ltd.
            </Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.images}
              source={require('../../assets/liberta.jpg')}
            />
            <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.texts}>
              Liberta Vitrified LLP
            </Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.images}
              source={require('../../assets/linum.png')}
            />
            <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.texts}>
              Linum Ceramic
            </Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.images}
              source={require('../../assets/millennium.jpeg')}
            />
            <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.texts}>
              Linum Ceramic
            </Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.images}
              source={require('../../assets/torino.png')}
            />
            <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.texts}>
              Torino Tiles
            </Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.images}
              source={require('../../assets/valenza.png')}
            />
            <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.texts}>
              Valenza Granito
            </Text>
          </View>
        </ScrollView>
        <View style={styles.box}>
          <Text style={styles.categories}>Explore by Categories</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <LinearGradient
              colors={['#ffffff', '#f5edc4']}
              start={{x: 1, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.linearCard}>
              <Text style={styles.title}>Tiles</Text>
              <Image
                style={styles.img}
                source={require('../../assets/tiles.png')}
              />
            </LinearGradient>
            <LinearGradient
              colors={['#ffffff', '#f5edc4']}
              start={{x: 1, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.linearCard}>
              <Text style={styles.title}>Sanitary ware</Text>
              <Image
                style={styles.img}
                source={require('../../assets/sanitaryware.png')}
              />
            </LinearGradient>
            <LinearGradient
              colors={['#ffffff', '#f5edc4']}
              start={{x: 1, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.linearCard}>
              <Text style={styles.title}>Kitchen Sink</Text>
              <Image
                style={styles.img}
                source={require('../../assets/kitchenSink.png')}
              />
            </LinearGradient>
            <LinearGradient
              colors={['#ffffff', '#f5edc4']}
              start={{x: 1, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.linearCard}>
              <Text style={styles.title}>Bathware</Text>
              <Image
                style={styles.img}
                source={require('../../assets/BathWare.png')}
              />
            </LinearGradient>
            <LinearGradient
              colors={['#ffffff', '#f5edc4']}
              start={{x: 1, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.linearCard}>
              <Text style={styles.title}>Adhesive</Text>
              <Image
                style={styles.img}
                source={require('../../assets/Adhesive.png')}
              />
            </LinearGradient>
          </ScrollView>
        </View>
        <View style={styles.form}>
          <Text style={styles.heading}>Get Best Priced Quotations</Text>
          <Text style={styles.para}>
            Submit your inquiries, we will see the rest!
          </Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            placeholder="Select Category For"
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
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            placeholder="Select Category"
            data={Category}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            searchPlaceholder="Search..."
            selectedCategory={selectedCategory}
            onChange={item => {
              setSelectedCategory(item.selectedCategory);
            }}
          />

          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            placeholder="Select Size"
            data={Size}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            searchPlaceholder="Search..."
            selectSize={selectSize}
            onChange={item => {
              setSelectSize(item.selectSize);
            }}
          />
          <View style={{flexDirection: 'row'}}>
            <TextInput placeholder="Enter quantity" style={styles.input} />
            <Dropdown
              style={styles.dropdown1}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              placeholder="Select Unit"
              data={Unit}
              maxHeight={300}
              labelField="label"
              valueField="value"
              selectUnit={selectUnit}
              onChange={item => {
                setSelectUnit(item.selectUnit);
              }}
            />
          </View>
          <Textarea
            containerStyle={styles.textareaContainer}
            style={styles.textarea}
            maxLength={500}
            placeholder={'Describe Your Inquiry...'}
            placeholderTextColor={'#000000'}
            underlineColorAndroid={'transparent'}
          />
          <TouchableOpacity>
            <Text style={styles.btn}>Get Verified Manufacturers</Text>
          </TouchableOpacity>
        </View>
        <CarouselItem />
        <View style={styles.blankView}></View>
      </ScrollView>
      <TouchableOpacity
        style={showRequirementsButton ? styles.btnAddRound : styles.btnadd}>
        <Text style={styles.btnaddText}>
          {showRequirementsButton ? '+' : '+  Requirements'}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default HomeScreen;
