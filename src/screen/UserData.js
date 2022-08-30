import { StyleSheet, View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";

const UserData = () => {
  const [myData, setMyData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const getUserData = async () => {
    try {
      const responce = await fetch(
        "https://thapatechnical.github.io/userapi/users.json"
      );
      const realData = await responce.json();
      setMyData(realData);
      setIsLoaded(false);
      console.log(realData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const showUserData = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image style={styles.imgStyle} source={{ uri: item.image }} />
        </View>

        <View>
          <View style={styles.bioDataContainer}>
            <Text style={styles.bioData}> Bio-Data </Text>
            <Text style={styles.idNumber}>
              {item.id < 10 ? `#0${item.id}` : `#{item.id}`}
            </Text>
          </View>

          <View style={styles.mainContent}>
            <Text style={styles.myName}> Name: {item.name} </Text>
            <Text style={styles.myName}> email: {item.email} </Text>
            <Text style={styles.myName}> mobile: {item.mobile} </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.mainHeader}>List of Enrolled Students</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={myData}
        renderItem={showUserData}
        // horizontal={true}
        // showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    minHeight: "100%",
    paddingVertical: 50,
    backgroundColor: "#ebedee",
  },
  card: {
    width: 350,
    height: 400,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginHorizontal: 20,
  },
  bioDataContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#353535",
    paddingVertical: 10,
    fontFamily: "JosefinSans_400Regular",
  },
  idNumber: {
    fontSize: 20,
    color: "rgba(255, 255, 255, 0.5)",
    fontFamily: "JosefinSans_400Regular",
    paddingRight: 10,
  },
  bioData: {
    fontSize: 25,
    color: "#fff",
    fontFamily: "JosefinSans_400Regular",
  },
  mainHeader: {
    fontSize: 30,
    color: "teal",
    textAlign: "center",
    fontFamily: "JosefinSans_400Regular",
    paddingVertical: 50,
    fontWeight: "bold",
  },
  imgContainer: {
    padding: 10,
  },
  imgStyle: {
    width: "100%",
    height: 180,
  },
  mainContent: {
    padding: 10,
    backgroundColor: "#353535",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    paddingBottom: 20,
  },
  myName: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 10,
    alignSelf: "flex-start",
    textTransform: "capitalize",
    fontFamily: "JosefinSans_400Regular",
  },
});

export default UserData;
