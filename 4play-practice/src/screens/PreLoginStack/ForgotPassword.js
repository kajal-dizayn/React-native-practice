import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { getMargin } from "../../helpers/Generalhelper";
import Icon from "../../icons/Icon";
import { ICON_TYPES } from "../../icons/constant";
import { FONT_FAMILY } from "../../Constant/FontConstants";
import {
  TEXT_TYPES,
  TEXT_TYPE_VS_FONT_SIZE,
  TEXT_TYPE_VS_LINE_HEIGHT,
} from "../../Constant/GeneralConstant";
import { COLORS } from "../../Constant/ColorsContants";

const ForgotPassword = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.forgot}>
      <TouchableOpacity onPress={handleBackPress}>
        <Icon type={ICON_TYPES.BACK_ICON} />
      </TouchableOpacity>
      <Text style={styles.title}>ForgotPassword</Text>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  forgot: {
    paddingTop: 20,
    paddingLeft: getMargin(18),
    paddingRight: getMargin(18),
    display: "flex",
    flexDirection: "row",
    height: 50,
    alignItems: "center",
  },

  title: {
    fontFamily: FONT_FAMILY.MULISH_BOLD_600,
    lineHeight: TEXT_TYPE_VS_LINE_HEIGHT[TEXT_TYPES.REGULAR],
    fontSize: TEXT_TYPE_VS_FONT_SIZE[TEXT_TYPES.REGULAR],
    color: COLORS.WHITE_TERITARY_COLOR,
    marginLeft: getMargin(20),
  },
});
