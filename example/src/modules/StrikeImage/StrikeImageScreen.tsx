import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {StrikeImage} from 'react-native-skia-catalog';
import {CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {NavProps} from '../../navigation/types';
import {Colors} from '../../theme';
import styles from './styles/styles';

const StrikeImageScreen = (): React.ReactElement => {
  const navigation = useNavigation<NavProps>();

  return (
    <View style={styles.screen}>
      <CustomHeader
        title={Strings.STRIKE_IMAGE}
        isBackEnabled={true}
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <StrikeImage size={300} strikeWidth={55} color={Colors.orange} />
      </View>
    </View>
  );
};

export default StrikeImageScreen;
