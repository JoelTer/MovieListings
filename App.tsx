import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navegation } from './src/navigation/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <Navegation />
    </NavigationContainer>
  )
}


export default App;