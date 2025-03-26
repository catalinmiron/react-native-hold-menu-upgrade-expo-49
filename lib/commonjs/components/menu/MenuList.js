"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _calculations = require("../../utils/calculations");
var _expoBlur = require("expo-blur");
var _MenuItems = _interopRequireDefault(require("./MenuItems"));
var _constants = require("../../constants");
var _styles = _interopRequireDefault(require("./styles"));
var _hooks = require("../../hooks");
var _validations = require("../../utils/validations");
var _calculations2 = require("./calculations");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const AnimatedView = _reactNativeReanimated.default.createAnimatedComponent(_expoBlur.BlurView);
const MenuListComponent = () => {
  const {
    state,
    theme,
    menuProps
  } = (0, _hooks.useInternal)();
  const [itemList, setItemList] = _react.default.useState([]);
  const menuHeight = (0, _reactNativeReanimated.useDerivedValue)(() => {
    const itemsWithSeparator = menuProps.value.items.filter(item => item.withSeparator);
    return (0, _calculations.calculateMenuHeight)(menuProps.value.items.length, itemsWithSeparator.length);
  }, [menuProps]);
  const prevList = (0, _reactNativeReanimated.useSharedValue)([]);
  const messageStyles = (0, _reactNativeReanimated.useAnimatedStyle)(() => {
    const itemsWithSeparator = menuProps.value.items.filter(item => item.withSeparator);
    const translate = (0, _calculations.menuAnimationAnchor)(menuProps.value.anchorPosition, menuProps.value.itemWidth, menuProps.value.items.length, itemsWithSeparator.length);
    const _leftPosition = (0, _calculations2.leftOrRight)(menuProps);
    const menuScaleAnimation = () => state.value === _constants.CONTEXT_MENU_STATE.ACTIVE ? (0, _reactNativeReanimated.withSpring)(1, _constants.SPRING_CONFIGURATION_MENU) : (0, _reactNativeReanimated.withTiming)(0, {
      duration: _constants.HOLD_ITEM_TRANSFORM_DURATION
    });
    const opacityAnimation = () => (0, _reactNativeReanimated.withTiming)(state.value === _constants.CONTEXT_MENU_STATE.ACTIVE ? 1 : 0, {
      duration: _constants.HOLD_ITEM_TRANSFORM_DURATION
    });
    return {
      left: _leftPosition,
      height: menuHeight.value,
      opacity: opacityAnimation(),
      transform: [{
        translateX: translate.beginningTransformations.translateX
      }, {
        translateY: translate.beginningTransformations.translateY
      }, {
        scale: menuScaleAnimation()
      }, {
        translateX: translate.endingTransformations.translateX
      }, {
        translateY: translate.endingTransformations.translateY
      }]
    };
  });
  const animatedInnerContainerStyle = (0, _reactNativeReanimated.useAnimatedStyle)(() => {
    return {
      backgroundColor: theme.value === 'light' ? _constants.IS_IOS ? 'rgba(255, 255, 255, .75)' : 'rgba(255, 255, 255, .95)' : _constants.IS_IOS ? 'rgba(0,0,0,0.5)' : 'rgba(39, 39, 39, .8)'
    };
  }, [theme]);
  const animatedProps = (0, _reactNativeReanimated.useAnimatedProps)(() => {
    return {
      tint: theme.value
    };
  }, [theme]);
  const setter = items => {
    setItemList(items);
    prevList.value = items;
  };
  (0, _reactNativeReanimated.useAnimatedReaction)(() => menuProps.value.items, _items => {
    if (!(0, _validations.deepEqual)(_items, prevList.value)) {
      (0, _reactNativeReanimated.runOnJS)(setter)(_items);
    }
  }, [menuProps]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(AnimatedView, {
    intensity: 100,
    animatedProps: animatedProps,
    style: [_styles.default.menuContainer, messageStyles],
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeReanimated.default.View, {
      style: [_reactNative.StyleSheet.absoluteFillObject, _styles.default.menuInnerContainer, animatedInnerContainerStyle],
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItems.default, {
        items: itemList
      })
    })
  });
};
const MenuList = /*#__PURE__*/_react.default.memo(MenuListComponent);
var _default = exports.default = MenuList;
//# sourceMappingURL=MenuList.js.map