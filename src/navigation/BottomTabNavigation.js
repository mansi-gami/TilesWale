import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MarketScreen from '../screens/Market/MarketScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LeadsScreen from '../screens/Leads/LeadsScreen';
import DirectoryScreen from '../screens/Directory/DirectoryScreen';
import CatalogScreen from '../screens/Catalog/CatalogScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: true,
      tabBarActiveTintColor: '#f08d3a',
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({size, focused, color}) => {
          return <Entypo name={'home'} size={size} color={color}/>
        }
      }}/>
      <Tab.Screen name="Market" component={MarketScreen} options={{
        tabBarIcon: ({size, color}) => {
          return <MaterialCommunityIcons name={'home-assistant'} size={size} color={color}/>
        }
      }}/>
      <Tab.Screen name="Lead" component={LeadsScreen} options={{
        tabBarIcon: ({size, color}) => {
          return <Entypo name={'bar-graph'} size={size} color={color}/>
        }
      }}/>
      <Tab.Screen name="Directory" component={DirectoryScreen} options={{
        tabBarIcon: ({size, color}) => {
          return <MaterialCommunityIcons name={'account-multiple-outline'} size={size} color={color}/>
        }
      }}/>
      <Tab.Screen name="Catalog" component={CatalogScreen} options={{
        tabBarIcon: ({size, color}) => {
          return <Entypo name={'open-book'} size={size} color={color}/>
        }
      }}/>
    </Tab.Navigator>
  );
}

export default MyTabs;
