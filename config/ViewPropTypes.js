import { View, ViewPropTypes as RNViewPropTypes } from 'react-native';
import DeprecatedViewPropTypes from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedViewPropTypes';

const ViewPropTypes = RNViewPropTypes || View.propTypes || DeprecatedViewPropTypes;

export default ViewPropTypes;
