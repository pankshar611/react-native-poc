import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/home.component';
import Devices from '../components/devices.component';
import Drives from '../components/drives.component';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name={'Home'}
        component={Home}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen
        name={'Devices'}
        component={Devices}
        options={{ title: 'Devices' }}
      />
      <Stack.Screen
        name={'Drives'}
        component={Drives}
        options={{ title: 'Drives' }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;