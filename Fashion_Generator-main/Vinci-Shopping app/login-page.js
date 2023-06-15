import { StatusBar } from "expo-status-bar";
import SignUp from "./SignUp";
import React, { useState, Component } from "react";
//import { Actions } from 'react-native-router-flux';
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import { NavigationEvents } from "react-navigation";

global.emailG="email";
export var email1 = " ";
export default function Login({ navigation, props }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function loginHanler() {
    console.log(`{
        "password":"${password}",
        "email":"${email}"
    }`);
    const response = await fetch(
      "https://randomfashiongeneratorapi.herokuapp.com/login",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: `{
                                                                                                "password":"${password}",
                                                                                                "email":"${email}"
                                                                                            }`,
      }
    );

    response.json().then((data) => {
      console.log(data.Approval_code);
      code = data.Approval_code;
      if (code == 1) {
        email1 = email;
        global.emailG=email;
        navigation.navigate("Home");
        console.log("email=", email1);
      }
    });
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image style={styles.image} source={require("./assets/VINCI.png")} />

      <StatusBar style="auto" />

      <TextInput
        style={styles.TextInput}
        placeholder="Enter Email"
        placeholderTextColor="#003f5c"
        onChangeText={(email) => setEmail(email)}
      />

      <TextInput
        style={styles.TextInput}
        placeholder="Password"
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />

      <TouchableOpacity style={styles.loginBtn} onPress={() => loginHanler()}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signupBtn}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    flex: 1,
    justifyContent: "center",
    padding: 100,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 20,
    width: 400,
    height: 50,

    // marginBottom: 10,
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 20,
    width: "70%",
    height: 45,
    marginBottom: 10,
    alignItems: "start",
  },

  TextInput: {
    height: 20,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  // forgot_button: {
  //   height: 30,
  //   marginBottom: 10,
  // },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#E7052E",
  },
  signupBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#E7052E",
  },
});
