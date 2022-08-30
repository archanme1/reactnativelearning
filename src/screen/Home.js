import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Menu from "../component/Menu";

const Home = (props) => {
  const description =
    "Welcome to CSAM(Computer Software and Database Development) group of Lambton college. We are pleased to welcome you in 2022 Spring intake. Have fun in lambton college.";
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          source={require("../../assets/logo.jpeg")}
          resizeMode="contain"
        />
        <Text style={styles.mainHeader}>Welcome to </Text>
        <Text
          style={[
            styles.mainHeader,
            { fontSize: 33, color: "#4c5dab", marginTop: 0 },
          ]}
        >
          {props.lecture}
        </Text>
        <Text style={styles.paraStyle}>{description}</Text>
      </View>
      <View>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View style={styles.lineStyle}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    textAlign: "center",
  },
  homeTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  headerImage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    display: "flex",
    alignItems: "stretch",
    marginTop: 50,
    borderRadius: 20,
  },
  mainHeader: {
    fontSize: 30,
    color: "#344055",
    textTransform: "uppercase",
  },
  paraStyle: {
    textAlign: "left",
    fontSize: 20,
    color: "#7d7d7d",
    marginTop: 50,
    paddingBottom: 50,
    lineHeight: 30,
  },
  lineStyle: {
    marginVertical: 10,
    borderWidth: 0.5,
    borderColor: "gray",
  },
});

export default Home;
