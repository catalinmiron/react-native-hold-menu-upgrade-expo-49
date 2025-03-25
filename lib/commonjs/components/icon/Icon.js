"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _hooks = require("../../hooks");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// Update iconComponent type, React.ComponentClass<IconComponentProps, any>

const Icon = ({
  iconComponent,
  name
}) => {
  const {
    theme
  } = (0, _hooks.useInternal)();
  let AnimatedIcon = _reactNativeReanimated.default.createAnimatedComponent(iconComponent);
  const iconProps = (0, _reactNativeReanimated.useAnimatedProps)(() => {
    return {
      color: theme.value === 'light' ? 'black' : 'white'
    };
  }, [theme]);

  // @ts-ignore
  return /*#__PURE__*/_react.default.createElement(AnimatedIcon, {
    name: name,
    size: 18,
    animatedProps: iconProps
  });
};
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(Icon);
//# sourceMappingURL=Icon.js.map