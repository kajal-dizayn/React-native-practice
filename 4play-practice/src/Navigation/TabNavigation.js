import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SCREEN_NAME } from "../Constant/ScreenName";
import { Home, Like, MyPlaylist, MySchedule } from "../screens/PostLoginStack";
import CustomTabBar from "../component/CustomTabBar";
import Header from "../component/Header";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={SCREEN_NAME.Home}
      screenOptions={{
        // headerShown: false,
        header: Header,
      }}
      sceneContainerStyle={{
        backgroundColor: "#000",
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name={SCREEN_NAME.Home} component={Home} />
      <Tab.Screen name={SCREEN_NAME.MyPlaylist} component={MyPlaylist} />
      <Tab.Screen name={SCREEN_NAME.MySchedule} component={MySchedule} />
      <Tab.Screen name={SCREEN_NAME.Like} component={Like} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
