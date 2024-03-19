import React from "react";
import { SafeAreaView } from "react-native";
import {
  Button,
  Divider,
  Layout,
  Text,
  TopNavigation,
} from "@ui-kitten/components";
import { ButtonAccessoriesShowcase } from "./ButtonStatus";

export const Home = ({ navigation }) => {
  const navigateDetails = () => {
    navigation.navigate("Details");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="MyApp" alignment="center" />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>

        <Button style={{ marginVertical: 40 }}>
          {(evaProps) => <Text {...evaProps}>BUTTON</Text>}
        </Button>

        <ButtonAccessoriesShowcase />
      </Layout>
    </SafeAreaView>
  );
};
