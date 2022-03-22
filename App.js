/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import Launch from './src/launch';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import Main from './src/main';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import List from './src/list';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Launch} />
          <Stack.Screen name="main" component={Main} />
          <Stack.Screen name="Details" component={List} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
