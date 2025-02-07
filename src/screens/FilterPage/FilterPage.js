import {View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import HorizontalScrollBar from '../../navigation/HorizontalScrollBar/HorizontalScrollBar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {scale} from 'react-native-size-matters';
import {Checkbox} from 'react-native-paper';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const tileOptions = [
  {
    category: 'PGVT & GVT',
    subOptions: ['Glossy Finish', 'Matt Finish', 'High Gloss'],
  },
  {
    category: 'Digital Wall Tiles',
    subOptions: ['Kitchen Wall', 'Bathroom Wall', 'Living Room'],
  },
  {
    category: 'Digital Porcelain Tiles',
    subOptions: ['Matt Finish', 'Polished', 'Rustic Look'],
  },
  {
    category: 'Nano Vitrified Tiles',
    subOptions: ['Glossy', 'Satin', 'Plain'],
  },
  {
    category: 'Wooden Planks',
    subOptions: ['Dark Wood', 'Light Wood', 'Rustic Wood'],
  },
];

const FilterPage = () => {
  const navigation = useNavigation();
  const [selectedBox, setSelectedBox] = useState('tiles');

  const [selectedTiles, setSelectedTiles] = useState({});
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = category => {
    setSelectedTiles(prev => {
      const allSelected =
        prev[category]?.length ===
        tileOptions.find(t => t.category === category).subOptions.length;
      return {
        ...prev,
        [category]: allSelected
          ? []
          : tileOptions.find(t => t.category === category).subOptions,
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

  return (
    <>
      <View style={style.main}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name={'arrowleft'} size={30} />
        </TouchableOpacity>
        <Text style={style.heading}>Tiles Filter</Text>
      </View>
      <View style={{backgroundColor: '#ffffff'}}>
        <ScrollView style={style.maincontainer}>
          <HorizontalScrollBar
            selectedBox={selectedBox}
            setSelectedBox={setSelectedBox}
          />
        </ScrollView>
      </View>
      <View style={{flex: 1, backgroundColor: '#ffffff'}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={style.part1}>
            <TouchableOpacity>
              <Text style={style.selectedText}>Categories</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={style.selectedText}>Grade</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={style.selectedText}>Total Units</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={style.selectedText}>Sale Type</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={style.selectedText}>Price Type</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={style.selectedText}>Features / Colours</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={style.selectedText}>Role Type</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={style.selectedText}>Location</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={style.selectedText}>Price</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={style.selectedText}>Posted On</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={style.selectedText}>Verified User</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={style.selectedText}>Surface</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                style.clearBtn,
                {
                  bottom: scale(10),
                  position: 'absolute',
                  marginHorizontal: scale(5),
                  width: '100%',
                },
              ]}>
              <Text>Clear All</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <ScrollView
              style={{backgroundColor: '#ffffff', marginTop: scale(10)}}>
              {tileOptions.map(tile => (
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
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Checkbox
                      status={
                        selectedTiles[tile.category]?.length ===
                        tile.subOptions.length
                          ? 'checked'
                          : 'unchecked'
                      }
                      onPress={() => toggleCategory(tile.category)}
                    />
                    <Text style={{flex: 1, fontSize: 16}}>{tile.category}</Text>
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
                            onPress={() => toggleSubOption(tile.category, item)}
                          />
                          <Text>{item}</Text>
                        </View>
                      )}
                    />
                  )}
                </View>
              ))}
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

export default FilterPage;
