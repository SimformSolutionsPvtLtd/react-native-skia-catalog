import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {HeartRate, HeartRateEnum} from 'react-native-skia-catalog';
import {CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {NavProps} from '../../navigation/types';
import {Colors} from '../../theme';
import styles from './styles/styles';

const HeartRateScreen = () => {
  const navigation = useNavigation<NavProps>();

  return (
    <View style={styles.screen}>
      <CustomHeader
        title={Strings.HEART_RATE}
        isBackEnabled
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <HeartRate
          heartRateType={HeartRateEnum.FOLLOWUP}
          color={[Colors.spanishViolet, Colors.pearlAqua]}
          isGridVisible={false}
          pulseWidth={12}
          speed={2500}
          size={260}
        />
      </View>
    </View>
  );
};

export default HeartRateScreen;
