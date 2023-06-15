import React from "react";
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { AsyncStorage } from "react-native";
export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setMob] = useState("");
  const [username, setUser] = useState();
  // state = {
  //   username: '', password: '', email: '', phone_number: ''
  // }
  // onChangeText = (key, val) => {
  //   this.setState({ [key]: val })
  // }

  async function registerHanler() {
    var p = 0;
    var i = 0;
    var code = 0;

    console.log("hello");
    const response = await fetch(
      "https://randomfashiongeneratorapi.herokuapp.com/register",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: `{
                                                                                                "username":"${username}",
                                                                                                "password":"${password}",
                                                                                                "number":"9876453627",
                                                                                                "email":"${email}"
                                                                                            }`,
      }
    );
    response.json().then((data) => {
      console.log(data);
      if (data.Approval_code == 1) {
        AsyncStorage.setItem("ema", email);
        navigation.navigate("Home", { email: email });
      }
    });
  }

  // render() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        autoCapitalize="none"
        placeholderTextColor="white"
        // onChangeText={val => this.onChangeText('username', val)}
        onChangeText={(username) => setUser(username)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize="none"
        placeholderTextColor="white"
        onChangeText={(password) => setPassword(password)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        placeholderTextColor="white"
        // onChangeText={val => this.onChangeText('email', val)}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="numeric"
        autoCapitalize="none"
        placeholderTextColor="white"
        onChangeText={(number) => setMob(number)}
      />
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => registerHanler()}
      >
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
//}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: "#fff",
    margin: 10,
    padding: 8,
    color: "white",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#E7052E",
  },
});
