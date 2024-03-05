import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SCREEN_NAME } from "../Constant/ScreenName";
import { ICON_TYPES, ICON_TYPES_VS_CMP } from "../icons/constant";
import { getMargin } from "../helpers/Generalhelper";
import {
  DIMENSION,
  TEXT_TYPES,
  TEXT_TYPE_VS_FONT_SIZE,
  TEXT_TYPE_VS_LINE_HEIGHT,
} from "../Constant/GeneralConstant";
import Icon from "../icons/Icon";
import { FONT_FAMILY } from "../Constant/FontConstants";
import { COLORS } from "../Constant/ColorsContants";

const NAME_VS_ACTIVE_ICON_TYPES = {
  [SCREEN_NAME.Home]: ICON_TYPES.HOME_ICON,
  [SCREEN_NAME.MyPlaylist]: ICON_TYPES.MY_PLALIST_ICON,
  [SCREEN_NAME.MySchedule]: ICON_TYPES.SCHEDULE_ICON,
  [SCREEN_NAME.Like]: ICON_TYPES.LIKE_ICON,
};

const NAME_VS_ICON_TYPES = {
  [SCREEN_NAME.Home]: ICON_TYPES.HOME_ICON,
  [SCREEN_NAME.MyPlaylist]: ICON_TYPES.MY_PLALIST_ICON,
  [SCREEN_NAME.MySchedule]: ICON_TYPES.SCHEDULE_ICON,
  [SCREEN_NAME.Like]: ICON_TYPES.LIKE_ICON,
};

const CustomTabBar = (props) => {
  const { state, navigation } = props;

  const renderTabIcon = (name, isFocused) => {
    const iconType = isFocused
      ? NAME_VS_ACTIVE_ICON_TYPES[name]
      : NAME_VS_ICON_TYPES[name];

    console.log("iconType", iconType);

    return (
      <View style={styles.icon}>
        {
          <Icon
            type={iconType}
            fill={
              isFocused
                ? COLORS.WHITE_PRIMARY_COLOR
                : COLORS.WHITE_TERITARY_COLOR
            }
          />
        }
      </View>
    );
  };

  return (
    <View style={[styles.container]}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.tabItem, isFocused ? styles.focusedTabItem : {}]}
          >
            <View style={styles.labelContainer}>
              {renderTabIcon(route.name, isFocused)}
              <Text
                style={[
                  styles.label,
                  {
                    color: isFocused
                      ? COLORS.WHITE_PRIMARY_COLOR
                      : COLORS.WHITE_TERITARY_COLOR,
                  },
                ]}
              >
                {route.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 68,
    alignItems: "center",
    justifyContent: "center",
    width: DIMENSION.WIDTH,
    backgroundColor: "#121212",
  },
  tabItem: {
    // marginLeft: getMargin(33),
    // marginRight: getMargin(33),
    flex: 1,
    height: 40,
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  focusedTabItem: {},
  label: {
    fontFamily: FONT_FAMILY.MULISH_BOLD_600,
    fontSize: TEXT_TYPE_VS_FONT_SIZE[TEXT_TYPES.REGULAR],
    lineHeight: TEXT_TYPE_VS_LINE_HEIGHT[TEXT_TYPES.REGULAR],
  },
});

export default CustomTabBar;
