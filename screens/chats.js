import "react-native-gesture-handler";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const LIST = [
  {
    icon: require("../micheal.png"),
    title: "Micheal Snow",
    toppings: "I’m at the office right now",
    messages: "2",
  },
  {
    icon: require("../samuel.png"),
    title: "Samuel Seaworth",
    toppings: "It’s pretty cheap I think and so ...",
    messages: "1",
  },
  {
    icon: require("../sansa.png"),
    title: "Sansa Indira",
    toppings: "I’m okay, how about you?",
  },
  {
    icon: require("../sandor.png"),
    title: "Sandor Clegane",
    toppings: "Maybe I can help you tomorrow or ...",
  },
  {
    icon: require("../mike.png"),
    title: "Mike Renly",
    toppings: "Yes of course, I like that very much!",
  },
  {
    icon: require("../robb.png"),
    title: "Robb Jamie",
    toppings: "Can your friends do it tonight?",
  },
];

const ItemCard = ({ icon, title, toppings, messages }) => {
  return (
    <View style={styles.base}>
      <View style={styles.left}>
        <Image resizeMode="contain" style={styles.image} source={icon} />
        <View style={styles.top}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.toppings}>{toppings}</Text>
        </View>
      </View>
      {messages && (
        <View style={styles.messages}>
          <Text style={styles.sages}>{messages}</Text>
        </View>
      )}
    </View>
  );
};

export default function chats({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text
          style={styles.home}
          onPress={() => navigation.navigate("profile")}
        >
          Chats
        </Text>
      </View>
      <View style={styles.box}>
        {LIST.map((item, index) => {
          return (
            <ItemCard
              key={index}
              icon={item.icon}
              title={item.title}
              toppings={item.toppings}
              messages={item.messages}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  sages: {
    color: "white",
  },
  messages: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: "#327FEB",
    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    marginLeft: 20,
  },
  image: {
    marginLeft: 30,
    marginTop: 10,
  },
  title: {
    marginTop: 10,
  },
  toppings: {
    marginTop: 10,
  },
  container: {
    flex: 1,
  },
  home: {
    color: "#383838",
    fontSize: 30,
    marginTop: 56,
    marginBottom: 20,
    marginLeft: 30,
    fontWeight: "700",
    lineHeight: 29,
  },
  base: {
    backgroundColor: "#E5E5E5",
    flexDirection: "row",
    height: 100,
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 30,
  },
  box1: {
    backgroundColor: "#FAFAFA",
    height: 100,
  },
});
