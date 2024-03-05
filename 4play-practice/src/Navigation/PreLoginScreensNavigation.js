import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SCREEN_NAME } from "../Constant/ScreenName";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ForgotPassword, Login, Register } from "../screens";
import { COLORS } from "../Constant/ColorsContants";

const Stack = createNativeStackNavigator();

const PreLoginScreensNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_NAME.Login}
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#000" },
      }}
    >
      <Stack.Screen name={SCREEN_NAME.Login} component={Login} />
      <Stack.Screen name={SCREEN_NAME.Register} component={Register} />
      <Stack.Screen
        name={SCREEN_NAME.ForgotPassword}
        component={ForgotPassword}
      />
    </Stack.Navigator>
  );
};

export default PreLoginScreensNavigation;

const styles = StyleSheet.create({});
