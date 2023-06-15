import React, { useState,useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";

const Items = [
  {
    URL: "https://images.unsplash.com/flagged/photo-1557310298-9d6633ff5b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
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
    fit: "slim",
    fitRating: 76,
  },
  {
    URL: "https://images.unsplash.com/flagged/photo-1557310298-9d6633ff5b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
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
];
let value = [];

let email;

//const [data, setdata] = useState();
const data = [];



export default function Wishlist() {
  
  const [wishData,setWishData]=useState(["https://m.media-amazon.com/images/I/41bV8KiknVL.jpg",
  "https://m.media-amazon.com/images/I/61n9+We8PVL._UY879_.jpg",
  "https://m.media-amazon.com/images/I/61HLpgF9-uL._UY879_.jpg"])
  const opt=1;
  useEffect(() => {
    wishhandle()
  }, [opt]);

  
  
  

  async function wishhandle() {
    
    const response = await fetch(
      "https://randomfashiongeneratorapi.herokuapp.com/findwish",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: `{
                                                                                                "email":"${global.emailG}"
                                                                                            }`,
      }
    );
      var arr=[]
      response.json().then((data) => {
      console.log(data.wishes);
      arr=new Set(data.wishes.split(','))
      //setWishData(arr)
      arr=Array.from(arr)
      arr=arr.splice(1,arr.length)
        
      //setWishData(arr)  
    }).then((res)=>{setWishData(arr)
      console.log(wishData)})
    
    
    
  }
  

  return (
    <View >
      <ScrollView style={{margin:'0.5%'}}>
      {             
                    wishData.map((item, index) => (
                        <View key={index} style={{width:'100%',aspectRatio:1,alignItems:'center'}}>
                            <Paper uri={item}/>
                        </View>
                    ))
                    }
      </ScrollView>
                    
    </View>
  );
};

const Paper = (props) => {
    return (
    <View style={{margin:'2.5%'}}>
        <TouchableOpacity >
            <Image source={{uri:props.uri}} style={{height:'100%',aspectRatio:0.8,
            borderRadius:10,borderWidth:1,borderColor:'#dddddd'}}/>
        </TouchableOpacity>
    </View>
    );
}
