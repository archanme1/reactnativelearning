import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Courses from "../api/Courseapi";

const Course = () => {
  const courseCard = ({ item }) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
          <View>
            <Image
              style={styles.cardImage}
              source={item.image}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.mainHeader}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonStyle}>
              <Text style={styles.buttonText}>Course Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={Courses}
      renderItem={courseCard}
    />
  );
};

const styles = StyleSheet.create({
  cardImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  mainContainer: {
    paddingHorizontal: 20,
  },
  courseContainer: {
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.90)",
    textAlign: "center",
    borderRadius: 5,
    shadowColor: "grey",
    shadowRadius: 10,
    marginVertical: 30,
  },
  mainHeader: {
    fontSize: 22,
    color: "#344055",
    textTransform: "uppercase",
    paddingBottom: 10,
    textAlign: "center",
    fontFamily: "Nunito_600SemiBold",
  },
  description: {
    textAlign: "center",
    fontFamily: "JosefinSans_500Medium",
    paddingBottom: 20,
    lineHeight: 20,
    fontSize: 16,
    color: "#7d7d7d",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonStyle: {
    backgroundColor: "teal",
    paddingVertical: 10,
    paddingHorizontal: 15,
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontFamily: "JosefinSans_400Regular",
  },
});

export default Course;
