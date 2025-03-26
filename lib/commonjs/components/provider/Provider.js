"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AnimatedIcon = void 0;
var _react = _interopRequireWildcard(require("react"));
var _portal = require("@gorhom/portal");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _backdrop = require("../backdrop");
var _internal = require("../../context/internal");
var _constants = require("../../constants");
var _menu = _interopRequireDefault(require("../menu"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// Components

// Utils

let AnimatedIcon = exports.AnimatedIcon = void 0;
const ProviderComponent = ({
  children,
  theme: selectedTheme,
  iconComponent,
  safeAreaInsets,
  onOpen,
  onClose
}) => {
  if (iconComponent) exports.AnimatedIcon = AnimatedIcon = _reactNativeReanimated.default.createAnimatedComponent(iconComponent);
  const state = (0, _reactNativeReanimated.useSharedValue)(_constants.CONTEXT_MENU_STATE.UNDETERMINED);
  const theme = (0, _reactNativeReanimated.useSharedValue)(selectedTheme || 'light');
  const menuProps = (0, _reactNativeReanimated.useSharedValue)({
    itemHeight: 0,
    itemWidth: 0,
    itemX: 0,
    itemY: 0,
    items: [],
    anchorPosition: 'top-center',
    menuHeight: 0,
    transformValue: 0,
    actionParams: {}
  });
  (0, _react.useEffect)(() => {
    theme.value = selectedTheme || 'light';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTheme]);
  (0, _reactNativeReanimated.useAnimatedReaction)(() => state.value, state => {
    switch (state) {
      case _constants.CONTEXT_MENU_STATE.ACTIVE:
        {
          if (onOpen) (0, _reactNativeReanimated.runOnJS)(onOpen)();
          break;
        }
      case _constants.CONTEXT_MENU_STATE.END:
        {
          if (onClose) (0, _reactNativeReanimated.runOnJS)(onClose)();
          break;
        }
    }
  }, [state]);
  const internalContextVariables = (0, _react.useMemo)(() => ({
    state,
    theme,
    menuProps,
    safeAreaInsets: safeAreaInsets || {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  }), [state, theme, menuProps, safeAreaInsets]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeGestureHandler.GestureHandlerRootView, {
    style: {
      flex: 1
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_internal.InternalContext.Provider, {
      value: internalContextVariables,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_portal.PortalProvider, {
        children: [children, /*#__PURE__*/(0, _jsxRuntime.jsx)(_backdrop.Backdrop, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_menu.default, {})]
      })
    })
  });
};
const Provider = /*#__PURE__*/(0, _react.memo)(ProviderComponent);
var _default = exports.default = Provider;
//# sourceMappingURL=Provider.js.map