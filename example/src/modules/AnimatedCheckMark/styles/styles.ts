import {StyleSheet} from 'react-native';
import {Metrics} from '../../../theme';

const {verticalScale, moderateScale, horizontalScale} = Metrics;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  variantView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: verticalScale(10),
  },
  textStyle: {
    marginVertical: verticalScale(16),
    marginHorizontal: horizontalScale(20),
    fontSize: moderateScale(16),
    fontWeight: '500',
    letterSpacing: 1,
    alignSelf: 'flex-start',
  },
});

export default styles;
