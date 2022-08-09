import React from 'react';
import {TouchableOpacity} from 'react-native';
import {CustomCardProps} from './types';
import styles from './styles/CustomCardStyles';

const CustomCard = ({children, style, onPress}: CustomCardProps) => {
  return (
    <TouchableOpacity
      style={[styles.card, style]}
      activeOpacity={0.88}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default CustomCard;
