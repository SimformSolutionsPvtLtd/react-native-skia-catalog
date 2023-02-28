import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {ButtonEnum, MediaButton} from 'react-native-skia-catalog';
import {CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {NavProps} from '../../navigation/types';
import {Colors} from '../../theme';
import styles from './styles/styles';

const MediaButtonScreen = (): React.ReactElement => {
  const navigation = useNavigation<NavProps>();

  return (
    <View style={styles.screen}>
      <CustomHeader
        title={Strings.MEDIA_BUTTON}
        isBackEnabled
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.simpleMediaButtonPulseStyle}>
        <Text style={styles.textStyle}>
          {Strings.DEFAULT_MEDIA_BUTTON_WITH_PULSE}
        </Text>
        <MediaButton />
      </View>
      <View style={styles.customMediaButtonContainer}>
        <Text style={styles.textStyle}>
          {Strings.CUSTOM_MEDIA_BUTTON_WITH_PULSE}
        </Text>
        <View style={styles.customMediaButtonInnerContainer}>
          <MediaButton
            buttonType={ButtonEnum.CIRCLE}
            size={90}
            color={Colors.violetsAreBlue}
          />
          <MediaButton
            buttonType={ButtonEnum.SQUARE}
            size={90}
            color={Colors.forestGreen}
          />
        </View>
      </View>
      <View style={styles.customMediaButtonContainer}>
        <Text style={styles.textStyle}>
          {Strings.SIMPLE_MEDIA_BUTTON_WITH_PULSE}
        </Text>
        <View style={styles.customMediaButtonInnerContainer}>
          <MediaButton
            buttonType={ButtonEnum.CIRCLE}
            pulseDisable={true}
            size={100}
            color={Colors.cyan}
          />
          <MediaButton
            buttonType={ButtonEnum.RECTANGLE}
            size={100}
            color={Colors.redVelvet}
          />
        </View>
      </View>
    </View>
  );
};

export default MediaButtonScreen;
