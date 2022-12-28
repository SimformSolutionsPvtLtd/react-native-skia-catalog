import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {HeartRate, HeartRateEnum} from 'react-native-skia-catalog';
import {CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {NavProps} from '../../navigation/types';
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
        <View style={styles.heartRateContainer}>
          <Text style={styles.textStyle}>{Strings.DEFAULT_HEARTRATE}</Text>
          <HeartRate />
        </View>
        <View style={styles.heartRateContainer}>
          <Text style={styles.textStyle}>{Strings.FOLLOWUP_HEARTRATE}</Text>
          <HeartRate heartRateType={HeartRateEnum.FOLLOWUP} size={235} />
        </View>
      </View>
    </View>
  );
};

export default HeartRateScreen;
