import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {
  AnimatedCheckMark,
  CheckMarkEnum,
} from '../../../../src/components/AnimatedCheckMark';
import assets from '../../assets';
import {CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {NavProps} from '../../navigation/types';
import {Colors} from '../../theme';
import styles from './styles/styles';

const AnimatedCheckMarkScreen = () => {
  const navigation = useNavigation<NavProps>();

  return (
    <View style={styles.screen}>
      <CustomHeader
        title={Strings.ANIMATED_CHECKMARK}
        isBackEnabled={true}
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          {Strings.DEFAULT_ANIMATED_CHECK_MARK}
        </Text>
        <View style={styles.variantView}>
          <AnimatedCheckMark
            speed={2000}
            checkMarkType={CheckMarkEnum.FADE}
            size={100}
            showParticle={true}
          />
          <AnimatedCheckMark
            size={100}
            speed={2000}
            checkMarkType={CheckMarkEnum.FADE}
            centerImageSource={assets.like}
            circleOneColor={Colors.redVelvet}
            circleTwoColor={Colors.redVelvet}
          />
        </View>
        <Text style={styles.textStyle}>
          {Strings.CIRCULAR_ANIMATED_CHECK_MARK}
        </Text>
        <View style={styles.variantView}>
          <AnimatedCheckMark
            speed={1200}
            checkMarkType={CheckMarkEnum.CIRCULAR}
            size={100}
            multiColor={true}
            centerImageColor={Colors.brightBlue}
          />
          <AnimatedCheckMark
            speed={1200}
            checkMarkType={CheckMarkEnum.CIRCULAR}
            size={100}
            centerImageColor={Colors.brightBlue}
            centerImageSource={assets.like}
            borderColor={Colors.cyan}
          />
        </View>
        <Text style={styles.textStyle}>
          {Strings.SIMPLE_ANIMATED_CHECKMARK}
        </Text>
        <AnimatedCheckMark
          speed={1200}
          checkMarkType={CheckMarkEnum.SIMPLE}
          size={100}
          circleOneColor={Colors.purple}
        />
      </View>
    </View>
  );
};

export default AnimatedCheckMarkScreen;
