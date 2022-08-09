import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {NavProps} from '../../navigation/types';
import styles from './styles/styles';
import {SkiaIndicator} from 'react-native-skia-catalog';
import {Colors} from '../../theme';

const IndicatorScreen = () => {
  const navigation = useNavigation<NavProps>();

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
              type={'Ball'}
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
              type={'Skype'}
              color={Colors.redVelvet}
              width={60}
              height={60}
              borderRadius={30}
              animating={true}
            />
          </View>

          <View style={styles.flex}>
            <SkiaIndicator
              type={'Pulse'}
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
              type={'Wave'}
              color={Colors.redVelvet}
              width={60}
              height={60}
              borderRadius={30}
              animating={true}
            />
          </View>

          <View style={styles.flex}>
            <SkiaIndicator
              type={'Wave'}
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
              type={'Wave'}
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
              type={'Wave'}
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
              type={'UIActivity'}
              color={Colors.redVelvet}
              width={60}
              height={60}
              borderRadius={30}
              animating={true}
            />
          </View>

          <View style={styles.flex}>
            <SkiaIndicator
              type={'Material'}
              color={Colors.redVelvet}
              width={60}
              height={60}
              borderRadius={30}
              animating={true}
            />
          </View>

          <View style={styles.flex}>
            <SkiaIndicator
              type={'Pacman'}
              color={Colors.redVelvet}
              width={60}
              height={60}
              borderRadius={30}
              animating={true}
            />
          </View>

          <View style={styles.flex}>
            <SkiaIndicator
              type={'Bar'}
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
              type={'Dot'}
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
              type={'Circle'}
              color={Colors.redVelvet}
              width={60}
              height={60}
              borderRadius={30}
              animating={true}
            />
          </View>

          <View style={styles.flex}>
            <SkiaIndicator
              type={'Dot'}
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
      </View>
    </View>
  );
};

export default IndicatorScreen;
