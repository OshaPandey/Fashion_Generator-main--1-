import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Shirt from "./Shirts.js";
import Login from "./login-page";
import Wishlist from "./wishlist-page.js";
import Pant from "./Pants.js";
import UserLogOut from "./logout.js";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import SignUp from "./SignUp.js";
import UserLogIn from "./login1.js";
import { createStackNavigator } from "@react-navigation/stack";
import UserRegistration from "./register1.js";
export const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function Home() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === "Shirt") {
            iconName = "shirt";
            size = focused ? 25 : 20;
            color = focused ? "#E7052E" : "#555";
          } else if (route.name === "Pant") {
            iconName = "clothes-hanger";
            size = focused ? 25 : 20;
            color = focused ? "#E7052E" : "#555";
          } else if (route.name === "Wishlist") {
            iconName = "heart";
            size = focused ? 25 : 20;
            color = focused ? "#E7052E" : "#555";
          } else if (route.name === "Logout") {
            iconName = "user";
            size = focused ? 25 : 20;
            color = focused ? "#E7052E" : "#555";
          }

          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Shirts" component={Shirt} />
      <Tab.Screen name="Pants" component={Pant} />

      <Tab.Screen name="Wishlist" component={Wishlist} />

      <Tab.Screen name="Logout" component={UserLogOut} />
      {/* <Tab.Screen name="XYZ12" component={UserRegistration} /> */}
    </Tab.Navigator>
  );
}

function Auth() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, size, color }) => {
        let fonticon;
        if (route.name === "Login") {
          fonticon = "shirt";
          size = focused ? 25 : 20;
          color = focused ? "#E7052E" : "#555";
        } else if (route.name === "SignUp") {
          fonticon = "clothes-hanger";
          size = focused ? 25 : 20;
          color = focused ? "#E7052E" : "#555";
        }
        return <FontAwesome5 name={fonticon} size={size} color={color} />;
      },
    })}
    >
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="SignUp" component={SignUp} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
