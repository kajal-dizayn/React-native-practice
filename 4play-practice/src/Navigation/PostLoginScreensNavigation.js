import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TabNavigation from "./TabNavigation";
import { createStackNavigator } from "@react-navigation/stack";
import { SCREEN_NAME } from "../Constant/ScreenName";
import { Home } from "../screens/PostLoginStack";

const Stack = createStackNavigator();

const PostLoginScreensNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_NAME.Home}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={SCREEN_NAME.Home} component={TabNavigation} />
    </Stack.Navigator>
  );
};

export default PostLoginScreensNavigation;

const styles = StyleSheet.create({});
