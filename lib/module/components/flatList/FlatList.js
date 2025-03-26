function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { memo } from 'react';
import { FlatList as RNFlatList } from 'react-native';
import isEqual from 'lodash.isequal';
import Animated from 'react-native-reanimated';
const AnimatedFlatList = Animated.createAnimatedComponent(RNFlatList);
const HoldMenuFlatListComponent = props => {
  return /*#__PURE__*/React.createElement(AnimatedFlatList, _extends({}, props, {
    scrollEventThrottle: 16
  }));
};
const HoldMenuFlatList = /*#__PURE__*/memo(HoldMenuFlatListComponent, isEqual);
export default HoldMenuFlatList;
//# sourceMappingURL=FlatList.js.map