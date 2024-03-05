import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TabNavigation from "./TabNavigation";
import PreLoginScreensNavigation from "./PreLoginScreensNavigation";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PostLoginScreensNavigation from "./PostLoginScreensNavigation";
import { COLORS } from "../Constant/ColorsContants";

const Navigation = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        {
          flex: 1,
          width: "100%",
          paddingTop: insets.top,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          backgroundColor: COLORS.GRAY_BACKGROUND_COLOR,
        },
      ]}
    >
      {/* <PreLoginScreensNavigation /> */}

      <PostLoginScreensNavigation />
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
