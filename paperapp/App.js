// import * as React from "react";
// import { AppRegistry } from "react-native";
// import { PaperProvider } from "react-native-paper";
// import { name as appName } from "./app.json";
// import App from "./src/App";

// export default function Main() {
//   return (
//     <PaperProvider>
//       <App />
//     </PaperProvider>
//   );
// }

// AppRegistry.registerComponent(appName, () => Main);

import * as React from "react";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import App from "./src/App";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
    background: "green",
  },
};

export default function Main() {
  return <App />;
}
