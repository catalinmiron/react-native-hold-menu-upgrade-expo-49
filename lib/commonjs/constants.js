"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WINDOW_WIDTH = exports.WINDOW_HEIGHT = exports.SPRING_CONFIGURATION_MENU = exports.SPRING_CONFIGURATION = exports.MENU_WIDTH = exports.MENU_TRANSFORM_ORIGIN_TOLERENCE = exports.MENU_CONTAINER_WIDTH = exports.IS_IOS = exports.HOLD_ITEM_TRANSFORM_DURATION = exports.HOLD_ITEM_SCALE_DOWN_VALUE = exports.HOLD_ITEM_SCALE_DOWN_DURATION = exports.FONT_SCALE = exports.CONTEXT_MENU_STATE = void 0;
var _reactNative = require("react-native");
const HOLD_ITEM_TRANSFORM_DURATION = exports.HOLD_ITEM_TRANSFORM_DURATION = 150;
const HOLD_ITEM_SCALE_DOWN_VALUE = exports.HOLD_ITEM_SCALE_DOWN_VALUE = 0.95;
const HOLD_ITEM_SCALE_DOWN_DURATION = exports.HOLD_ITEM_SCALE_DOWN_DURATION = 210;
const SPRING_CONFIGURATION = exports.SPRING_CONFIGURATION = {
  damping: 33,
  mass: 1.03,
  stiffness: 500,
  restDisplacementThreshold: 0.001,
  restSpeedThreshold: 0.001
};
const SPRING_CONFIGURATION_MENU = exports.SPRING_CONFIGURATION_MENU = {
  damping: 39,
  mass: 1.09,
  stiffness: 500,
  restDisplacementThreshold: 0.001,
  restSpeedThreshold: 0.001
};
var CONTEXT_MENU_STATE = exports.CONTEXT_MENU_STATE = /*#__PURE__*/function (CONTEXT_MENU_STATE) {
  CONTEXT_MENU_STATE[CONTEXT_MENU_STATE["UNDETERMINED"] = 0] = "UNDETERMINED";
  CONTEXT_MENU_STATE[CONTEXT_MENU_STATE["ACTIVE"] = 1] = "ACTIVE";
  CONTEXT_MENU_STATE[CONTEXT_MENU_STATE["END"] = 2] = "END";
  return CONTEXT_MENU_STATE;
}(CONTEXT_MENU_STATE || {});
const {
  height: WINDOW_HEIGHT,
  width: WINDOW_WIDTH
} = _reactNative.Dimensions.get('screen');
exports.WINDOW_WIDTH = WINDOW_WIDTH;
exports.WINDOW_HEIGHT = WINDOW_HEIGHT;
const MENU_CONTAINER_WIDTH = exports.MENU_CONTAINER_WIDTH = 100;
const MENU_WIDTH = exports.MENU_WIDTH = WINDOW_WIDTH * 60 / 100;
const MENU_TRANSFORM_ORIGIN_TOLERENCE = exports.MENU_TRANSFORM_ORIGIN_TOLERENCE = 10;
const IS_IOS = exports.IS_IOS = _reactNative.Platform.OS === 'ios';
const FONT_SCALE = exports.FONT_SCALE = _reactNative.Dimensions.get('screen').fontScale;
//# sourceMappingURL=constants.js.map