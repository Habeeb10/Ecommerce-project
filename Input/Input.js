import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

export const Input = ({
  placeHolder,
  style,
  type,
  onChange,
  secure,
  value,
  label,
  inputStyle,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.username}>{label}</Text>
      <TextInput
        value={value}
        keyboardType={type}
        style={[styles.input, inputStyle]}
        placeholder={placeHolder}
        placeholderTextColor="#383838"
        onChangeText={onChange}
        secureTextEntry={secure}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  username: {
    fontWeight: "600",
    fontSize: 16,
    color: "#3E3E3E",
    lineHeight: 27,
    // marginTop: 15,
    marginLeft:20,
    marginBottom:10
  },
  container: {
    marginTop: 30,
  },
  input: {
    width: "100%",
    // marginTop: 0,
    color: "#3D6670",
    fontSize: 15,
    height: 60,
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 30,
    paddingLeft: 20,
  },
});
