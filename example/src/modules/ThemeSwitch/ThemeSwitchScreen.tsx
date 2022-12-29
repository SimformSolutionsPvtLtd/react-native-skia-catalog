import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {ThemeSwitch} from 'react-native-skia-catalog';
import {CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {NavProps} from '../../navigation/types';
import styles from './styles/styles';

const ThemeSwitchScreen = (): React.ReactElement => {
  const navigation = useNavigation<NavProps>();

  return (
    <View style={styles.screen}>
      <CustomHeader
        title={Strings.THEME_SWITCH}
        isBackEnabled
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <ThemeSwitch />
      </View>
    </View>
  );
};

export default ThemeSwitchScreen;
