import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screen/Home";
import About from "./src/screen/About";
import Contact from "./src/screen/Contact";
import Course from "./src/screen/Course";
import UserData from "./src/screen/UserData";
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans";
import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

export default function App() {
  const Stack = createNativeStackNavigator();
  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* home section  */}
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {(props) => <Home {...props} lecture="CSAM Div....." />}
        </Stack.Screen>
        {/* course section  */}
        <Stack.Screen
          name="Course"
          component={Course}
          options={{
            headerTitleStyle: {
              fontSize: 20,
              fontFamily: "Nunito_600SemiBold",
            },
            headerTitleAlign: "center",
            headerTitle: "Courses",
          }}
        />
        {/* userData section  */}
        <Stack.Screen
          name="Student"
          component={UserData}
          options={{
            headerTitleStyle: {
              fontSize: 20,
              fontFamily: "Nunito_600SemiBold",
            },
            headerTitleAlign: "center",
            headerTitle: "Student Data",
          }}
        />
        {/* about section  */}
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerTitleStyle: {
              fontSize: 20,
              fontFamily: "Nunito_600SemiBold",
            },
            headerTitleAlign: "center",
          }}
        />
        {/* contact section  */}
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            headerTitleStyle: {
              fontSize: 20,
              fontFamily: "Nunito_600SemiBold",
            },
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
