"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _hooks = require("../../hooks");
var _constants = require("./constants");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Separator = () => {
  const {
    theme
  } = (0, _hooks.useInternal)();
  const separatorStyles = (0, _reactNativeReanimated.useAnimatedStyle)(() => {
    return {
      backgroundColor: theme.value === 'dark' ? _constants.BORDER_DARK_COLOR : _constants.BORDER_LIGHT_COLOR
    };
  }, [theme]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeReanimated.default.View, {
    style: [styles.separator, {
      ...separatorStyles
    }]
  });
};
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(Separator);
const styles = _reactNative.StyleSheet.create({
  separator: {
    width: '100%',
    height: 8
  }
});
//# sourceMappingURL=Separator.js.map