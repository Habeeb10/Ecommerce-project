import "react-native-gesture-handler";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Touch } from "../component/CustomInput";
import { More } from "../svg";
import { Input } from "../Reuse/Reuse";

export default function Upload({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          resizeMode="cover"
          style={styles.arrow}
          source={require("../arrow.png")}
        />
        <Text style={styles.upload}>Upload</Text>
        <More style={styles.more} />
      </View>
      <Image
        resizeMode="cover"
        style={styles.house}
        source={require("../house.png")}
      />
      <View style={styles.box1}>
        <Text style={styles.write}>Write a Caption</Text>
        <Input
          inputStyle={styles.caption}
          placeHolder="Enter your caption here"
          secure={true}
        />
        <Touch
          style={styles.button}
          title="Upload"
          onPress={() => navigation.navigate("settings")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  caption: {
    marginTop: 0,
    borderRadius: 0,
    backgroundColor: "transparent",
    borderBottomColor: "#A9A9A9",
    borderBottomWidth: 1,
    width: "85%",
    marginHorizontal: 30,
  },
  write: {
    color: "#383838",
    fontSize: 20,
    lineHeight: 33,
    fontWeight: "bold",
    marginLeft: 30,
    marginTop: 30,
  },
  box2: {
    marginLeft: 20,
    marginTop: 10,
    height: 1,
    width: "89%",
    backgroundColor: "#A9A9A9",
  },
  box1: {
    backgroundColor: "#FAFAFA",
    width: "100%",
    height: "100%",
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
  },
  house: {
    width: "100%",
    height: 350,
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
