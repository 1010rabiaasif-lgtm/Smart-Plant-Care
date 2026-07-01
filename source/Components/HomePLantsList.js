import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TextInput
  } from "react-native";
import React from 'react'

const HomePLantsList = () => {
  return (
    <View style={{height:150,width:"95%",flexDirection:"row",borderWidth:1,borderColor:"#67b004",margin:10,
    borderRadius:30}}>
       <Image
         source={{ uri:"https://bicesflorist.imgix.net/images/itemVariation/Kalanchoe-Pink-19090334028.jpg" }}
         style={{ height:100, width: 100, borderRadius:50, marginTop:20,marginLeft:6 }}
       />
       <View>
       <Text style={{ margin: 15,color:"#1a6e0a",fontSize:18,fontWeight:"bold",marginBottom:5 }}>
        {/* {props.PlantName} */}
        Succulunt
       </Text>
       <View style={{height:100,width:'85%',borderRadius:20,}}>
       <Text style={{ margin: 15,color:"#1a6e0a",fontSize:17,fontWeight:"300",marginTop:5 }}>
        {/* {props.PlantDec} */}
        this is indoor plant 
       </Text>
       </View>
       </View>
     </View>
  )
}

export default HomePLantsList

const styles = StyleSheet.create({})