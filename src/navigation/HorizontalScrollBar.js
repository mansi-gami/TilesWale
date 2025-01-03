import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

const HorizontalScrollBar = ({selectedBox,setSelectedBox}) => {
  // const [selectedBox, setSelectedBox] = useState(null);

  const handleBoxSelect = boxId => {
    if (selectedBox === boxId) {
      setSelectedBox(null); // If the same box is clicked, deselect it
    } else {
      setSelectedBox(boxId); // Set the selected box
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.scroll}>
          <TouchableOpacity
            style={[
              styles.box,
              {
                backgroundColor:
                  selectedBox === 'tiles' ? '#f7ddd7' : '#FFFFFF',
              },
            ]}
            onPress={() => handleBoxSelect('tiles')}>
            <Image
              style={styles.image}
              source={require('../assets/tiles.png')}
            />
            <Text style={styles.text}>Tiles</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.box1,
              {
                backgroundColor:
                  selectedBox === 'sanitaryware' ? '#f7ddd7' : '#FFFFFF',
              },
            ]}
            onPress={() => handleBoxSelect('sanitaryware')}>
            <Image
              style={styles.image}
              source={require('../assets/sanitaryware.png')}
            />
            <Text style={styles.text}>Sanitary</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.box2,
              {
                backgroundColor:
                  selectedBox === 'kitchenSink' ? '#f7ddd7' : '#FFFFFF',
              },
            ]}
            onPress={() => handleBoxSelect('kitchenSink')}>
            <Image
              style={styles.image}
              source={require('../assets/kitchenSink.png')}
            />
            <Text style={styles.text}>Kitchen Sink</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.box3,
              {
                backgroundColor:
                  selectedBox === 'BathWare' ? '#f7ddd7' : '#FFFFFF',
              },
            ]}
            onPress={() => handleBoxSelect('BathWare')}>
            <Image
              style={styles.image}
              source={require('../assets/BathWare.png')}
            />
            <Text style={styles.text}>Bathware</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.box4,
              {
                backgroundColor:
                  selectedBox === 'Adhesive' ? '#f7ddd7' : '#FFFFFF',
              },
            ]}
            onPress={() => handleBoxSelect('Adhesive')}>
            <Image
              style={styles.image}
              source={require('../assets/Adhesive.png')}
            />
            <Text style={styles.text}>Adhesive Chemical & More</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.notScroll}>
        <TouchableOpacity
          style={[
            styles.box,
            {
              backgroundColor: selectedBox === 'filter' ? '#f7ddd7' : '#FFFFFF',
            },
          ]}
          onPress={() => handleBoxSelect('filter')}>
          <Image
            style={styles.image}
            source={require('../assets/filter.jpg')}
          />
          <Text style={styles.text}>Filter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HorizontalScrollBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  scroll: {
    flexDirection: 'row',
  },
  box: {
    flexDirection: 'row',
    height: 35,
    width: 90,
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius: 20,
    margin: 10,
    marginRight: 0,
    paddingLeft: 10,
    paddingRight: 10,
  },
  box1: {
    flexDirection: 'row',
    height: 35,
    width: 110,
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius: 20,
    margin: 10,
    marginRight: 0,
    paddingLeft: 10,
    paddingRight: 10,
  },
  box2: {
    flexDirection: 'row',
    height: 35,
    width: 140,
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius: 20,
    margin: 10,
    marginRight: 0,
    paddingLeft: 10,
    paddingRight: 10,
  },
  box3: {
    flexDirection: 'row',
    height: 35,
    width: 120,
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius: 20,
    margin: 10,
    marginRight: 0,
    paddingLeft: 10,
    paddingRight: 10,
  },
  box4: {
    flexDirection: 'row',
    height: 35,
    width: 230,
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius: 20,
    margin: 10,
    marginRight: 0,
    paddingLeft: 10,
    paddingRight: 10,
  },
  image: {
    height: 20,
    width: 20,
    alignSelf: 'center',
  },
  text: {
    fontSize: 15,
    alignSelf: 'center',
    marginLeft: 8,
    fontWeight: 600,
  },
});
