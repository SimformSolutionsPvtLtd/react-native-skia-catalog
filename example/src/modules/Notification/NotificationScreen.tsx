import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {Notification} from 'react-native-skia-catalog';
import {Colors} from '../../theme';
import {CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {NavProps} from '../../navigation/types';
import styles from './styles/styles';

const NotificationScreen = (): React.ReactElement => {
  const navigation = useNavigation<NavProps>();

  return (
    <View style={styles.screen}>
      <CustomHeader
        title={Strings.NOTIFICATION}
        isBackEnabled
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <Notification
          notificationCount={15}
          color={Colors.redVelvet}
          size={220}
        />
      </View>
    </View>
  );
};

export default NotificationScreen;
