import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {WirelessCharger} from 'react-native-skia-catalog';
import {NavProps} from 'src/navigation/types';
import {CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {Colors} from '../../theme';
import styles from './styles/styles';

const WirelessChargerScreen = () => {
  const navigation = useNavigation<NavProps>();
  return (
    <View style={styles.screen}>
      <CustomHeader
        title={Strings.WIRELESS_CHARGER}
        isBackEnabled={true}
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <WirelessCharger
          size={350}
          outerCircleColor={Colors.dodgerBlue}
          wifiWaveColor={Colors.silver}
          thunderColor={Colors.tangerineYellow}
        />
      </View>
    </View>
  );
};

export default WirelessChargerScreen;
