"use strict";

import React, { memo } from 'react';
import MenuItem from './MenuItem';
import isEqual from 'lodash.isequal';
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
const MenuItemsComponent = ({
  items
}) => {
  return /*#__PURE__*/_jsx(_Fragment, {
    children: items.map((item, index) => {
      return /*#__PURE__*/_jsx(MenuItem, {
        item: item,
        isLast: items.length === index + 1
      }, index);
    })
  });
};
const MenuItems = /*#__PURE__*/memo(MenuItemsComponent, isEqual);
export default MenuItems;
//# sourceMappingURL=MenuItems.js.map