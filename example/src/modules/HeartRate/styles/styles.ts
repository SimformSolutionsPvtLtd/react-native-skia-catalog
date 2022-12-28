import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../../theme';

const {moderateScale, verticalScale, horizontalScale} = Metrics;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    marginTop: verticalScale(10),
    marginHorizontal: horizontalScale(20),
  },
  heartRateContainer: {
    marginTop: verticalScale(20),
    alignItems: 'center',
  },
  textStyle: {
    marginBottom: verticalScale(10),
    fontSize: moderateScale(16),
    color: Colors.black,
    fontWeight: '500',
    letterSpacing: 1,
    alignSelf: 'flex-start',
  },
});

export default styles;
