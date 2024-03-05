/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Animated,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { isEmpty, noop } from "lodash";

import Text from "../Text";

import { FONT_FAMILY } from "../Constant/FontConstants";
import { COLORS } from "../Constant/ColorsContants";
import {
  TEXT_TYPES,
  TEXT_TYPE_VS_FONT_SIZE,
  TEXT_TYPE_VS_LINE_HEIGHT,
} from "../Constant/GeneralConstant";

const COLOR = {
  ERROR: "#FF0000",
  TEXT: "#7D7D7D",
  INPUT_BG: "#F2F3F5",
  INPUT_TEXT: "#000",
};

const DIMENSION = {
  WIDTH: Dimensions.get("window").width,
  HEIGHT: Dimensions.get("window").height,
  SCALE: Dimensions.get("window").scale,
  FONT_SCALE: Dimensions.get("window").fontScale,
};

const Input = (props) => {
  const {
    value,
    onChangeText,
    error,
    label,
    style,
    inputRef,
    onFocus,
    returnKeyType,
    onSubmitEditing,
    blurOnSubmit,
    type,
    keyboardType,
    maxLength,
    rightIcon,
    onRightIconPress,
    inputContainerStyle,
    onBlur,
    disabled,
  } = props;

  const [lableFontSize, setLabelFontSize] = React.useState(14);
  const [lableFontColor, setLabelFontColor] = React.useState(
    COLORS.FONT_SECONDRY_COLOR
  );
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const textPos = React.useRef < Animated.Value > new Animated.Value(0).current;
  console.log("textPos", textPos);
  const currentLabelPos = React.useRef(0);
  const isKeyBoardOpen = React.useRef(false);
  const isLabelShifted = React.useRef(false);

  const hasRightIcon = !isEmpty(rightIcon) || type === "password";

  const handleLabelTransition = (toValue, fontSize, color) => {
    if (!isEmpty(value)) {
      return;
    }
    currentLabelPos.current += toValue;
    setLabelFontSize(fontSize);
    setLabelFontColor(color);
    Animated.timing(textPos, {
      toValue,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  React.useEffect(() => {
    if (!isEmpty(value)) {
      if (!isLabelShifted.current) {
        Animated.timing(textPos, {
          toValue: -15,
          duration: 200,
          useNativeDriver: true,
        }).start();
        isLabelShifted.current = true;
      }
    } else {
      isLabelShifted.current = false;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleRightIconPress = () => {
    setIsPasswordVisible(!isPasswordVisible);
    if (onRightIconPress) onRightIconPress();
  };

  const renderIcon = () => {
    if (type === "password") {
      return (
        <Icon
          type={
            isPasswordVisible
              ? ICON_TYPES.OPEN_EYE_ICON
              : ICON_TYPES.CLOSE_EYE_ICON
          }
        />
      );
    }
    return <Icon type={rightIcon} />;
  };

  return (
    <View style={[styles.outerContainer, style]}>
      <View style={[styles.container, inputContainerStyle]}>
        <TextInput
          ref={inputRef}
          style={[
            styles.input,

            {
              paddingRight: hasRightIcon ? 40 : 20,
              marginTop: isEmpty(label) ? 0 : 8,
            },
          ]}
          onFocus={() => {
            handleLabelTransition(-15, 12, COLORS.FONT_PRIMARY_COLOR);
            if (onFocus) onFocus();
            isKeyBoardOpen.current = true;
          }}
          onBlur={() => {
            handleLabelTransition(0, 14, COLORS.FONT_SECONDRY_COLOR);
            isKeyBoardOpen.current = false;
            if (onBlur) onBlur();
          }}
          value={value}
          onChangeText={onChangeText}
          cursorColor="#000"
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          blurOnSubmit={blurOnSubmit}
          secureTextEntry={type === "password" && !isPasswordVisible}
          keyboardType={keyboardType}
          maxLength={maxLength}
          editable={!disabled}
        />
        {hasRightIcon && (
          <TouchableOpacity
            onPress={handleRightIconPress}
            style={styles.iconContainer}
          >
            {renderIcon()}
          </TouchableOpacity>
        )}
        <Animated.View
          style={[
            styles.labelContainer,

            {
              // transform: [{ translateY: textPos }],
            },
          ]}
        >
          {label && (
            <TouchableOpacity
              onPress={() => {
                if (!isKeyBoardOpen.current) {
                  inputRef?.current?.focus();
                }
              }}
            >
              <Text
                style={[
                  styles.text,
                  {
                    fontSize: lableFontSize,
                    lineHeight: lableFontSize,
                    color: lableFontColor,
                    marginTop: 20,
                  },
                ]}
              >
                {label ? label : ""}
              </Text>
            </TouchableOpacity>
          )}
        </Animated.View>
      </View>
      {!isEmpty(error) && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

Input.defaultProps = {
  error: "",
  style: {},
  onFocus: noop,
};

export default Input;

const styles = StyleSheet.create({
  outerContainer: {
    width: "100%",
    alignSelf: "center",
  },
  container: {
    height: 62,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  input: {
    height: "100%",
    width: "100%",
    paddingLeft: 20,
    paddingTop: 20,
    borderBottomWidth: 0,
    // outlineStyle: "none",
    backgroundColor: COLORS.GRAY_BACKGROUND_COLOR,
    textDecorationLine: "none",
    borderRadius: 8,
    color: COLORS.FONT_SECONDRY_COLOR,
    fontFamily: FONT_FAMILY.ROBOTO,
    fontSize: TEXT_TYPE_VS_FONT_SIZE[TEXT_TYPES.MEDIUM],
    fontWeight: "400",
    lineHeight: TEXT_TYPE_VS_FONT_SIZE[TEXT_TYPES.MEDIUM],
    letterSpacing: 0.02,
    textAlign: "left",
    // marginTop: 15,
  },
  labelContainer: {
    position: "absolute",
    top: 10,
    left: 20,
  },
  text: {
    color: COLORS.FONT_SECONDRY_COLOR,
    fontSize: TEXT_TYPE_VS_FONT_SIZE[TEXT_TYPES.REGULAR],
    lineHeight: TEXT_TYPE_VS_LINE_HEIGHT[TEXT_TYPE_VS_FONT_SIZE.REGULAR],

    // paddingBottom: 10,
  },
  error: {
    fontSize: 12,
    lineHeight: 12,
    color: COLOR.ERROR,

    marginTop: 4,
    textAlign: "left",
    paddingLeft: 20,
  },
  iconContainer: {
    position: "absolute",
    width: 40,
    right: 0,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",

    zIndex: 10,
  },
});
