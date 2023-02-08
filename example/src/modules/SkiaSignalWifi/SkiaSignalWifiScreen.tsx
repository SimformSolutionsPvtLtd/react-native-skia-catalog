import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {SkiaSignalWifi} from '../../../../src/components/SkiaSignalWifi';
import {CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {NavProps} from '../../navigation/types';
import styles from './styles/styles';

const SkiaSignalWifiScreen = () => {
  const navigation = useNavigation<NavProps>();

  return (
    <View style={styles.screen}>
      <CustomHeader
        title={Strings.SKIA_SIGNAL_WIFI}
        isBackEnabled={true}
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <SkiaSignalWifi />
      </View>
    </View>
  );
};

export default SkiaSignalWifiScreen;
