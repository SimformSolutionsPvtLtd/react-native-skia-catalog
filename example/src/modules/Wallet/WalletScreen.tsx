import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {SkiaWallet} from 'react-native-skia-catalog';
import {CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {NavProps} from '../../navigation/types';
import {Colors} from '../../theme';
import styles from './styles';

const WalletScreen = () => {
  const navigation = useNavigation<NavProps>();

  return (
    <View style={styles.screen}>
      <CustomHeader
        title={Strings.WALLET}
        isBackEnabled={true}
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <SkiaWallet
          size={260}
          primaryColor={Colors.deepViolet}
          secondaryColor={Colors.electricPink}
          numberOfCards={3}
        />
      </View>
    </View>
  );
};

export default WalletScreen;
