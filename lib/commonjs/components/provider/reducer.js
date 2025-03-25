"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.initialState = exports.ActionType = void 0;
var _constants = require("../../constants");
let ActionType = exports.ActionType = /*#__PURE__*/function (ActionType) {
  ActionType["Active"] = "Active";
  ActionType["End"] = "End";
  ActionType["Theme"] = "Theme";
  return ActionType;
}({});
const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.Active:
      return {
        ...state,
        active: _constants.CONTEXT_MENU_STATE.ACTIVE,
        activeItem: action.activeItem
      };
    case ActionType.End:
      return {
        ...state,
        active: _constants.CONTEXT_MENU_STATE.END,
        activeItem: null
      };
    case ActionType.Theme:
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark'
      };
    default:
      return state;
  }
};
exports.reducer = reducer;
const initialState = exports.initialState = {
  active: 0,
  activeItem: null,
  theme: 'light'
};
//# sourceMappingURL=reducer.js.map