import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "../icons/Icon";
import { ICON_TYPES } from "../icons/constant";
import { getMargin } from "../helpers/Generalhelper";
import { DIMENSION } from "../Constant/GeneralConstant";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.icon}>
        4P forPlay
        {/* <Icon type={ICON_TYPES.LOGO_SMALL_ICON} /> */}
      </Text>
      <View style={styles.iconContainer}>
        <Icon type={ICON_TYPES.SEARCH_ICON} />
        <Icon type={ICON_TYPES.REFRESH_ICON} />
        <Icon type={ICON_TYPES.PROFILE_ICON} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: DIMENSION.WIDTH,
    marginTop: getMargin(20),
    height: 64,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: getMargin(16),
    paddingRight: getMargin(19),
  },

  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    color: "white",
  },
});
