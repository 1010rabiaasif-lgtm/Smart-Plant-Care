import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
// import { ref, onValue } from "firebase/database";
// import { database } from "../../Firebase/firebase.config";
import { ImageBackground } from "react-native";
import { Image } from "react-native";
const OutPlantStatusScreen = ({navigation}) => {
    const [moisture,setmoisture]=useState('');
    const [humidity,sethumidity]=useState('');
    const [temperature,settemperature]=useState('');
  
    // const ReadData = () => {
    //   const starCountRef = ref(database, "IndoorPlant/");
    //   onValue(starCountRef, (snapshot) => {
    //     const data = snapshot.val();
    //     setmoisture(data.Moisture);
    //     sethumidity(data.Humidity);
    //     settemperature(data.Temperature);
    //   });
    // };
    // useEffect(() => {
    //   ReadData();
    // }, [])
  
  
  return (
    <ImageBackground
        style={{ flex: 1 }}
        source={{
          uri: "https://w0.peakpx.com/wallpaper/726/238/HD-wallpaper-abstract-blue-green-lime.jpg",
        }}
        blurRadius={4}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Text
              style={{
                fontWeight: "400",
                fontSize: 22,
                color: "#203201",
                marginTop: 70,
              }}
            >
              𝐏𝐥𝐚𝐧𝐭'𝐬 𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐒𝐭𝐚𝐭𝐮𝐬
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40,
          }}
        >
          <Image
            source={require("../../../assets/MoistureIcon.png")}
            style={{ height: 65, width: 50, borderRadius: 15 }}
          />
          <Text style={{ fontSize: 20 }}>Moisture</Text>
          <Text style={{ fontSize: 20 }}>{moisture}</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 35,
          }}
        >
          <Image
            source={require("../../../assets/HeatIcon.png")}
            style={{ height: 65, width: 50, borderRadius: 15 }}
          />
          <Text style={{ fontSize: 20 }}>Temperature</Text>
          <Text style={{ fontSize: 20 }}>{temperature}</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 35,
          }}
        >
          <Image
            source={require("../../../assets/HumidityIcon.png")}
            style={{ height: 65, width: 64, borderRadius: 15 }}
          />
          <Text style={{ fontSize: 20 }}>Humidity</Text>
          <Text style={{ fontSize: 20 }}>{humidity}</Text>
        </View>
      </ImageBackground>
  )
}

export default OutPlantStatusScreen

const styles = StyleSheet.create({ buttondesign: {
    height: 60,
    width: 200,
    backgroundColor: "#fff",
    borderRadius: 25,
    marginTop: 95,
    marginLeft: 100,
  },});
