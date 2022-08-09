import {StyleSheet} from 'react-native';
import {Metrics} from '../../../theme';

const {verticalScale, horizontalScale} = Metrics;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(20),
  },
});

export default styles;
