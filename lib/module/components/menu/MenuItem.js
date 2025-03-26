"use strict";

import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import Separator from './Separator';
import styles from './styles';
import { useInternal } from '../../hooks';
import { CONTEXT_MENU_STATE } from '../../constants';
import { BORDER_LIGHT_COLOR, BORDER_DARK_COLOR } from './constants';
import isEqual from 'lodash.isequal';
import { getColor } from './calculations';
import { AnimatedIcon } from '../provider/Provider';

// @ts-ignore
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
const MenuItemComponent = ({
  item,
  isLast
}) => {
  const {
    state,
    theme,
    menuProps
  } = useInternal();
  const borderStyles = useAnimatedStyle(() => {
    const borderBottomColor = theme.value === 'dark' ? BORDER_DARK_COLOR : BORDER_LIGHT_COLOR;
    return {
      borderBottomColor,
      borderBottomWidth: isLast ? 0 : 1
    };
  }, [theme, isLast, item]);
  const textColor = useAnimatedStyle(() => {
    return {
      color: getColor(item.isTitle, item.isDestructive, theme.value)
    };
  }, [theme, item]);
  const handleOnPress = useCallback(() => {
    if (!item.isTitle) {
      const params = menuProps.value.actionParams[item.text] || [];
      if (item.onPress) item.onPress(...params);
      state.value = CONTEXT_MENU_STATE.END;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, item]);
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsxs(AnimatedTouchable, {
      onPress: handleOnPress,
      activeOpacity: !item.isTitle ? 0.4 : 1,
      style: [styles.menuItem, borderStyles],
      children: [/*#__PURE__*/_jsx(Animated.Text, {
        style: [item.isTitle ? styles.menuItemTitleText : styles.menuItemText, textColor],
        children: item.text
      }), !item.isTitle && item.icon && (AnimatedIcon && typeof item.icon === 'string' ? /*#__PURE__*/_jsx(AnimatedIcon, {
        name: item.icon,
        size: 18,
        style: textColor
      }) : typeof item.icon === 'function' ? item.icon() : null)]
    }), item.withSeparator && /*#__PURE__*/_jsx(Separator, {})]
  });
};
const MenuItem = /*#__PURE__*/React.memo(MenuItemComponent, isEqual);
export default MenuItem;
//# sourceMappingURL=MenuItem.js.map