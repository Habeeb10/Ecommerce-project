import "react-native-gesture-handler";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Touch } from "../component/CustomInput";

const LIST = [
  {
    Name: "4",
  },
  {
    Name: "7",
  },
  {
    Name: "7",
  },
  {
    Name: "9",
  },
];

const ItemCard = ({ Name }) => {
  return (
    <View style={styles.base}>
      <Text style={styles.numbers}>{Name}</Text>
    </View>
  );
};

{
  LIST.map((item) => <ItemCard Name={item.Name} />);
}

export default function Continue({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.box}>
        <Image
          resizeMode="cover"
          style={styles.arrow}
          source={require("../arrow.png")}
        />
        <Text style={styles.password}>Code Verification</Text>
      </View>
      <Image
        resizeMode="cover"
        style={styles.img}
        source={require("../logo.png")}
      />
      <Text style={styles.enter}>
        Enter the 4 digits code that you received on your email so you can
        continue to reset your account password.
      </Text>
      <View style={styles.log}>
        {LIST.map((item, index) => {
          return <ItemCard Name={item.Name} />;
        })}
      </View>
      <Touch
        style={styles.button}
        title="Continue"
        onPress={() => navigation.navigate("homepage")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  log: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  numbers: {
    color: "#383838",
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 33,
  },
  base: {
    width: 50,
    height: 60,
    backgroundColor: "white",
    marginTop: 52,
    borderColor: "#A9A9A9",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 90,
    width: "100%",
  },
  enter: {
    fontSize: 19,
    lineHeight: 26,
    fontWeight: "300",
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
