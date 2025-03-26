"use strict";

import React from 'react';
import Animated, { useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';
import MenuList from './MenuList';
import styles from './styles';
import { useInternal } from '../../hooks';
import { HOLD_ITEM_TRANSFORM_DURATION, CONTEXT_MENU_STATE, SPRING_CONFIGURATION } from '../../constants';
import { jsx as _jsx } from "react/jsx-runtime";
const MenuComponent = () => {
  const {
    state,
    menuProps
  } = useInternal();
  const wrapperStyles = useAnimatedStyle(() => {
    const anchorPositionVertical = menuProps.value.anchorPosition.split('-')[0];
    const top = anchorPositionVertical === 'top' ? menuProps.value.itemHeight + menuProps.value.itemY + 8 : menuProps.value.itemY - 8;
    const left = menuProps.value.itemX;
    const width = menuProps.value.itemWidth;
    const tY = menuProps.value.transformValue;
    return {
      top,
      left,
      width,
      transform: [{
        translateY: state.value === CONTEXT_MENU_STATE.ACTIVE ? withSpring(tY, SPRING_CONFIGURATION) : withTiming(0, {
          duration: HOLD_ITEM_TRANSFORM_DURATION
        })
      }]
    };
  }, [menuProps]);
  return /*#__PURE__*/_jsx(Animated.View, {
    style: [styles.menuWrapper, wrapperStyles],
    children: /*#__PURE__*/_jsx(MenuList, {})
  });
};
const Menu = /*#__PURE__*/React.memo(MenuComponent);
export default Menu;
//# sourceMappingURL=Menu.js.map