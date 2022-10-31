import { StyleSheet } from 'react-native';
import { Metrics } from '../../../theme';
const {moderateScale} = Metrics;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: moderateScale(20),
  },
});
export default styles;
