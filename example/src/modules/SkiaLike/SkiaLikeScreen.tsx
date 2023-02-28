import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {SkiaLike} from 'react-native-skia-catalog';
import {CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {NavProps} from '../../navigation/types';
import styles from './styles/styles';

const SkiaLikeScreen = (): React.ReactElement => {
  const navigation = useNavigation<NavProps>();

  return (
    <View style={styles.screen}>
      <CustomHeader
        title={Strings.SKIA_LIKE}
        isBackEnabled
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <SkiaLike />
      </View>
    </View>
  );
};

export default SkiaLikeScreen;
