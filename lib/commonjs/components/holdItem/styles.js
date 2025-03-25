"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
const styles = _reactNative.StyleSheet.create({
  holdItem: {
    zIndex: 10,
    position: 'absolute'
  },
  portalOverlay: {
    ..._reactNative.StyleSheet.absoluteFillObject,
    zIndex: 15
  }
});
var _default = exports.default = styles;
//# sourceMappingURL=styles.js.map