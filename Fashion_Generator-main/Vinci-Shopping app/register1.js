import React, { FC, ReactElement, useState } from "react";
import { Alert, Button, StyleSheet, TextInput } from "react-native";
import Parse from "parse/react-native";

export default function UserRegistration() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [number, setMob] = useState("");
  const [email, setEmail] = useState("");

  async function doUserRegistration() {
    setmulSize(1);
    setmulSize1(1);
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

    response
      .json()
      .then((data) => {
        console.log(data);
        Alert.alert(
          "Success!",
          `User ${data.username} was successfully created!`
        );
        return true;
      })
      .catch((error) => {
        // signUp can fail if any parameter is blank or failed an uniqueness check on the server
        Alert.alert("Error!", error.message);
        return false;
      });
  }

  return (
    <>
      <TextInput
        style={styles.input}
        value={username}
        placeholder={"Username"}
        onChangeText={(text) => setUsername(text)}
        autoCapitalize={"none"}
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder={"Password"}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        value={email}
        placeholder={"Email"}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize={"none"}
      />
      <TextInput
        style={styles.input}
        value={number}
        placeholder={"Number"}
        onChangeText={(text) => setMob(text)}
        autoCapitalize={"none"}
      />
      <Button title={"Sign Up"} onPress={() => doUserRegistration()} />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
});
