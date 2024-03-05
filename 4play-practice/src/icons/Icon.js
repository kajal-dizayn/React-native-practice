import React from "react";
import { ICON_TYPES_VS_CMP } from "./constant";

const Icon = ({ type, fill, ...rest }) => {
  const IconCmp = type ? ICON_TYPES_VS_CMP[type] : null;

  if (!IconCmp) return null;

  return <IconCmp {...rest} fill={fill} />;
};

export default Icon;
