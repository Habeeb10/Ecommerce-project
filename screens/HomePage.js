import "react-native-gesture-handler";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const LIST = [
  {
    icon: require("../image1.png"),
  },
  {
    icon: require("../image2.png"),
  },
  {
    icon: require("../image3.png"),
  },
];

const ItemCard = ({ icon }) => {
  return (
    <View style={styles.base}>
      <Image resizeMode="contain" style={styles.icon} source={icon} />
    </View>
  );
};

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.home} onPress={() => navigation.navigate("chats")}>
          Home
        </Text>
        <Image
          resizeMode="cover"
          style={styles.bell}
          source={require("../bell.png")}
        />
      </View>
      <View style={styles.box}>
        {LIST.map((item, index) => {
          return <ItemCard key={index} ico={item.ico} icon={item.icon} />;
        })}
      </View>
      <View style={styles.box2}>
        <View style={styles.box3}>
          <Image
            resizeMode="cover"
            style={styles.sansa}
            source={require("../sansa.png")}
          />
          <Text style={styles.india}>Sansa Indira</Text>
        </View>
        <View style={styles.box4}></View>
        <Text style={styles.day}>
          My last day for this year holiday! So excited to share my memories
          with you guys! 😁😍
        </Text>
        <Image
          resizeMode="cover"
          style={styles.pic}
          source={require("../pic.png")}
        />
        <View style={styles.hours}>
          <View style={styles.vec}>
            <Image
              resizeMode="cover"
              style={styles.Vector}
              source={require("../Vector.png")}
            />
            <Text style={styles.num}>1,892</Text>
          </View>
          <View style={styles.vec}>
            <Image
              resizeMode="cover"
              style={styles.Vector2}
              source={require("../Vector2.png")}
            />
            <Text style={styles.num}>72</Text>
          </View>
          <Text>2 hours ago</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 150,
    width: 130,
  },
  num: {
    marginLeft: 10,
  },
  vec: {
    flexDirection: "row",
    alignItems: "center",
  },
  hours: {
    marginHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  india: {
    marginLeft: 20,
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 25,
  },
  sansa: {
    marginLeft: 20,
    marginTop: 10,
  },
  box3: {
    flexDirection: "row",
    alignItems: "center",
  },
  box4: {
    marginLeft: 20,
    marginTop: 10,
    height: 1,
    width: "89%",
    backgroundColor: "#A9A9A9",
  },
  day: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "300",
    textAlign: "center",
    marginTop: 20,
  },
  pic: {
    width: 390,
    alignSelf: "center",
    height: 250,
  },
  box2: {
    height: 420,
    width: 355,
    backgroundColor: "white",
    borderRadius: 15,
    alignSelf: "center",
    // marginTop: 20,
  },

  box: {
    flexDirection: "row",
    // justifyContent: "space-between",
  },

  bell: {
    marginTop: 60,
  },
  home: {
    color: "#383838",
    fontSize: 28,
    marginTop: 60,
  },
  box1: {
    paddingHorizontal: 30,
    backgroundColor: "#FAFAFA",
    height: 170,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
});
