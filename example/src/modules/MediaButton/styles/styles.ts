import {StyleSheet} from 'react-native';
import {Metrics} from '../../../theme';

const {moderateScale, verticalScale, horizontalScale} = Metrics;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  simpleMediaButtonPulseStyle: {
    marginTop: verticalScale(10),
    marginHorizontal: horizontalScale(20),
    alignItems: 'center',
  },
  textStyle: {
    marginVertical: verticalScale(15),
    fontSize: moderateScale(16),
    fontWeight: '500',
    letterSpacing: 1,
    alignSelf: 'flex-start',
  },
  customMediaButtonContainer: {
    marginTop: verticalScale(5),
    marginHorizontal: horizontalScale(20),
  },
  customMediaButtonInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default styles;
