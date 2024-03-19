// import React from "react";
// import * as eva from "@eva-design/eva";
// import { ApplicationProvider, Layout, Button } from "@ui-kitten/components";
// import { default as theme } from "./theme.json"; // <-- Import app theme
// import { default as mapping } from "./mapping.json"; // <-- Import app mapping

// export default () => (
//   <ApplicationProvider
//     {...eva}
//     theme={{ ...eva.dark, ...theme }}
//     customMapping={mapping}
//   >
//     <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Button>HOME</Button>
//     </Layout>
//   </ApplicationProvider>
// );

// import React from "react";
// import * as eva from "@eva-design/eva";
// import {
//   ApplicationProvider,
//   IconRegistry,
//   Layout,
//   Text,
// } from "@ui-kitten/components";
// import { EvaIconsPack } from "@ui-kitten/eva-icons";
// import { LoginButton } from "./src/Component/Login";
// import { Home } from "./src/Component/Home";

// const HomeScreen = () => (
//   <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//     <Text category="h1">HOME</Text>
//     <LoginButton />

//     <Home />
//   </Layout>
// );

// export default () => (
//   <>
//     <IconRegistry icons={EvaIconsPack} />
//     <ApplicationProvider {...eva} theme={eva.light}>
//       <HomeScreen />
//     </ApplicationProvider>
//   </>
// );

import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { AppNavigator } from "./src/Component/Navigator";

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <AppNavigator />
    </ApplicationProvider>
  </>
);
