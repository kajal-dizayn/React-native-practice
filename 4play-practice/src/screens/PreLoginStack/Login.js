import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { getMargin, isEmptyObject } from "../../helpers/Generalhelper";

import {
  DIMENSION,
  TEXT_TYPES,
  TEXT_TYPE_VS_FONT_SIZE,
  TEXT_TYPE_VS_LINE_HEIGHT,
} from "../../Constant/GeneralConstant";
import { FONT_FAMILY } from "../../Constant/FontConstants";
import { COLORS } from "../../Constant/ColorsContants";
import Icon from "../../icons/Icon";
import { ICON_TYPES } from "../../icons/constant";
import { SCREEN_NAME } from "../../Constant/ScreenName";

const Login = ({ navigation }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const [formvalues, setFormValues] = React.useState({
    username: "",
    password: "",
  });

  const [error, setError] = React.useState({
    username: "",
    password: "",
  });

  const handleForgotPassword = () => {
    navigation.navigate(SCREEN_NAME.ForgotPassword);
  };
  const handleEyeIconPress = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginPress = () => {
    const err = {
      username: formvalues.username ? "" : "Username is required",
      password: formvalues.password ? "" : "Password is required",
    };
    console.log("err", err);
    console.log("isEmptyObject(err)", !isEmptyObject(err));
    console.log(formvalues, "formvalues");
    setError(err);
    if (!isEmptyObject(err)) return;
    console.log("formvalues", formvalues);
  };

  const handleChange = (name, value) => {
    console.log("name", name, "value", value);
    setFormValues({ ...formvalues, [name]: value });
    setError({ ...error, [name]: "" });
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.login}>
          <View style={styles.logo}>
            <Icon type={ICON_TYPES.LOGO_ICON} />
          </View>
          <TouchableWithoutFeedback>
            <>
              <TextInput
                placeholder="Username"
                style={styles.input}
                placeholderTextColor={"#7D7D7D"}
                inputMode="email"
                onChangeText={(value) => handleChange("username", value)}
                value={formvalues.username}
              />
              {
                <Text
                  style={{
                    color: "red",
                    paddingBottom: error.username ? getMargin(16) : 0,
                  }}
                >
                  {error.username ? error.username : ""}
                </Text>
              }
            </>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <>
              <View
                style={[
                  styles.inputContainer,
                  {
                    paddingBottom: error.password
                      ? getMargin(16)
                      : getMargin(20),
                  },
                ]}
              >
                <TextInput
                  secureTextEntry={!showPassword}
                  placeholder="Password"
                  style={styles.inputpass}
                  placeholderTextColor={"#7D7D7D"}
                  onChangeText={(value) => handleChange("password", value)}
                  value={formvalues.password}
                />

                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={handleEyeIconPress}
                >
                  <Icon
                    type={
                      showPassword ? ICON_TYPES.OPEN_EYE : ICON_TYPES.CLOSE_EYE
                    }
                  />
                </TouchableOpacity>
              </View>
              {
                <Text
                  style={{
                    color: "red",
                    paddingBottom: error.password ? getMargin(16) : 0,
                  }}
                >
                  {error.password ? error.password : ""}
                </Text>
              }
            </>
          </TouchableWithoutFeedback>
          <Text style={styles.forgotPassword} onPress={handleForgotPassword}>
            Forgot Password?
          </Text>

          <TouchableOpacity onPress={handleLoginPress} style={styles.btn}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingLeft: getMargin(18),
    paddingRight: getMargin(18),
  },
  login: {
    flex: 1,
    justifyContent: "center",

    marginTop: getMargin(60),

    width: "100%",
  },

  logo: {
    display: "flex",

    alignItems: "center",
    marginBottom: getMargin(20),
  },
  input: {
    marginBottom: getMargin(20),
    width: "100%",
    // width: DIMENSION.WIDTH,
    height: 50,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#313131",
    backgroundColor: "#1E1E1E",
    paddingLeft: getMargin(24),
    paddingRight: getMargin(24),
    paddingTop: getMargin(14),
    paddingBottom: getMargin(14),
    color: "#fff",
    fontFamily: FONT_FAMILY.ROBOTO,
    fontSize: TEXT_TYPE_VS_FONT_SIZE[TEXT_TYPES.MEDIUM],
    lineHeight: TEXT_TYPE_VS_LINE_HEIGHT[TEXT_TYPE_VS_FONT_SIZE.MEDIUM],
  },
  inputpass: {
    width: "90%",
    color: "#fff",
    fontFamily: FONT_FAMILY.ROBOTO,
    fontSize: TEXT_TYPE_VS_FONT_SIZE[TEXT_TYPES.MEDIUM],
    lineHeight: TEXT_TYPE_VS_LINE_HEIGHT[TEXT_TYPE_VS_FONT_SIZE.MEDIUM],
  },
  inputContainer: {
    marginBottom: getMargin(20),
    width: "100%",
    // width: DIMENSION.WIDTH,
    height: 50,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#313131",
    backgroundColor: "#1E1E1E",
    paddingLeft: getMargin(24),
    paddingRight: getMargin(24),
    paddingTop: getMargin(14),
    paddingBottom: getMargin(14),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  forgotPassword: {
    color: COLORS.WHITE_PRIMARY_COLOR,
    fontSize: TEXT_TYPE_VS_FONT_SIZE[TEXT_TYPES.SMALL_TEXT],
    lineHeight: TEXT_TYPE_VS_LINE_HEIGHT[TEXT_TYPE_VS_FONT_SIZE.SMALL_TEXT],
  },

  btn: {
    width: "100%",
    marginTop: getMargin(20),
    backgroundColor: COLORS.THEME_COLOR,
    color: COLORS.WHITE_PRIMARY_COLOR,
    borderRadius: 25,
    height: 40,
  },
  btnText: {
    color: COLORS.BTN_COLOR,
    textAlign: "center",
    lineHeight: 40,
    fontSize: TEXT_TYPE_VS_FONT_SIZE[TEXT_TYPES.MEDIUM],
    fontFamily: FONT_FAMILY.ROBOTO,
  },
});
