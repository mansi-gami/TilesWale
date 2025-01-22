import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screens/splash';
import MyTabs from './src/navigation/BottomTabNavigation/BottomTabNavigation';
import 'react-native-gesture-handler';
import SidebarScreen from './src/screens/Sidebar/SidebarScreen';
import AdvertisementScreen1 from './src/screens/AdvertisementScreen1/AdvertisementScreen1';
import AdvertisementScreen2 from './src/screens/AdvertisementScreen2/AdvertisementScreen2';
import AdvertisementScreen3 from './src/screens/AdvertisementScreen3/AdvertisementScreen3';
import AdvertisementScreen4 from './src/screens/AdvertisementScreen4/AdvertisementScreen4';
import AdvertisementScreen5 from './src/screens/AdvertisementScreen5/AdvertisementScreen5';
import AdvertisementScreen6 from './src/screens/AdvertisementScreen6/AdvertisementScreen6';
import LanguageScreen from './src/screens/LanguageScreen/LanguageScreen';
import LoginActivityScreen from './src/screens/LoginActivityScreeen/LoginActivityScreen';
import BrandScreen from './src/screens/Brand/BrandScreen';
import MoreImage from './src/screens/MoreImage/MoreImage';
import MarketScreen from './src/screens/Market/MarketScreen';
import ProductDetailScreen from './src/screens/ProductDetail/ProductDetailScreen';

const stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer>
        <stack.Navigator
          initialRouteName="AdvertisementScreen1"
          screenOptions={{
            headerShown: false,
          }}>
            <stack.Screen
            name={'LanguageScreen'}
            component={LanguageScreen}
            // options={{headerShown: false}}
          />
          <stack.Screen
            name={'LoginActivityScreen'}
            component={LoginActivityScreen}
            // options={{headerShown: false}}
          />
          <stack.Screen
            name={'AdvertisementScreen1'}
            component={AdvertisementScreen1}
            // options={{headerShown: false}}
          />
          <stack.Screen
            name={'AdvertisementScreen2'}
            component={AdvertisementScreen2}
            // options={{headerShown: false}}
          />
          <stack.Screen
            name={'AdvertisementScreen3'}
            component={AdvertisementScreen3}
            // options={{headerShown: false}}
          />
          <stack.Screen
            name={'AdvertisementScreen4'}
            component={AdvertisementScreen4}
            // options={{headerShown: false}}
          />
          <stack.Screen
            name={'AdvertisementScreen5'}
            component={AdvertisementScreen5}
            // options={{headerShown: false}}
          />
          <stack.Screen
            name={'AdvertisementScreen6'}
            component={AdvertisementScreen6}
            // options={{headerShown: false}}
          />
          <stack.Screen
            name={'SidebarScreen'}
            component={SidebarScreen}
            // options={{headerShown: false}}
          />
          <stack.Screen
            name={'Splash'}
            component={SplashScreen}
            // options={{headerShown: true}}
          />
          <stack.Screen
            name={'HomeScreen'}
            component={MyTabs}
            // options={{headerShown: true}}
          />
          <stack.Screen
            name={'Market'}
            component={MyTabs}
            // options={{headerShown: true}}
          />
          {/* <stack.Screen
            name={'MarketScreen'}
            component={MarketScreen}
            // options={{headerShown: true}}
          /> */}
          <stack.Screen
            name={'Lead'}
            component={MyTabs}
            // options={{headerShown: true}}
          />
          <stack.Screen
            name={'LoginActivity'}
            component={MyTabs}
            // options={{headerShown: true}}
          />
          <stack.Screen
            name={'Brand'}
            component={BrandScreen}
            // options={{headerShown: true}}
          />
          <stack.Screen
            name={'MoreImage'}
            component={MoreImage}
            // options={{headerShown: true}}
          />
          <stack.Screen
            name={'ProductDetailScreen'}
            component={ProductDetailScreen}
            // options={{headerShown: true}}
          />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
