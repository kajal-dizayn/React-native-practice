import * as React from "react";
import { Button } from "react-native-paper";

const Buttonnn = () => (
  <Button
    icon="camera"
    mode="text"
    onPress={() => console.log("Pressed")}
    style={{
      backgroundColor: "transparent",
      width: 200,
      height: 44,
      borderColor: "gray",
      borderWidth: 1,
      alignSelf: "center",
    }}
    buttonColor="red"
    dark={true}
    labelStyle={{ color: "black" }}
  >
    Press me
  </Button>
);

export default Buttonnn;
