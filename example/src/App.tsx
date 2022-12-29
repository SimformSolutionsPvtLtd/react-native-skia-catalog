import React from 'react';
import {SafeAreaView} from 'react-native';
import Routes from './navigation/Routes';
import applicationStyle from './theme/ApplicationStyle';

const App = (): React.ReactElement => {
  return (
    <SafeAreaView style={applicationStyle.screen}>
      <Routes />
    </SafeAreaView>
  );
};

export default App;
