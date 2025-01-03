import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screens/splash';
import MyTabs from './src/navigation/BottomTabNavigation';
import 'react-native-gesture-handler';
import SidebarScreen from './src/screens/Sidebar/SidebarScreen';

const stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer>
        <stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
          }}>
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
          <stack.Screen
            name={'Lead'}
            component={MyTabs}
            // options={{headerShown: true}}
          />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
