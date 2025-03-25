"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _expoBlur = require("expo-blur");
var _styles = require("./styles");
var _constants = require("../../constants");
var _constants2 = require("./constants");
var _hooks = require("../../hooks");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// Components

// Utils

const AnimatedBlurView = _constants.IS_IOS ? _reactNativeReanimated.default.createAnimatedComponent(_expoBlur.BlurView) : _reactNativeReanimated.default.View;
const BackdropComponent = () => {
  const {
    state,
    theme
  } = (0, _hooks.useInternal)();
  const tapGestureEvent = (0, _reactNativeReanimated.useAnimatedGestureHandler)({
    onStart: (event, context) => {
      context.startPosition = {
        x: event.x,
        y: event.y
      };
    },
    onCancel: () => {
      state.value = _constants.CONTEXT_MENU_STATE.END;
    },
    onEnd: (event, context) => {
      const distance = Math.hypot(event.x - context.startPosition.x, event.y - context.startPosition.y);
      const shouldClose = distance < 10;
      const isStateActive = state.value === _constants.CONTEXT_MENU_STATE.ACTIVE;
      if (shouldClose && isStateActive) {
        state.value = _constants.CONTEXT_MENU_STATE.END;
      }
    }
  }, [state]);
  const animatedContainerStyle = (0, _reactNativeReanimated.useAnimatedStyle)(() => {
    const topValueAnimation = () => state.value === _constants.CONTEXT_MENU_STATE.ACTIVE ? 0 : (0, _reactNativeReanimated.withDelay)(_constants.HOLD_ITEM_TRANSFORM_DURATION, (0, _reactNativeReanimated.withTiming)(_constants.WINDOW_HEIGHT, {
      duration: 0
    }));

    // const opacityValueAnimation = () =>
    //   withTiming(state.value === CONTEXT_MENU_STATE.ACTIVE ? 1 : 0, {
    //     duration: HOLD_ITEM_TRANSFORM_DURATION,
    //   });

    return {
      top: topValueAnimation()
      // opacity: opacityValueAnimation(),
    };
  });
  const animatedContainerProps = (0, _reactNativeReanimated.useAnimatedProps)(() => {
    return {
      intensity: (0, _reactNativeReanimated.withTiming)(state.value === _constants.CONTEXT_MENU_STATE.ACTIVE ? 100 : 0, {
        duration: _constants.HOLD_ITEM_TRANSFORM_DURATION
      })
    };
  });
  const animatedInnerContainerStyle = (0, _reactNativeReanimated.useAnimatedStyle)(() => {
    const backgroundColor = theme.value === 'light' ? _constants2.BACKDROP_LIGHT_BACKGROUND_COLOR : _constants2.BACKDROP_DARK_BACKGROUND_COLOR;
    return {
      backgroundColor
    };
  }, [theme]);
  return /*#__PURE__*/_react.default.createElement(_reactNativeGestureHandler.TapGestureHandler, {
    onHandlerStateChange: tapGestureEvent
  }, /*#__PURE__*/_react.default.createElement(AnimatedBlurView
  // @ts-ignore
  , {
    tint: "default",
    animatedProps: animatedContainerProps,
    style: [_styles.styles.container, animatedContainerStyle]
  }, /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    style: [{
      ..._reactNative.StyleSheet.absoluteFillObject
    }, animatedInnerContainerStyle]
  })));
};
const Backdrop = /*#__PURE__*/(0, _react.memo)(BackdropComponent);
var _default = exports.default = Backdrop;
//# sourceMappingURL=Backdrop.js.map