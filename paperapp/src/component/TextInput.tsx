import * as React from "react";
import { TextInput } from "react-native-paper";

const TextInputt = () => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      label="Email"
      value={text}
      onChangeText={(text) => setText(text)}
      placeholderTextColor={"#000"}
      passwordRules="required: upper; required: lower; required: digit; required: [-]; required: length(8);"
      style={{
        backgroundColor: "transparent",
        width: 200,
        height: 44,
        borderColor: "gray",
        borderWidth: 1,
        alignSelf: "center",
      }}
      contentStyle={{
        backgroundColor: "red",
        color: "black",
        fontSize: 20,
        fontVariant: ["small-caps"],
        fontStyle: "italic",
      }}
      maxLength={10}
    />
  );
};

export default TextInputt;
