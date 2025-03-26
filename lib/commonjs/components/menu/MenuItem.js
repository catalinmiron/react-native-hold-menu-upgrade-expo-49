"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _Separator = _interopRequireDefault(require("./Separator"));
var _styles = _interopRequireDefault(require("./styles"));
var _hooks = require("../../hooks");
var _constants = require("../../constants");
var _constants2 = require("./constants");
var _lodash = _interopRequireDefault(require("lodash.isequal"));
var _calculations = require("./calculations");
var _Provider = require("../provider/Provider");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// @ts-ignore
const AnimatedTouchable = _reactNativeReanimated.default.createAnimatedComponent(_reactNative.TouchableOpacity);
const MenuItemComponent = ({
  item,
  isLast
}) => {
  const {
    state,
    theme,
    menuProps
  } = (0, _hooks.useInternal)();
  const borderStyles = (0, _reactNativeReanimated.useAnimatedStyle)(() => {
    const borderBottomColor = theme.value === 'dark' ? _constants2.BORDER_DARK_COLOR : _constants2.BORDER_LIGHT_COLOR;
    return {
      borderBottomColor,
      borderBottomWidth: isLast ? 0 : 1
    };
  }, [theme, isLast, item]);
  const textColor = (0, _reactNativeReanimated.useAnimatedStyle)(() => {
    return {
      color: (0, _calculations.getColor)(item.isTitle, item.isDestructive, theme.value)
    };
  }, [theme, item]);
  const handleOnPress = (0, _react.useCallback)(() => {
    if (!item.isTitle) {
      const params = menuProps.value.actionParams[item.text] || [];
      if (item.onPress) item.onPress(...params);
      state.value = _constants.CONTEXT_MENU_STATE.END;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, item]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(AnimatedTouchable, {
      onPress: handleOnPress,
      activeOpacity: !item.isTitle ? 0.4 : 1,
      style: [_styles.default.menuItem, borderStyles],
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeReanimated.default.Text, {
        style: [item.isTitle ? _styles.default.menuItemTitleText : _styles.default.menuItemText, textColor],
        children: item.text
      }), !item.isTitle && item.icon && (_Provider.AnimatedIcon && typeof item.icon === 'string' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Provider.AnimatedIcon, {
        name: item.icon,
        size: 18,
        style: textColor
      }) : typeof item.icon === 'function' ? item.icon() : null)]
    }), item.withSeparator && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Separator.default, {})]
  });
};
const MenuItem = /*#__PURE__*/_react.default.memo(MenuItemComponent, _lodash.default);
var _default = exports.default = MenuItem;
//# sourceMappingURL=MenuItem.js.map