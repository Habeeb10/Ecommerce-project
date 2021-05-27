import "react-native-gesture-handler";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Touch } from "../Button/Button";
import { More } from "../svg";

const LIST = [
  {
    title: "971",
    toppings: "Likes",
  },
  {
    title: "2643",
    toppings: "Followers",
  },
  {
    title: "1826",
    toppings: "Followig",
  },
];

const ItemCard = ({ title, toppings }) => {
  return (
    <View style={styles.base}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.toppings}>{toppings}</Text>
    </View>
  );
};
export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          resizeMode="cover"
          style={styles.arrow}
          source={require("../arrow.png")}
        />
        <Text style={styles.profile}>Profile</Text>
        <More style={styles.more} />
      </View>
      <View style={styles.box1}>
        <Image
          resizeMode="cover"
          style={styles.ramsay}
          source={require("../ramsay.png")}
        />
        <View style={styles.mic}>
          <Text style={styles.snow}>Ramsay Michael Snow</Text>
          <Text style={styles.mike}>@michaelrsnow</Text>
          <Text style={styles.jak}>Jakarta, Indonesia</Text>
        </View>
      </View>
      <View style={styles.follow}>
        <View style={styles.pin}>
          <Image
            resizeMode="cover"
            style={styles.search}
            source={require("../search.png")}
          />
        </View>
        <Touch
          style={styles.button}
          onPress={() => navigation.navigate("upload")}
          title="Follow"
        />
      </View>
      <View style={styles.box2}>
        {LIST.map((item, index) => {
          return (
            <ItemCard key={index} title={item.title} toppings={item.toppings} />
          );
        })}
      </View>
      <View style={styles.last}>
        <Image
          resizeMode="cover"
          style={styles.milk}
          source={require("../milk.png")}
        />
        <Image
          resizeMode="cover"
          style={styles.river}
          source={require("../river.png")}
        />
      </View>
      <View style={styles.last2}>
        <Image
          resizeMode="cover"
          style={styles.island}
          source={require("../island.png")}
        />
        <Image
          resizeMode="cover"
          style={styles.banana}
          source={require("../banana.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banana: {
    marginRight: 60,
  },
  island: {
    marginLeft: 60,
  },
  river: {
    marginRight: 60,
  },
  milk: {
    marginLeft: 60,
  },
  last2: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    // marginLeft: 20,
    // width: 370,
  },
  last: {
    height: 210,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    // marginLeft: 10,
    // width: 390,
  },
  toppings: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 24,
    color: "#383838",
  },
  title: {
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 33,
    color: "#383838",
  },
  base: {
    // marginLeft: 10,
    width: 110,
    alignItems: "center",
  },
  box2: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    height: 85,
    borderRadius: 10,
    width: "90%",
    marginLeft: 20,
    marginTop: 20,
  },
  pin: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    height: 60,
    width: 90,
    borderRadius: 30,
    borderColor: "#327FEB",
    backgroundColor: "white",
    borderWidth: 1,
  },
  follow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  button: {
    width: "50%",
    marginLeft: 70,
  },
  ramsay: {
    height: 130,
    width: 130,
    marginLeft: 20,
  },
  jak: {
    color: "#383838",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 24,
  },
  mike: {
    color: "#383838",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 27,
  },
  snow: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 33,
    color: "#383838",
  },
  mic: {
    marginLeft: 20,
  },
  box1: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  arrow: {
    marginTop: 80,
    marginLeft: 20,
  },
  more: {
    color: "#383838",
    fontWeight: "700",
    fontSize: 28,
    marginRight: 20,
    marginTop: 80,
  },
  profile: {
    color: "#383838",
    fontWeight: "700",
    fontSize: 28,
    marginRight: 200,
    marginTop: 80,
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    height: 150,
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
});
