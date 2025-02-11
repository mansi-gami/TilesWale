import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import {scale} from 'react-native-size-matters';
import {BathwareData, KitchenSinkData} from '../../Constant/Constant';
import {Checkbox, RadioButton} from 'react-native-paper';

const BathWareFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState('Type');
  const [selectedType, setSelectedType] = useState([]);
  const [selectedUnit, setSelectedUnit] = useState([]);
  const [selectedSaleType, setSelectedSaleType] = useState([]);
  const [selectedPriceType, setSelectedPriceType] = useState([]);
  const [selectedRoleType, setSelectedRoleType] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [selectedPostOn, setSelectedPostOn] = useState([]);
  const [selectedVerified, setSelectedVerified] = useState([]);

  const toggleType = Type => {
    setSelectedType(prev =>
      prev.includes(Type)
        ? prev.filter(item => item !== Type)
        : [...prev, Type],
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

  const toggleRoleType = roleType => {
    setSelectedRoleType(prev =>
      prev.includes(roleType)
        ? prev.filter(item => item !== roleType)
        : [...prev, roleType],
    );
  };

  const toggleLocation = location => {
    setSelectedLocation(prev =>
      prev.includes(location)
        ? prev.filter(item => item !== location)
        : [...prev, location],
    );
  };

  const togglePrice = price => {
    setSelectedPrice(prev =>
      prev.includes(price)
        ? prev.filter(item => item !== price)
        : [...prev, price],
    );
  };

  return (
    <>
      <View style={{flex: 1, backgroundColor: '#ffffff'}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={style.part1}>
            {[
              'Type',
              'Total Units',
              'Sale Type',
              'Price Type',
              'Role Type',
              'Location',
              'Price',
              'Posted On',
              'Verified User',
            ].map(item => (
              <TouchableOpacity
                key={item}
                onPress={() => setSelectedCategory(item)}
                style={{
                  backgroundColor:
                    selectedCategory === item ? 'white' : 'transparent',
                  padding: 10,
                  paddingLeft: 0,
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
              style={{
                backgroundColor: '#ffffff',
                marginTop: scale(10),
              }}>
              {selectedCategory === 'Type' && (
                <FlatList
                  data={BathwareData.Type}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => toggleType(item.Type)}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        // padding: 5,
                      }}>
                      <Checkbox
                        status={
                          selectedType.includes(item.Type)
                            ? 'checked'
                            : 'unchecked'
                        }
                        onPress={() => toggleType(item.Type)}
                      />
                      <Text>{item.name}</Text>
                    </TouchableOpacity>
                  )}
                />
              )}

              {selectedCategory === 'Total Units' && (
                <FlatList
                  data={BathwareData.units}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => toggleUnit(item.unit)}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
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
                  data={BathwareData.saleTypes}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => toggleSaleType(item.saleType)}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
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
                  data={BathwareData.priceTypes}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => togglePriceType(item.priceType)}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
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

              {selectedCategory === 'Role Type' && (
                <FlatList
                  data={BathwareData.RoleType}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => togglePrice(item.roleType)}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
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

              {selectedCategory === 'Location' && (
                <FlatList
                  data={BathwareData.Location}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => toggleLocation(item.location)}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
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
                  data={BathwareData.Price}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => togglePrice(item.price)}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
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

              {selectedCategory === 'Posted On' && (
                <RadioButton.Group
                  onValueChange={newValue => setSelectedPostOn(newValue)}
                  value={selectedPostOn}>
                  <FlatList
                    data={BathwareData.PostedOn}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        onPress={() => setSelectedPostOn(item.postOn)}
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <RadioButton value={item.postOn} />
                        <Text>{item.postOn}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </RadioButton.Group>
              )}

              {selectedCategory === 'Verified User' && (
                <RadioButton.Group
                  onValueChange={newValue => setSelectedVerified(newValue)}
                  value={selectedVerified}>
                  <FlatList
                    data={BathwareData.VerifiedUser}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        onPress={() => setSelectedVerified(item.verifiedUser)}
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <RadioButton value={item.verifiedUser} />
                        <Text>{item.verifiedUser}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </RadioButton.Group>
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

export default BathWareFilter;
