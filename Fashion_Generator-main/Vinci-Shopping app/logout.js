import React, { FC, ReactElement } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import Parse from "parse/react-native";
import { useNavigation } from "@react-navigation/native";
import { StackActions } from "@react-navigation/native";
import Styles from "./Styles";
import { AsyncStorage } from "react-native";

async function displayData() {
  try {
    email = await AsyncStorage.getItem("ema");
    alert(email);
  } catch (error) {
    alert(error);
  }
}

const doUserLogOut = async function () {
  await AsyncStorage.clear();
  
};

export default function UserLogOut({ navigation }) {
  displayData();
  return (
    <View style={Styles.login_wrapper}>
      <View style={Styles.form}>
        <TouchableOpacity onPress={() => navigation.navigate("Auth")}>
          <View style={Styles.button}>
            <Text style={Styles.button_label}>{"Logout"}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}


