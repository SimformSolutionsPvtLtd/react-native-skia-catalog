import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {SkiaCharging} from 'react-native-skia-catalog';
import {CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {NavProps} from '../../navigation/types';
import styles from './styles/styles';

const SkiaChargingScreen = () => {
  const navigation = useNavigation<NavProps>();

  return (
    <View style={styles.screen}>
      <CustomHeader
        title={Strings.SKIA_CHARGING}
        isBackEnabled={true}
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <SkiaCharging />
      </View>
    </View>
  );
};
export default SkiaChargingScreen;
