/* eslint-disable prettier/prettier */
import {StatusBar} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import Launch from './src/launch';

import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import Main from './src/main';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import List from './src/list';
// import list from './src/list';
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
      {/* <Routes>
          <Route exact path="/" element={<Launch />} />

          <Route exact path="/main" element={<Main />} />
        </Routes> */}
      {/* <Route exact path="/detail/:topicId" component={list} />  */}
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
