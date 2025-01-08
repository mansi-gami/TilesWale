import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../../component/Header/Header';
import styles from './style';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CatalogCard from '../../component/Card/CatalogCard';
import { TilesCatalogue } from '../../Constant/Constant';

function MyDownloads() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          height: 800,
        }}>
        <Image
          source={require('../../assets/NotFound.png')}
          style={{height: 90, width: 90}}
        />
        <Text style={{fontSize: 20, color: '#000000', fontWeight: '800'}}>
          No Catalogue Found
        </Text>
      </View>
    </ScrollView>
  );
}

function Tiles() {
  return (
    <ScrollView>
      <View style={{flexDirection: 'row', backgroundColor: '#ffffff'}}>
        <Text style={styles.text}>Recently Added Catalogues</Text>
        <Text style={styles.linkText}>View All</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flexDirection: 'row'}}>
        <CatalogCard Data={TilesCatalogue} category="Recently Added Catalogues" showSponsored={false}/>
        <CatalogCard Data={TilesCatalogue} category="Recently Added Catalogues" showSponsored={false}/>
      </ScrollView>
      <View style={{flexDirection: 'row', backgroundColor: '#ffffff'}}>
        <Text style={styles.text}>Featured Company Catalogue</Text>
        <Text style={styles.linkText}>View All</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flexDirection: 'row'}}>
        <CatalogCard Data={TilesCatalogue} category="Featured Company Catalogue" showSponsored={true}/>
        <CatalogCard Data={TilesCatalogue} category="Featured Company Catalogue" showSponsored={true}/>
      </ScrollView>
    </ScrollView>
  );
}

function Sanitaryware() {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ffffff',
        }}>
        <Text style={{fontSize: 20, color: '#000000', fontWeight: '800'}}>
          Kitchen Screen Content
        </Text>
      </View>
    </ScrollView>
  );
}

function KitchenSink() {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ffffff',
        }}>
        <Text style={{fontSize: 20, color: '#000000', fontWeight: '800'}}>
          Kitchen Screen Content
        </Text>
      </View>
    </ScrollView>
  );
}

function Bathware() {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ffffff',
        }}>
        <Text style={{fontSize: 20, color: '#000000', fontWeight: '800'}}>
          Kitchen Screen Content
        </Text>
      </View>
    </ScrollView>
  );
}

function Adhesive() {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ffffff',
        }}>
        <Text style={{fontSize: 20, color: '#000000', fontWeight: '800'}}>
          Kitchen Screen Content
        </Text>
      </View>
    </ScrollView>
  );
}

const Tab = createMaterialTopTabNavigator();

function CatalogTopTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Tiles"
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarActiveTintColor: '#4071ed',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {fontSize: 20, fontWeight: '600', height: 30},
        tabBarStyle: {backgroundColor: 'white'},
      }}>
      <Tab.Screen name="My Downloads" component={MyDownloads} />
      <Tab.Screen name="Tiles" component={Tiles} />
      <Tab.Screen name="Sanitaryware" component={Sanitaryware} />
      <Tab.Screen name="Kitchen Sink" component={KitchenSink} />
      <Tab.Screen name="Bathware" component={Bathware} />
      <Tab.Screen name="Adhesive" component={Adhesive} />
    </Tab.Navigator>
  );
}

const CatalogScreen = () => {
  return (
    <View style={styles.container}>
      <Header title={'Catalogue'} />
      <View style={{flex: 1}}>
        <CatalogTopTabs />
      </View>
    </View>
  );
};

export default CatalogScreen;
