import "react-native-gesture-handler";
import { Image, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Input } from "../Input/Input";
import { Touch } from "../Button/Button";
import GOOGLE from "../svg";
import { TouchableOpacity } from "react-native-gesture-handler";
import React, { useState } from "react";

export default function Login({ navigation }) {
  const [modalState, setModalState] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Image
        resizeMode="cover"
        style={styles.img}
        source={require("../logo.png")}
      />
      <View style={styles.logs}>
        <Text style={styles.login}>Log In</Text>
        <Text style={styles.sign}>Sign UP</Text>
      </View>
      <Input
        style={styles.username}
        label="Username or Email"
        placeHolder="tijanihabib42@gmail.com"
      />
      <Input
        style={styles.password}
        label="Password"
        placeHolder="Enter your password"
        secure={true}
      />
      <Text
        style={styles.word}
        onPress={() => navigation.navigate("forgotpassword")}
      >
        Forgot password?
      </Text>
      <Touch
        style={styles.button}
        title="Login"
        onPress={() => setModalState(true)}
      />
      <Text style={styles.with}>or login with</Text>
      <TouchableOpacity style={styles.google}>
        <GOOGLE />
        <Text style={styles.gle}>GOOGLE</Text>
      </TouchableOpacity>

      {modalState && (
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <View style={styles.top}></View>
            <Image
              source={require("../failed.png")}
              resizeMode="contain"
              style={styles.failed}
            />
            <Text style={styles.fail}>Login Failed</Text>
            <Text style={styles.moment}>
              You cannot login at the moment, check your internet connection and
              try again.
            </Text>
            <Touch
              style={styles.bot}
              title="Try Again"
              onPress={() => setModalState(false)}
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  failed: {
    alignSelf: "center",
    marginTop: 80,
  },

  moment: {
    color: "#9DA8B6",
    alignSelf: "center",
    width: "70%",
    textAlign: "center",
    marginTop: 20,
  },
  fail: {
    marginTop: 40,
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "500",
  },
  modalBox: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "#FAFAFA",
    height: 520,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  modalContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,.7)",
  },
  word: {
    color: "#383838",
    fontSize: 14,
    lineHeight: 25,
    marginTop: 30,
    marginLeft: 230,
  },
  gle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#383838",
    marginLeft: 10,
  },
  google: {
    // marginTop: 30,
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 30,
    justifyContent: "center",
  },

  with: {
    color: "#383838",
    alignSelf: "center",
    lineHeight: 25,
    fontSize: 14,
    marginBottom: 10,
    fontWeight: "400",
    marginTop:10,
  },
  bot: {
    marginTop: 60,
  },
  button: {
    marginTop: 50,
    width: "100%",
  },
  sign: {
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 28,
    color: "#A9A9A9",
    width: 73,
    marginRight: 160,
  },
  login: {
    width: 58,
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 33,
    color: "#383838",
  },
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: "#FAFAFA",
  },
  logs: {
    flexDirection: "row",
    marginTop: 50,
    justifyContent: "space-between",
  },
  img: {
    marginTop: 70,
    alignSelf: "center",
    height: 70,
  },
});
