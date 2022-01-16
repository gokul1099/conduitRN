/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import Navigator from './app/Navigation/NavigationStack';
import SplashScreen from "react-native-splash-screen";
import configureStore from "./app/Store"
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ActivityIndicator } from 'react-native';

const { persistor, store } = configureStore()

const App = () => {
  useEffect(() => {

    setTimeout(() => {
      SplashScreen.hide();

    }, 500)
  }, [])

  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>

  );
};

export default App;
