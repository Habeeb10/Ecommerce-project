import "react-native-gesture-handler";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Input } from "../Input/Input";
import { Touch } from "../Button/Button";

export default function ForgotPassword({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.box}>
        <Image
          resizeMode="cover"
          style={styles.arrow}
          source={require("../arrow.png")}
          onPress={() => navigation.navigate("login")}
        />
        <Text style={styles.password}>Forgot Password</Text>
      </View>
      <Image
        resizeMode="cover"
        style={styles.img}
        source={require("../logo.png")}
      />
      <Text style={styles.enter}>
        Enter your email for the verification proccess, and we will send 4
        digits code to your email for the verification.
      </Text>
      <View style={styles.logs}></View>
      <Input label="E-mail" placeHolder="Enter your email" />
      <Touch
        style={styles.button}
        title="Continue"
        onPress={() => navigation.navigate("continue")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 80,
    width: "100%",
  },
  enter: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "400",
    color: "#616161",
    textAlign: "center",
    marginTop: 50,
  },
  box: {
    marginTop: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  password: {
    marginTop: 40,
    color: "#383838",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 25,
  },
  arrow: {
    marginTop: 40,
  },
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: "#FAFAFA",
  },

  img: {
    marginTop: 50,
    alignSelf: "center",
    height: 70,
  },
});
