import * as React from "react";
import { ProgressBar, MD3Colors } from "react-native-paper";

const Progree = () => (
  <ProgressBar
    progress={0.5}
    color={MD3Colors.secondary100}
    fillStyle={{ backgroundColor: "black" }}
  />
);

export default Progree;
