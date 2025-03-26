"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _MenuItem = _interopRequireDefault(require("./MenuItem"));
var _lodash = _interopRequireDefault(require("lodash.isequal"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const MenuItemsComponent = ({
  items
}) => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, items.map((item, index) => {
    return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
      key: index,
      item: item,
      isLast: items.length === index + 1
    });
  }));
};
const MenuItems = /*#__PURE__*/(0, _react.memo)(MenuItemsComponent, _lodash.default);
var _default = exports.default = MenuItems;
//# sourceMappingURL=MenuItems.js.map