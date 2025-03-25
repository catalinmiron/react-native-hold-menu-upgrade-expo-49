import React from 'react';
import { FlatListProps as RNFlatListProps } from 'react-native';
export type HoldMenuFlatListProps<T> = Omit<RNFlatListProps<T>, 'scrollEventThrottle'>;
declare const HoldMenuFlatList: React.MemoExoticComponent<(props: HoldMenuFlatListProps<any>) => JSX.Element>;
export default HoldMenuFlatList;
