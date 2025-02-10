import {View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {scale} from 'react-native-size-matters';
import {Checkbox} from 'react-native-paper';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import style from './style';
import {tileData} from '../../Constant/Constant';
import RadioGroup from 'react-native-radio-buttons-group';
// const tileData = {
//   categories: [
//     {
//       category: 'PGVT & GVT',
//       subOptions: ['Glossy Finish', 'Matt Finish', 'High Gloss'],
//     },
//     {
//       category: 'Digital Wall Tiles',
//       subOptions: ['Kitchen Wall', 'Bathroom Wall', 'Living Room'],
//     },
//     {
//       category: 'Digital Porcelain Tiles',
//       subOptions: ['Matt Finish', 'Polished', 'Rustic Look'],
//     },
//     {
//       category: 'Nano Vitrified Tiles',
//       subOptions: ['Glossy', 'Satin', 'Plain'],
//     },
//     {
//       category: 'Wooden Planks',
//       subOptions: ['Dark Wood', 'Light Wood', 'Rustic Wood'],
//     },
//   ],
//   grades: [
//     {id: 1, grade: 'Premium'},
//     {id: 2, grade: 'Standard'},
//     {id: 3, grade: 'Commerce'},
//     {id: 4, grade: 'Reject'},
//     {id: 5, grade: 'Dead Stock'},
//     {id: 6, grade: 'Diamond Cutting'},
//   ],
//   units: [
//     {id: 1, unit: 'Box'},
//     {id: 2, unit: 'Area'},
//   ],
//   saleTypes: [
//     {id: 1, saleType: 'Regular'},
//     {id: 2, saleType: 'One Time'},
//   ],
//   priceTypes: [
//     {id: 1, priceType: 'Basic Rate'},
//     {id: 2, priceType: 'Tax Paid Rate'},
//   ],
// };

const TilesFilter = () => {
  // const navigation = useNavigation();
  // const [selectedBox, setSelectedBox] = useState('tiles');
  const [selectedGrades, setSelectedGrades] = useState([]);
  const [selectedTiles, setSelectedTiles] = useState({});
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Categories');
  const [selectedSaleType, setSelectedSaleType] = useState([]);
  const [selectedPriceType, setSelectedPriceType] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [selectedRoleType, setSelectedRoleType] = useState([]);

  const toggleCategory = category => {
    setSelectedTiles(prev => {
      const allSelected =
        prev[category]?.length ===
        tileData.categories.find(t => t.category === category).subOptions
          .length;
      return {
        ...prev,
        [category]: allSelected
          ? []
          : tileData.categories.find(t => t.category === category).subOptions,
      };
    });
  };

  const toggleSubOption = (category, subOption) => {
    setSelectedTiles(prev => {
      const selected = prev[category] || [];
      return {
        ...prev,
        [category]: selected.includes(subOption)
          ? selected.filter(item => item !== subOption)
          : [...selected, subOption],
      };
    });
  };

  const toggleGrade = grade => {
    setSelectedGrades(prev =>
      prev.includes(grade)
        ? prev.filter(item => item !== grade)
        : [...prev, grade],
    );
  };

  const toggleUnit = unit => {
    setSelectedUnit(prev =>
      prev.includes(unit)
        ? prev.filter(item => item !== unit)
        : [...prev, unit],
    );
  };

  const toggleSaleType = saleType => {
    setSelectedSaleType(prev =>
      prev.includes(saleType)
        ? prev.filter(item => item !== saleType)
        : [...prev, saleType],
    );
  };

  const togglePriceType = priceType => {
    setSelectedPriceType(prev =>
      prev.includes(priceType)
        ? prev.filter(item => item !== priceType)
        : [...prev, priceType],
    );
  };

  const toggleFeatures = features => {
    setSelectedFeatures(prev =>
      prev.includes(features)
        ? prev.filter(item => item !== features)
        : [...prev, features],
    );
  };

  const toggleLocation = loaction => {
    setSelectedLocation(prev =>
      prev.includes(loaction)
        ? prev.filter(item => item !== loaction)
        : [...prev, loaction],
    );
  };

  const togglePrice = price => {
    setSelectedPrice(prev =>
      prev.includes(price)
        ? prev.filter(item => item !== price)
        : [...prev, price],
    );
  };

  const toggleRoleType = roleType => {
    setSelectedRoleType(prev =>
      prev.includes(roleType)
        ? prev.filter(item => item !== roleType)
        : [...prev, roleType],
    );
  };

  return (
    <>
      {/* <View style={style.main}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name={'arrowleft'} size={30} />
        </TouchableOpacity>
        <Text style={style.heading}>Tiles Filter</Text>
      </View> */}
      {/* <View style={{backgroundColor: '#ffffff'}}>
        <ScrollView style={style.maincontainer}>
          <HorizontalScrollBar
            selectedBox={selectedBox}
            setSelectedBox={setSelectedBox}
          />
        </ScrollView>
      </View> */}
      <View style={{flex: 1, backgroundColor: '#ffffff'}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={style.part1}>
            {[
              'Categories',
              'Grade',
              'Total Units',
              'Sale Type',
              'Price Type',
              'Features / Colors',
              'Role Type',
              'Location',
              'Price',
              'Posted On',
              'Verified User',
              'Surface',
            ].map(item => (
              <TouchableOpacity
                key={item}
                onPress={() => setSelectedCategory(item)}
                style={{
                  backgroundColor:
                    selectedCategory === item ? 'white' : 'transparent',
                  padding: 10,
                  paddingLeft: 0,
                  // margin: scale(10),
                  // borderRadius: 5,
                }}>
                <Text
                  style={{
                    width: scale(100),
                    marginLeft: scale(10),
                    color: selectedCategory === item ? '#34a1eb' : 'black',
                    fontWeight: 800,
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={[
                style.clearBtn,
                {
                  bottom: scale(10),
                  position: 'absolute',
                  marginHorizontal: scale(5),
                  width: '90%',
                },
              ]}>
              <Text>Clear All</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <ScrollView
              style={{backgroundColor: '#ffffff', marginTop: scale(10)}}>
              {selectedCategory === 'Categories' &&
                tileData.categories.map(tile => (
                  <View key={tile.category} style={{marginBottom: 10}}>
                    {/* Main Category */}
                    <TouchableOpacity
                      onPress={() =>
                        setExpandedCategory(
                          expandedCategory === tile.category
                            ? null
                            : tile.category,
                        )
                      }
                      style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Checkbox
                        status={
                          selectedTiles[tile.category]?.length ===
                          tile.subOptions.length
                            ? 'checked'
                            : 'unchecked'
                        }
                        onPress={() => toggleCategory(tile.category)}
                      />
                      <Text style={{flex: 1, fontSize: 16}}>
                        {tile.category}
                      </Text>
                      <FontAwesome6
                        name={
                          expandedCategory === tile.category
                            ? 'angle-up'
                            : 'angle-down'
                        }
                        size={20}
                        color="black"
                      />
                    </TouchableOpacity>

                    {/* Sub Options */}
                    {expandedCategory === tile.category && (
                      <FlatList
                        data={tile.subOptions}
                        keyExtractor={item => item}
                        renderItem={({item}) => (
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              paddingLeft: 20,
                            }}>
                            <Checkbox
                              status={
                                selectedTiles[tile.category]?.includes(item)
                                  ? 'checked'
                                  : 'unchecked'
                              }
                              onPress={() =>
                                toggleSubOption(tile.category, item)
                              }
                            />
                            <Text>{item}</Text>
                          </View>
                        )}
                      />
                    )}
                  </View>
                ))}

              {selectedCategory === 'Grade' && (
                <FlatList
                  data={tileData.grades}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => toggleGrade(item.grade)}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        // padding: 5,
                      }}>
                      <Checkbox
                        status={
                          selectedGrades.includes(item.grade)
                            ? 'checked'
                            : 'unchecked'
                        }
                        onPress={() => toggleGrade(item.grade)}
                      />
                      <Text>{item.grade}</Text>
                    </TouchableOpacity>
                  )}
                />
              )}

              {selectedCategory === 'Total Units' && (
                <FlatList
                  data={tileData.units}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => toggleUnit(item.unit)}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        // padding: 2,
                      }}>
                      <Checkbox
                        status={
                          selectedUnit.includes(item.unit)
                            ? 'checked'
                            : 'unchecked'
                        }
                        onPress={() => toggleUnit(item.unit)}
                      />
                      <Text>{item.unit}</Text>
                    </TouchableOpacity>
                  )}
                />
              )}

              {selectedCategory === 'Sale Type' && (
                <FlatList
                  data={tileData.saleTypes}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => toggleSaleType(item.saleType)}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        // padding: 5,
                      }}>
                      <Checkbox
                        status={
                          selectedSaleType.includes(item.saleType)
                            ? 'checked'
                            : 'unchecked'
                        }
                        onPress={() => toggleSaleType(item.saleType)}
                      />
                      <Text>{item.saleType}</Text>
                    </TouchableOpacity>
                  )}
                />
              )}

              {selectedCategory === 'Price Type' && (
                <FlatList
                  data={tileData.priceTypes}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => togglePriceType(item.priceType)}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        // padding: 2,
                      }}>
                      <Checkbox
                        status={
                          selectedPriceType.includes(item.priceType)
                            ? 'checked'
                            : 'unchecked'
                        }
                        onPress={() => togglePriceType(item.priceType)}
                      />
                      <Text>{item.priceType}</Text>
                    </TouchableOpacity>
                  )}
                />
              )}

              {selectedCategory === 'Features / Colors' && (
                <FlatList
                  data={tileData.features}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => toggleFeatures(item.features)}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        // padding: 2,
                      }}>
                      <Checkbox
                        status={
                          selectedFeatures.includes(item.features)
                            ? 'checked'
                            : 'unchecked'
                        }
                        onPress={() => toggleFeatures(item.features)}
                      />
                      <Text>{item.features}</Text>
                    </TouchableOpacity>
                  )}
                />
              )}

              {selectedCategory === 'Location' && (
                <FlatList
                  data={tileData.Location}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => toggleLocation(item.location)}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        // padding: 2,
                      }}>
                      <Checkbox
                        status={
                          selectedLocation.includes(item.location)
                            ? 'checked'
                            : 'unchecked'
                        }
                        onPress={() => toggleLocation(item.location)}
                      />
                      <Text>{item.location}</Text>
                    </TouchableOpacity>
                  )}
                />
              )}

              {selectedCategory === 'Price' && (
                <FlatList
                  data={tileData.Price}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => togglePrice(item.price)}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        // padding: 2,
                      }}>
                      <Checkbox
                        status={
                          selectedPrice.includes(item.price)
                            ? 'checked'
                            : 'unchecked'
                        }
                        onPress={() => togglePrice(item.price)}
                      />
                      <Text>{item.price}</Text>
                    </TouchableOpacity>
                  )}
                />
              )}

              {selectedCategory === 'Role Type' && (
                <FlatList
                  data={tileData.RoleType}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => togglePrice(item.roleType)}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        // padding: 2,
                      }}>
                      <Checkbox
                        status={
                          selectedRoleType.includes(item.roleType)
                            ? 'checked'
                            : 'unchecked'
                        }
                        onPress={() => toggleRoleType(item.roleType)}
                      />
                      <Text>{item.roleType}</Text>
                    </TouchableOpacity>
                  )}
                />
              )}
            </ScrollView>
            <View
              style={{
                height: scale(38),
                marginBottom: scale(10),
                marginHorizontal: scale(10),
              }}>
              <TouchableOpacity
                style={[
                  style.clearBtn,
                  {
                    bottom: scale(0),
                    position: 'absolute',
                    backgroundColor: '#34a1eb',
                    width: '100%',
                  },
                ]}>
                <Text>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default TilesFilter;
