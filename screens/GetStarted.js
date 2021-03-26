import "react-native-gesture-handler";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Touch } from "../component/CustomInput";

export default function GetStarted({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        resizeMode="cover"
        style={styles.img}
        source={require("../image.png")}
      />
      <Text style={styles.long}>Last Long Memories</Text>
      <Text style={styles.store}>
        You can store memories of your photos in Zelio app without limit.
      </Text>
      <View>
        <Touch
          style={styles.button}
          title="Get Started"
          onPress={() => navigation.navigate("login")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 150,
  },
  store: {
    textAlign: "center",
    alignSelf: "center",
    width: "62%",
    color: "#383838",
    fontSize: 16,
    marginTop: 15,
  },
  long: {
    textAlign: "center",
    marginTop: 30,
    color: "#383838",
    fontSize: 24,
  },
  img: {
    width: "100%",
    height: 500,
  },
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
});
