import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {NavProps} from '../../navigation/types';
import styles from './styles/styles';
import {
  SkiaIndicator,
  IndicatorEnum,
  FlickerLoading,
} from 'react-native-skia-catalog';
import {Colors} from '../../theme';

const IndicatorScreen = () => {
  const navigation = useNavigation<NavProps>();

  return <FlickerLoading />
  return (
    <View style={styles.screen}>
      <CustomHeader
        title={Strings.INDICATOR}
        isBackEnabled={true}
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.flex}>
            <SkiaIndicator
              type={IndicatorEnum.BALL}
              color={Colors.redVelvet}
              width={60}
              height={60}
              borderRadius={30}
              animating={true}
              progressDuration={800}
            />
          </View>

          <View style={styles.flex}>
            <SkiaIndicator
              type={IndicatorEnum.SKYPE}
              color={Colors.redVelvet}
              width={60}
              height={60}
              borderRadius={30}
              animating={true}
            />
          </View>

          <View style={styles.flex}>
            <SkiaIndicator
              type={IndicatorEnum.PULSE}
              color={Colors.redVelvet}
              width={60}
              height={60}
              borderRadius={30}
              animating={true}
            />
          </View>

          <View style={styles.flex}>
            <SkiaIndicator
              type={IndicatorEnum.BREATHING}
              color={Colors.redVelvet}
              width={60}
              height={60}
              borderRadius={30}
              animating={true}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.flex}>
            <SkiaIndicator
              type={IndicatorEnum.WAVE}
              color={Colors.redVelvet}
              width={60}
              height={60}
              borderRadius={30}
              animating={true}
            />
          </View>

          <View style={styles.flex}>
            <SkiaIndicator
              type={IndicatorEnum.WAVE}
              color={Colors.redVelvet}
              width={60}
              height={60}
              borderRadius={30}
              animating={true}
              waveMode="outline"
            />
          </View>

          <View style={styles.flex}>
            <SkiaIndicator
              type={IndicatorEnum.WAVE}
              color={Colors.redVelvet}
              width={60}
              height={60}
              borderRadius={30}
              animating={true}
              count={2}
              waveFactor={0.4}
            />
          </View>

          <View style={styles.flex}>
            <SkiaIndicator
              type={IndicatorEnum.WAVE}
              color={Colors.redVelvet}
              width={60}
              height={60}
              borderRadius={30}
              animating={true}
              count={1}
              waveFactor={0.4}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.flex}>
            <SkiaIndicator
              type={IndicatorEnum.UI_ACTIVITY}
              color={Colors.redVelvet}
              width={60}
              height={60}
              borderRadius={30}
              animating={true}
            />
          </View>

          <View style={styles.flex}>
            <SkiaIndicator
              type={IndicatorEnum.MATERIAL}
              color={Colors.redVelvet}
              width={60}
              height={60}
              borderRadius={30}
              animating={true}
            />
          </View>

          <View style={styles.flex}>
            <SkiaIndicator
              type={IndicatorEnum.PAC_MAN}
              color={Colors.redVelvet}
              width={60}
              height={60}
              borderRadius={30}
              animating={true}
            />
          </View>

          <View style={styles.flex}>
            <SkiaIndicator
              type={IndicatorEnum.BAR}
              color={Colors.redVelvet}
              width={60}
              height={60}
              borderRadius={30}
              animating={true}
              count={5}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.flex}>
            <SkiaIndicator
              type={IndicatorEnum.DOT}
              color={Colors.redVelvet}
              width={60}
              height={60}
              borderRadius={30}
              animating={true}
              count={3}
              progressDuration={800}
            />
          </View>

          <View style={styles.flex}>
            <SkiaIndicator
              type={IndicatorEnum.CIRCLE}
              color={Colors.redVelvet}
              width={60}
              height={60}
              borderRadius={30}
              animating={true}
            />
          </View>

          <View style={styles.flex}>
            <SkiaIndicator
              type={IndicatorEnum.ROTATION_HOLE}
              color={Colors.redVelvet}
              width={60}
              height={60}
              borderRadius={30}
              animating={true}
              circleColor={Colors.blue700}
            />
          </View>

          <View style={styles.flex}>
            <SkiaIndicator
              type={IndicatorEnum.DOT}
              color={Colors.redVelvet}
              width={60}
              height={60}
              borderRadius={30}
              animating={true}
              reverse={true}
              count={3}
              progressDuration={800}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.flex}>
            <SkiaIndicator
              type={IndicatorEnum.ROTATION_CIRCLE}
              color={Colors.redVelvet}
              circleColor={Colors.blue700}
              width={60}
              height={60}
              borderRadius={30}
              animating={true}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default IndicatorScreen;
