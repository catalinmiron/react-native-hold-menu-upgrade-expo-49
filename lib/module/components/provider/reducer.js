import { CONTEXT_MENU_STATE } from '../../constants';
export let ActionType = /*#__PURE__*/function (ActionType) {
  ActionType["Active"] = "Active";
  ActionType["End"] = "End";
  ActionType["Theme"] = "Theme";
  return ActionType;
}({});
export const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.Active:
      return {
        ...state,
        active: CONTEXT_MENU_STATE.ACTIVE,
        activeItem: action.activeItem
      };
    case ActionType.End:
      return {
        ...state,
        active: CONTEXT_MENU_STATE.END,
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
export const initialState = {
  active: 0,
  activeItem: null,
  theme: 'light'
};
//# sourceMappingURL=reducer.js.map