import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {SkiaThemeSwitch} from 'react-native-skia-catalog';
import {CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {NavProps} from '../../navigation/types';
import {Colors} from '../../theme';
import styles from './styles/styles';

const ThemeSwitchScreen = () => {
  const navigation = useNavigation<NavProps>();

  return (
    <View style={styles.screen}>
      <CustomHeader
        title={Strings.THEME_SWITCH}
        isBackEnabled={true}
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <SkiaThemeSwitch
          size={340}
          lightThemeColor={Colors.havelockBlue}
          darkThemeColor={Colors.midnightExpress}
        />
      </View>
    </View>
  );
};
export default ThemeSwitchScreen;
