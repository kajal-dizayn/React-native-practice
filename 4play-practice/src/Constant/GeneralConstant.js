import { Dimensions, Platform, StatusBar } from "react-native";

const { width, height, scale, fontScale } = Dimensions.get("window");

const WIDTH = width;
const CONTENT_WIDTH = Math.min(WIDTH * 0.9, 360);

export const DIMENSION = {
  WIDTH: width,
  HEIGHT: height,
  SCALE: scale,
  FONT_SCALE: fontScale,
  STATUS_BAR_HEIGHT: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
  CONTENT_WIDTH: Math.min(width * 0.9, 360),
  HORIZONTAL_PADDING: (WIDTH - CONTENT_WIDTH) / 2,
};

export const TEXT_TYPES = {
  HEADER: "header",
  REGULAR: "Regular",
  MEDIUM: "Medium",
  TITLE: "Title",
  TITLE_TWO: " Title two",
  SMALL_TEXT: "Small Text",
};

export const TEXT_TYPE_VS_FONT_SIZE = {
  [TEXT_TYPES.HEADER]: 32,
  [TEXT_TYPES.REGULAR]: 12,
  [TEXT_TYPES.MEDIUM]: 14,
  [TEXT_TYPES.TITLE]: 18,
  [TEXT_TYPES.TITLE_TWO]: 16,
  [TEXT_TYPES.SMALL_TEXT]: 13,
};

export const TEXT_TYPE_VS_LINE_HEIGHT = {
  [TEXT_TYPES.HEADER]: 38,
  [TEXT_TYPES.REGULAR]: 20,
  [TEXT_TYPES.MEDIUM]: 26,
  [TEXT_TYPES.TITLE]: 48,
  [TEXT_TYPES.TITLE_TWO]: 19,
  [TEXT_TYPES.SMALL_TEXT]: 18,
};

export const isAndroid = Platform.OS === "android";
