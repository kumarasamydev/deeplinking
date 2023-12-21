import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Linking from "expo-linking";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AboutScreen from "./screens/AboutScreen";
import ContactUsScreen from "./screens/ContactUsScreen";

const prefix = Linking.makeUrl("/");
const Stack = createNativeStackNavigator();
export default function App() {
  const [data, setData] = useState(null);
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Home: "home",
        Settings: "settings",
        About: "about",
        ContactUs: "contactus"
      }
    }
  };
  // function handleDeepLink(event) {
  //   let data = Linking.parse(event.url);
  //   setData(data);
  // }
  // useEffect(() => {
  //   async function getInitialURL() {
  //     const initialURL = await Linking.getInitialURL();
  //     if (initialURL) setData(Linking.parse(initialURL));
  //   }
  //   Linking.addEventListener("url", handleDeepLink);
  //   if (!data) {
  //     getInitialURL();
  //   }
  //   return () => {
  //     Linking.removeEventListener("url");
  //   };
  // }, []);

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Settings' component={SettingsScreen} />
        <Stack.Screen name='About' component={AboutScreen} />
        <Stack.Screen name='ContactUs' component={ContactUsScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    // <View style={styles.container}>
    //   <Text>
    //     {data ? JSON.stringify(data) : "App not open deep link in the prg"}
    //   </Text>
    //   <StatusBar style='auto' />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
