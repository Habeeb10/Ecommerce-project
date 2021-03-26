import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export const Touch = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.6}
    >
      <Text style={styles.touch}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#327FEB",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    alignSelf: "center",
    borderRadius: 30,
  },
  touch: {
    color: "#ffffff",
    fontSize: 18,
  },
});
