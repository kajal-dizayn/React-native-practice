import { PixelRatio } from "react-native";
import { every, isEmpty } from "lodash";
//import * as FileSystem from 'expo-file-system';
import * as FileSystem from "expo-file-system";
import { DIMENSION } from "../Constant/GeneralConstant";

// const { setSelectedImage } = inputFilesStore();

export const getMargin = (value) => {
  const temp = PixelRatio.getPixelSizeForLayoutSize(value);

  //   return (value * value) / temp;
  return (value * DIMENSION.HEIGHT) / 850;
};
export const isEmptyObject = (obj) => every(obj, (i) => isEmpty(i));
