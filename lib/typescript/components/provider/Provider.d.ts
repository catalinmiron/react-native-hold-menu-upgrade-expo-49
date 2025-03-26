import React from 'react';
import { HoldMenuProviderProps } from './types';
import { StateProps, Action } from './reducer';
export interface Store {
    state: StateProps;
    dispatch?: React.Dispatch<Action>;
}
export declare let AnimatedIcon: any;
declare const Provider: React.MemoExoticComponent<({ children, theme: selectedTheme, iconComponent, safeAreaInsets, onOpen, onClose, }: HoldMenuProviderProps) => JSX.Element>;
export default Provider;
//# sourceMappingURL=Provider.d.ts.map