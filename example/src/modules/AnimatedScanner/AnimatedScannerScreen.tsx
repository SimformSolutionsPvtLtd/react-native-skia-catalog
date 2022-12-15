import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {AnimatedScanner} from 'react-native-skia-catalog';
import {CustomHeader} from '../../components';
import {Strings} from '../../constants';
import type {NavProps} from '../../navigation/types';
import styles from './styles/styles';

const AnimatedScannerScreen = (): React.ReactElement => {
  const navigation = useNavigation<NavProps>();

  return (
    <View style={styles.screen}>
      <CustomHeader
        title={Strings.ANIMATED_SCANNER}
        isBackEnabled={true}
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <AnimatedScanner 
          stopZooming = {true}
          height = {300}
        />
      </View>
    </View>
  );
};

export default AnimatedScannerScreen;
