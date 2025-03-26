"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _MenuList = _interopRequireDefault(require("./MenuList"));
var _styles = _interopRequireDefault(require("./styles"));
var _hooks = require("../../hooks");
var _constants = require("../../constants");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const MenuComponent = () => {
  const {
    state,
    menuProps
  } = (0, _hooks.useInternal)();
  const wrapperStyles = (0, _reactNativeReanimated.useAnimatedStyle)(() => {
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
        translateY: state.value === _constants.CONTEXT_MENU_STATE.ACTIVE ? (0, _reactNativeReanimated.withSpring)(tY, _constants.SPRING_CONFIGURATION) : (0, _reactNativeReanimated.withTiming)(0, {
          duration: _constants.HOLD_ITEM_TRANSFORM_DURATION
        })
      }]
    };
  }, [menuProps]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeReanimated.default.View, {
    style: [_styles.default.menuWrapper, wrapperStyles],
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuList.default, {})
  });
};
const Menu = /*#__PURE__*/_react.default.memo(MenuComponent);
var _default = exports.default = Menu;
//# sourceMappingURL=Menu.js.map