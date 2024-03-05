/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text as NativeText,
  TextStyle,
} from "react-native";
import { TEXT_TYPES } from "./Constant/GeneralConstant";
import { FONT_FAMILY } from "./Constant/FontConstants";

const TEXT_TYPE_VS_FONT_SIZE = {
  [TEXT_TYPES.HEADER]: 32,
  [TEXT_TYPES.REGULAR]: 12,
  [TEXT_TYPES.MEDIUM]: 14,
  [TEXT_TYPES.TITLE]: 18,
  [TEXT_TYPES.LARGE_TITLE]: 45,
  [TEXT_TYPES.SMALL_TEXT]: 13,
};

const TEXT_TYPE_VS_LINE_HEIGHT = {
  [TEXT_TYPES.HEADER]: 38,
  [TEXT_TYPES.REGULAR]: 20,
  [TEXT_TYPES.MEDIUM]: 26,
  [TEXT_TYPES.TITLE]: 48,
  [TEXT_TYPES.LARGE_TITLE]: 67,
  [TEXT_TYPES.SMALL_TEXT]: 18,
};

const Text = (props) => {
  const { children, style, type } = props;

  return (
    <NativeText
      style={[
        styles.text,

        {
          fontSize: TEXT_TYPE_VS_FONT_SIZE?.[type],
          lineHeight: TEXT_TYPE_VS_LINE_HEIGHT?.[type],
        },
        style,
      ]}
    >
      {children}
    </NativeText>
  );
};

Text.defaultProps = {
  style: {},
  type: TEXT_TYPES.REGULAR,
};

export default Text;

const styles = StyleSheet.create({
  text: {
    fontFamily: FONT_FAMILY.ROBOTO,
    fontSize: 14,
    lineHeight: 14,
  },
});
