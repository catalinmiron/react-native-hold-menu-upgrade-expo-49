"use strict";

import React, { memo } from 'react';
import { FlatList as RNFlatList } from 'react-native';
import isEqual from 'lodash.isequal';
import Animated from 'react-native-reanimated';
import { jsx as _jsx } from "react/jsx-runtime";
const AnimatedFlatList = Animated.createAnimatedComponent(RNFlatList);
const HoldMenuFlatListComponent = props => {
  return /*#__PURE__*/_jsx(AnimatedFlatList, {
    ...props,
    scrollEventThrottle: 16
  });
};
const HoldMenuFlatList = /*#__PURE__*/memo(HoldMenuFlatListComponent, isEqual);
export default HoldMenuFlatList;
//# sourceMappingURL=FlatList.js.map