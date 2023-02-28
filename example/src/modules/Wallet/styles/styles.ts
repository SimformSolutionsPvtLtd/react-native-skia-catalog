import {StyleSheet} from 'react-native';
import {Metrics} from '../../../theme';

const {verticalScale} = Metrics;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: verticalScale(120),
  },
});

export default styles;
