import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
const SeasonPlantBottom = () => {
    const navigation = useNavigation();
  return (
    <View>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        borderTopWidth: 2,
        borderColor: "#67b004",
        backgroundColor: '#fff',
        height: 55,
        borderTopLeftRadius:23,
        borderTopRightRadius:23,
        borderLeftWidth: 1,
        borderRightWidth: 1,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Image
          source={require("../../assets/Home1.jpeg")}
          style={styles.TAO_Design}
        />
        {/* <Text>Home</Text> */}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Category");
        }}
      >
        <Image
          source={ require("../../assets/Category1.jpeg")}
          style={styles.TAO_Design5}
        />
        {/* <Text>disease Detect</Text> */}
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => {
          navigation.navigate("SeasonalAdd");
        }}
      >
        <Image
          source={ require("../../assets/PlantAdd2.jpeg")}
          style={styles.TAO_Design1}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("DiseaseDetection");
        }}
      >
        <Image
          source={  require("../../assets/Disease1.jpeg")}
          style={styles.TAO_Design3}
        />
        {/* <Text>disease Detect</Text> */}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Report");
        }}
      >
        <Image
          source={require("../../assets/Analysis1.jpeg")}
          style={styles.TAO_Design2}
        />
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default SeasonPlantBottom

const styles = StyleSheet.create({
    TAO_Design: {
      height: 35,
      width: 35,
      borderRadius: 10,
      marginTop: 8,
    },
    TAO_Design1: {
      height: 37,
      width: 37,
      borderRadius: 11,
      marginTop: 6,
    },
    TAO_Design2: {
      height: 50,
      width: 70,
      borderRadius: 15,
      marginBottom:10,
      
    },
    TAO_Design3: {
      height: 38,
      width: 38,
      borderRadius: 11,
      marginTop: 7,
    },
    TAO_Design5: {
      height: 40,
      width: 40,
      //borderRadius: 10,
      marginTop: 8,
    },
  });