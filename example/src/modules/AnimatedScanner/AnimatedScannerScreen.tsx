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
        isBackEnabled
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <AnimatedScanner />
      </View>
    </View>
  );
};

export default AnimatedScannerScreen;
