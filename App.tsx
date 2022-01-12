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



const App = () => {
  useEffect(() => {

    setTimeout(() => {
      SplashScreen.hide();

    }, 500)
  }, [])

  return (
    <Navigator />
  );
};

export default App;
