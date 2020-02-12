import React from 'react';
// import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import store from './store'
import RootNavigation from './navigations/RootNavigation'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer> 
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     marginLeft: 50,
//     marginTop: 50,
//     backgroundColor: '#f12'
//   }
// });
