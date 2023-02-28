import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/routes';
import { ThemeContextProvider } from '@provider/theme';

function App(): JSX.Element {
  return (
    <ThemeContextProvider>
      <Routes />
    </ThemeContextProvider>
  );
}

export default App;
