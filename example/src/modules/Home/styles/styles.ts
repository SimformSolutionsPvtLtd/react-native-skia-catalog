import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../../theme';

const {verticalScale, moderateScale, horizontalScale} = Metrics;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  animatedListStyle: {
    flex: 1,
    marginTop: verticalScale(10),
    marginHorizontal: horizontalScale(20),
  },
  itemSeparatorStyle: {
    height: verticalScale(10),
  },
  contentContainerStyle: {
    flex: 1,
    paddingBottom: verticalScale(50),
  },
  cardStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(50),
    width: '100%',
    backgroundColor: Colors.cyan,
  },
  componentNameTextStyle: {
    fontSize: moderateScale(16),
    color: Colors.white,
    fontWeight: '600',
    letterSpacing: 1,
  },
});

export default styles;
