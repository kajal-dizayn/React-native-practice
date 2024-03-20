import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import Buttonnn from "./Button";
import Progree from "./ProgressBar";
import SegmentBtn from "./SegmentsBtn";

const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Text>HomeScreen</Text>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <Buttonnn /> */}
      <SegmentBtn />

      {/* <Progree /> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
