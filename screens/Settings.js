import "react-native-gesture-handler";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Touch } from "../component/CustomInput";
import { More } from "../svg";
import { Input } from "../Reuse/Reuse";

export default function Settings({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          resizeMode="cover"
          style={styles.arrow}
          source={require("../arrow.png")}
        />
        <Text style={styles.upload}>Settings</Text>
        <More style={styles.more} />
      </View>
      <Input
        style={styles.username}
        label="Account"
        placeHolder="Personal Information"
        inputStyle={styles.personal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  personal: {
    marginTop: 0,
    borderRadius: 5,
    // backgroundColor: "transparent",
    borderBottomColor: "#A9A9A9",
    // borderBottomWidth: 1,
    width: "85%",
    marginHorizontal: 30,
    height: 50,
  },
  button: {
    width: "90%",
    marginTop: 90,
  },
  arrow: {
    marginTop: 60,
    marginLeft: 20,
  },
  more: {
    color: "#383838",
    fontWeight: "700",
    fontSize: 28,
    marginRight: 20,
    marginTop: 60,
  },
  upload: {
    color: "#383838",
    fontWeight: "700",
    fontSize: 28,
    marginRight: 200,
    marginTop: 60,
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    height: 130,
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
});
