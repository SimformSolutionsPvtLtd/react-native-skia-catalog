import React from 'react';
import {SafeAreaView} from 'react-native';
import Routes from './navigation/Routes';
import applicationStyle from './theme/ApplicationStyle';
import {
  SkiaIndicator,
  IndicatorEnum,
  FlickerLoading,
} from 'react-native-skia-catalog';
const App = () => {
  return (
    <SafeAreaView style={applicationStyle.screen}>
      <FlickerLoading />
      {/* <Routes /> */}
    </SafeAreaView>
  );
};

export default App;
