import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../../component/Header/Header';
import styles from './style';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CatalogCard from '../../component/CatalogueCard/CatalogCard';
import { TilesCatalogue } from '../../Constant/Constant';

function MyDownloads() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={styles.download}>
        <Image
          source={require('../../assets/NotFound.png')}
          style={styles.image}
        />
        <Text style={styles.comments}>
          No Catalogue Found
        </Text>
      </View>
    </ScrollView>
  );
}

function Tiles() {
  return (
    <ScrollView style={styles.mainContent}>
      <View style={styles.content}>
        <Text style={styles.text}>Recently Added Catalogues</Text>
        <Text style={styles.linkText}>View All</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flexDirection: 'row'}}>
        <CatalogCard Data={TilesCatalogue} category="Recently Added Catalogues" showSponsored={false}/>
        <CatalogCard Data={TilesCatalogue} category="Recently Added Catalogues" showSponsored={false}/>
      </ScrollView>
      <View style={styles.content}>
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
    <ScrollView style={styles.mainContent}>
      <View>
        <Text>
          Sanitaryware Screen Content
        </Text>
      </View>
    </ScrollView>
  );
}

function KitchenSink() {
  return (
    <ScrollView style={styles.mainContent}>
      <View>
        <Text>
          KitchenSink Screen Content
        </Text>
      </View>
    </ScrollView>
  );
}

function Bathware() {
  return (
    <ScrollView style={styles.mainContent}>
      <View>
        <Text>
          Bathware Screen Content
        </Text>
      </View>
    </ScrollView>
  );
}

function Adhesive() {
  return (
    <ScrollView style={styles.mainContent}>
      <View>
        <Text>
          Adhesive Screen Content
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
