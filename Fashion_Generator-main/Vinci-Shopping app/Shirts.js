import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
const Items = [
  {
    URL: "https://images.unsplash.com/flagged/photo-1557310298-9d6633ff5b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
    description: "A pretty floral pattern dress perfect fr beach day outs",
    Productname: "Dress",
    color: "red",
    colorRating: 76,
    pattern: "floral",
    patternRating: 36,
    fabric: "cotton",
    fabricRating: 75,
    sleeve: "full",
    sleeveRating: 34,
    collar: "Oxford",
    collarRating: 90,
    fit: "medium",
    fitRating: 76,
  },
  {
    URL: "https://m.media-amazon.com/images/I/41bV8KiknVL.jpg",
    description: "Women's navy blue sleeveless peplum top ",
    Productname: "Top",
    color: "Navy Blue",
    colorRating: 76,
    pattern: "printed",
    patternRating: 36,
    fabric: "rayon",
    fabricRating: 75,
    sleeve: "sleeveless",
    sleeveRating: 34,
    collar: "collarless",
    collarRating: 90,
    fit: "medium",
    fitRating: 76,
  },

  {
    URL: "https://m.media-amazon.com/images/I/61n9+We8PVL._UY879_.jpg",
    description: "Women's  full sleeve formal shirt",
    Productname: "Formal Shirt",
    color: "Peach",
    colorRating: 76,
    pattern: "self-design",
    patternRating: 36,
    fabric: "Viscose",
    fabricRating: 75,
    sleeve: "full sleeve",
    sleeveRating: 34,
    collar: "collared",
    collarRating: 90,
    fit: "medium",
    fitRating: 76,
  },
  {
    URL: "https://m.media-amazon.com/images/I/61HLpgF9-uL._UY879_.jpg",
    description: "Women's  half sleeve semi-formal shirt",
    Productname: "Shirt",
    color: "Beige",
    colorRating: 76,
    pattern: "solid",
    patternRating: 36,
    fabric: "Polyester",
    fabricRating: 75,
    sleeve: "half sleeve",
    sleeveRating: 34,
    collar: "collared",
    collarRating: 90,
    fit: "medium",
    fitRating: 76,
  },

  {
    URL: "https://m.media-amazon.com/images/I/71U0Wo-rizL._UY879_.jpg",
    description: "Women's   multi colored A-line dress",
    Productname: "Dress",
    color: "Beige",
    colorRating: 76,
    pattern: "print",
    patternRating: 36,
    fabric: "Polyester/Spandex",
    fabricRating: 75,
    sleeve: "half sleeve",
    sleeveRating: 34,
    collar: "round",
    collarRating: 90,
    fit: "medium",
    fitRating: 76,
  },

  {
    URL: "https://m.media-amazon.com/images/I/61zOq6p0NXL._UX679_.jpg",
    description: "Classy women's denim dress with V neck",
    Productname: "Dress",
    color: "Blue",
    colorRating: 76,
    pattern: "solid",
    patternRating: 36,
    fabric: "denim",
    fabricRating: 75,
    sleeve: "half",
    sleeveRating: 34,
    collar: "V neck",
    collarRating: 90,
    fit: "slim",
    fitRating: 76,
  },

  {
    URL: "https://m.media-amazon.com/images/I/81s2wPJMdKL._UY879_.jpg",
    description: "Classy women's flared Rayon dress",
    Productname: "Dress",
    color: "Black",
    colorRating: 76,
    pattern: "floral",
    patternRating: 36,
    fabric: "rayon",
    fabricRating: 75,
    sleeve: "sleeveless",
    sleeveRating: 34,
    collar: "boat neck",
    collarRating: 90,
    fit: "lose",
    fitRating: 76,
  },

  {
    URL: "https://m.media-amazon.com/images/I/41tGwZ5USVL.jpg",
    description: "Designer party wear gown for women",
    Productname: "Dress",
    color: "Black",
    colorRating: 76,
    pattern: "embroidered",
    patternRating: 36,
    fabric: "net",
    fabricRating: 75,
    sleeve: "3/4th sleeve",
    sleeveRating: 34,
    collar: "round neck",
    collarRating: 90,
    fit: "lose",
    fitRating: 76,
  },
  {
    URL: "https://m.media-amazon.com/images/I/411wdwAJU7L._SX342_SY445_.jpg",
    description: "Women's turtle neck knitted sweater dress",
    Productname: "Dress",
    color: "White",
    colorRating: 76,
    pattern: "Knitted",
    patternRating: 36,
    fabric: "Viscose rayon polyester",
    fabricRating: 75,
    sleeve: "full sleeve",
    sleeveRating: 34,
    collar: "round neck",
    collarRating: 90,
    fit: "tight fit",
    fitRating: 76,
  },

  {
    URL: "https://m.media-amazon.com/images/I/71FTgvE7K8L._UY879_.jpg",
    description: "Women's cotton maxi jumpsuit",
    Productname: "Jumpsuit",
    color: "Light Blue",
    colorRating: 76,
    pattern: "Printed",
    patternRating: 36,
    fabric: "Cotton",
    fabricRating: 75,
    sleeve: "Sleeveless",
    sleeveRating: 34,
    collar: "Square neck",
    collarRating: 90,
    fit: "regular",
    fitRating: 76,
  },

  {
    URL: "https://m.media-amazon.com/images/I/81Bn7C9SkWL._UY879_.jpg",
    description: "Women's party wear ethnic cotton anarkali kurti ",
    Productname: "Kurti",
    color: "Dark Blue",
    colorRating: 76,
    pattern: "Printed",
    patternRating: 36,
    fabric: "Cotton",
    fabricRating: 75,
    sleeve: "Full sleeve",
    sleeveRating: 34,
    collar: "round neck",
    collarRating: 90,
    fit: "lose",
    fitRating: 76,
  },

  {
    URL: "https://m.media-amazon.com/images/I/91mESvatugL._UY879_.jpg",
    description: "Women's party wear ethnic foiled short kurti ",
    Productname: "Kurti",
    color: "Teal",
    colorRating: 76,
    pattern: "Printed",
    patternRating: 36,
    fabric: "Polyester",
    fabricRating: 75,
    sleeve: "Full sleeve",
    sleeveRating: 34,
    collar: "V neck",
    collarRating: 90,
    fit: "lose",
    fitRating: 76,
  },

  {
    URL: "https://m.media-amazon.com/images/I/912YhyzVNhL._UX679_.jpg",
    description: "Women's kanjivaram silk saree",
    Productname: "Saree",
    color: "Dark blue",
    colorRating: 76,
    pattern: "Zari Woven",
    patternRating: 36,
    fabric: "Silk",
    fabricRating: 75,
    sleeve: "N/A",
    sleeveRating: 34,
    collar: "N/A",
    collarRating: 90,
    fit: "lose",
    fitRating: 76,
  },

  {
    URL: "https://m.media-amazon.com/images/I/71cD9M7xwtL._UY879_.jpg",
    description: "Metallic lycra shirt for men",
    Productname: "Shirt",
    color: "peacock blue",
    colorRating: 76,
    pattern: "Solid",
    patternRating: 36,
    fabric: "Cotton",
    fabricRating: 75,
    sleeve: "full sleeve",
    sleeveRating: 34,
    collar: "collared",
    collarRating: 90,
    fit: "regular",
    fitRating: 76,
  },

  {
    URL: "https://m.media-amazon.com/images/I/413uiq-cuxL._UX679_.jpg",
    description: "Cotton full sleeve casual shirt for men",
    Productname: "Shirt",
    color: "blush green",
    colorRating: 76,
    pattern: "Solid",
    patternRating: 36,
    fabric: "Cotton",
    fabricRating: 75,
    sleeve: "full sleeve",
    sleeveRating: 34,
    collar: "uncollared",
    collarRating: 90,
    fit: "regular",
    fitRating: 76,
  },

  {
    URL: "https://m.media-amazon.com/images/I/71CWoEsQctL._SY879._SX._UX._SY._UY_.jpg",
    description: "Cotton full sleeve casual shirt for men",
    Productname: "Shirt",
    color: "maroon",
    colorRating: 76,
    pattern: "Solid",
    patternRating: 36,
    fabric: "Cotton",
    fabricRating: 75,
    sleeve: "full sleeve",
    sleeveRating: 34,
    collar: "uncollared",
    collarRating: 90,
    fit: "regular",
    fitRating: 76,
  },

  {
    URL: "https://m.media-amazon.com/images/I/61Y5LHA-yIL._SX679._SX._UX._SY._UY_.jpg",
    description: "Cotton full sleeve casual shirt for men",
    Productname: "Shirt",
    color: "grey",
    colorRating: 76,
    pattern: "Solid",
    patternRating: 36,
    fabric: "Cotton",
    fabricRating: 75,
    sleeve: "full sleeve",
    sleeveRating: 34,
    collar: "uncollared",
    collarRating: 90,
    fit: "regular",
    fitRating: 76,
  },

  {
    URL: "https://m.media-amazon.com/images/I/61i64Zs5EaL._UY879_.jpg",
    description: "Cotton half sleeve casual T-shirt for men",
    Productname: "T-Shirt",
    color: "white",
    colorRating: 76,
    pattern: "Grahpic",
    patternRating: 36,
    fabric: "Cotton",
    fabricRating: 75,
    sleeve: "half sleeve",
    sleeveRating: 34,
    collar: "round neck",
    collarRating: 90,
    fit: "lose",
    fitRating: 76,
  },

  {
    URL: "https://m.media-amazon.com/images/I/61rywc9WL7L._SX679._SX._UX._SY._UY_.jpg",
    description: "Half sleeve casual T-shirt for men",
    Productname: "T-Shirt",
    color: "maroon",
    colorRating: 76,
    pattern: "Solid",
    patternRating: 36,
    fabric: "Cotton",
    fabricRating: 75,
    sleeve: "half sleeve",
    sleeveRating: 34,
    collar: "v neck",
    collarRating: 90,
    fit: "regular",
    fitRating: 76,
  },
  {
    URL: "https://m.media-amazon.com/images/I/61docvEWxvL._SX679._SX._UX._SY._UY_.jpg",
    description: "Half sleeve casual T-shirt for men",
    Productname: "T-Shirt",
    color: "white",
    colorRating: 76,
    pattern: "Solid",
    patternRating: 36,
    fabric: "Cotton",
    fabricRating: 75,
    sleeve: "half sleeve",
    sleeveRating: 34,
    collar: "v neck",
    collarRating: 90,
    fit: "regular",
    fitRating: 76,
  },

  {
    URL: "https://m.media-amazon.com/images/I/51pRMd7RuZL._UX679_.jpg",
    description: "Men's half sleeve cotton lounge set",
    Productname: "Lounge set",
    color: "blue",
    colorRating: 76,
    pattern: "digital print",
    patternRating: 36,
    fabric: "Cotton",
    fabricRating: 75,
    sleeve: "half sleeve",
    sleeveRating: 34,
    collar: "v neck",
    collarRating: 90,
    fit: "regular",
    fitRating: 76,
  },

  {
    URL: "https://m.media-amazon.com/images/I/61DnLIKbPkL._UY879_.jpg",
    description: "Men's full sleeve cotton lounge set",
    Productname: "Lounge set",
    color: "grey",
    colorRating: 76,
    pattern: "solid",
    patternRating: 36,
    fabric: "Cotton",
    fabricRating: 75,
    sleeve: "full sleeve",
    sleeveRating: 34,
    collar: "v neck",
    collarRating: 90,
    fit: "regular",
    fitRating: 76,
  },

  {
    URL: "https://m.media-amazon.com/images/I/712SX6c64SL._UY879_.jpg",
    description: "Gorgette saree",
    Productname: "Saree",
    color: "black",
    colorRating: 76,
    pattern: "solid",
    patternRating: 36,
    fabric: "Gorgette",
    fabricRating: 75,
    sleeve: "N/A",
    sleeveRating: 34,
    collar: "N/A",
    collarRating: 90,
    fit: "regular",
    fitRating: 76,
  },
];

let email;
async function displayData() {
  try {
    email = ''
    alert(email);
  } catch (error) {
    alert(error);
  }
}

async function wishhandle(item) {
  console.log("sending req")
  const response = await fetch(
    "https://randomfashiongeneratorapi.herokuapp.com/makewish",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: `{
                                                                                                "email":"${global.emailG}",
                                                                                                "wish":"${item}"
                                                                                            }`,
    }
  );
  console.log("req success")
}

export default function Shirt({  navigation }) {
  console.log("global",global.emailG)
  const [arr, setArr] = useState([]);
  displayData();
  //console.log(user);
  
  const [em, setEm] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        {Items.map((item, index) => {
          return (
            <View key={index} style={styles.items}>
              <Image style={styles.img} source={{ uri: item.URL }} />
              <Pressable
                onPress={
                  () => {
                    console.log( global.emailG );
                    wishhandle(item.URL);
                  }

                  //goToWish()
                }
                style={styles.press}
              >
                <Text style={styles.wishlistText}>Wishlist</Text>
              </Pressable>
              <Text>{email}</Text>
              <Text style={styles.text}>{item.Productname}</Text>
              <Text style={styles.text2}>{item.description}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: 0,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    flex: 1,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 0,
    marginRight: 20,
    marginBottom: 0,
    color: "#E7052E",
    fontSize: 22,
    paddingBottom: 0,
  },
  text2: {
    flex: 1,
    padding: 10,
    color: "#D8D1A9",
    marginTop: 0,
    margin: 5,
    fontSize: 12,
  },
  items: {
    flex: 1,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 0,
    justifyContent: "center",
    backgroundColor: "#D6D6D6",
    width: 325,
    height: 400,
  },
  img: {
    flex: 1,
    justifyContent: "center",
    padding: 100,
    marginLeft: 35,
    marginRight: 10,
    marginTop: 20,
    width: 250,
    height: 100,
  },
  wishlistText: {
    fontSize: 12,
    color: "#F6D7DC",
    fontWeight: "bold",
    marginLeft: 3,
    marginTop: 1,
  },
  press: {
    width: 50,
    height: 20,
    backgroundColor: "#A7001F",
    margin: 15,
    borderRadius: 10,
  },
});

