import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import HomeBottom from "../../Components/HomeBottom";
import { ScrollView } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [SearchText, SetSearchText] = useState("")

  const SearchFunc = (SearchText) => {

    if (SearchText === "IndoorPlant" || SearchText === "indoorplant"
      || SearchText === "indoor" || SearchText === "Indoor"
      || SearchText === "Indoor Plant" || SearchText === "indoor plant") {
      console.log(SearchText);
      navigation.navigate("IndoorPlants");
      //SetSearchText(" ");
    }
    else if (SearchText === "OutdoorPlant" || SearchText === "outdoorplant"
      || SearchText === "outdoor" || SearchText === "Outdoor"
      || SearchText === "Outdoor Plant" || SearchText === "outdoor plant") {
      console.log(SearchText);
      navigation.navigate("OutdoorPlants");
      //SetSearchText(" ");
    }

   else  if (SearchText === "FruitPlant" || SearchText === "fruitplant"
      || SearchText === "Fruit" || SearchText === "fruit"
      || SearchText === "Fruit Plant" || SearchText === "fruit plant") {
      console.log(SearchText);
      navigation.navigate("FruitPlants");
      //SetSearchText(" ");
    }
   else  if (SearchText === "SeasonalPlant" || SearchText === "seasonalplant"
      || SearchText === "Seasonal" || SearchText === "seasonal"
      || SearchText === "Seasonal Plant" || SearchText === "seasonal plant") {
      console.log(SearchText);
      navigation.navigate("SeasonalPlants");
      //SetSearchText(" ");
    }
   else if (SearchText === "VegetablePlant" || SearchText === "vegetableplant"
      || SearchText === "Vegetable" || SearchText === "vegetable"
      || SearchText === "Vegetable Plant" || SearchText === "vegetable plant") {
      console.log(SearchText);
      navigation.navigate("Vegetable");
      //SetSearchText(" ");
  }

  else {
    alert("You Can Only Search These Categories\n 1. IndoorPlant\n 2. OutdoorPlant\n 3. SeasonalPlant\n 4. FruitPlant\n 5. VegetablePlant")
  }
}
  return (
    <ImageBackground
      style={{ flex: 1 }}
      blurRadius={3}
      source={{
        uri: "https://freedesignfile.com/upload/2017/05/Flowers-green-leaves-spring-background.jpg",
      }}
    >
      <View
        style={{
          margin: 10,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            // color: "#67b004",
            color: "#1a6e0a",
            marginTop: 60,
          }}
        >
          {" "}
          𝐒𝐌𝐀𝐑𝐓 𝐏𝐋𝐀𝐍𝐓 𝐂𝐀𝐑𝐄{" "}
        </Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            backgroundColor: "#f0fac3",
            height: 60,
            marginTop: 15,
            marginLeft: 10,
            borderRadius: 30,
            width: "73%",
            flexDirection: "row",
          }}
        >
          <TextInput
            style={{
              width: 260,
              padding: 20,
              fontSize: 17,
            }}
            placeholder="Search Category"
            onChangeText={(text) => SetSearchText(text)}
            onSubmitEditing={() => SearchFunc(SearchText)}
          >

          </TextInput>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            marginRight: 10,
            marginLeft: 5,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
          <Image
            source={{
              uri: "https://assets.ifttt.com/images/channels/1867275136/icons/monochrome_large.png",
            }}
            style={styles.imgstyle1}
          />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image
              source={{
                uri: "https://www.iconpacks.net/icons/2/free-user-icon-3297-thumb.png",
              }}
              style={styles.imgstyle}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <ScrollView style={styles.ViewStyle}>
          {/* Indoor Plant */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("IndoorPlants");
            }}
            style={styles.viewDesign}
          >
            <Image
              source={require("../../../assets/IndoorPlant.jpeg")}
              style={styles.Imagestyle}
            />
            <View>
              <Text
                style={{
                  color: "#1a6e0a",
                  fontSize: 20,
                  fontWeight: "bold",
                  marginTop: 8,
                  marginLeft: 3,
                }}
              >
                {" "}
                𝐈𝐧𝐝𝐨𝐨𝐫 𝐏𝐥𝐚𝐧𝐭𝐬
              </Text>
              <View style={{ marginLeft: 15, marginTop: 15 }}>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                  {" "}
                  - Provide Heat
                </Text>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                  {" "}
                  - Water
                </Text>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                  {" "}
                  - Generate Analysis Report
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* Outdoor Plant */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("OutdoorPlants");
            }}
            style={styles.viewDesign}
          >
            <Image
              source={require("../../../assets/OutdoorPlant.jpeg")}
              style={styles.Imagestyle}
            />
            <View>
              <Text
                style={{
                  color: "#1a6e0a",
                  fontSize: 20,
                  fontWeight: "bold",
                  marginTop: 8,
                  marginLeft: 3,
                }}
              >
                {" "}
                𝐎𝐮𝐭𝐝𝐨𝐨𝐫 𝐏𝐥𝐚𝐧𝐭𝐬
              </Text>
              <View style={{ marginLeft: 15, marginTop: 15 }}>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                  {" "}
                  - Provide Water{" "}
                </Text>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                  {" "}
                  - Sprinkle Upper Leaves
                </Text>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                  {" "}
                  - Generate Analysis Report
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* Vegetable Plants */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Vegetable");
            }}
            style={styles.viewDesign}
          >
            <Image
              source={require("../../../assets/OutdoorPlant.jpeg")}
              style={styles.Imagestyle}
            />
            <View>
              <Text
                style={{
                  color: "#1a6e0a",
                  fontSize: 20,
                  fontWeight: "bold",
                  marginTop: 8,
                  marginLeft: 3,
                }}
              >
                Vegetable Plants
              </Text>
              <View style={{ marginLeft: 15, marginTop: 15 }}>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                  {" "}
                  - Detect Plant  Disease{" "}
                </Text>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                  {"     "}
                  - Tomato Plant Leaves
                </Text>

              </View>
            </View>
          </TouchableOpacity>
          {/* Anaylsis Report */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Report");
            }}
            style={styles.viewDesign}
          >
            <Image
              source={require("../../../assets/AnalysisReeport.jpeg")}
              style={styles.Imagestyle}
            />
            <View>
              <Text
                style={{
                  color: "#1a6e0a",
                  fontSize: 20,
                  fontWeight: "bold",
                  marginTop: 8,
                  marginLeft: 8,
                }}
              >
                {" "}
                𝐀𝐧𝐚𝐥𝐲𝐬𝐢𝐬 𝐑𝐞𝐩𝐨𝐫𝐭
              </Text>
              <View style={{ marginLeft: 15, marginTop: 13 }}>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                  {" "}
                  - Generate Analysis Report
                </Text>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                  {" "}
                  - Time is served To Provide{" "}
                </Text>
                <Text style={{ fontWeight: "bold", fontSize: 14 }}>        Water</Text>
                <Text style={{ fontWeight: "bold", fontSize: 14 }}>        Heat </Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <HomeBottom />
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  imgstyle: {
    height: 47,
    width: 47,
    borderRadius: 22,
  },
  imgstyle1: {
    height: 40,
    width: 40,
    borderRadius: 19,
    marginTop: 2,
  },
  ViewStyle: {
    height: 545,
    width: "98%",
    marginTop: 15,
    marginLeft: 4,
    // marginRight: 15,
    borderRadius: 50,
    // borderWidth: 3,
  },
  TextInputDesign: {
    width: 300,
    height: 45,
    padding: 10,
    fontSize: 17,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "#67b004",
    marginTop: 10,
  },
  buttondesign: {
    height: 40,
    width: 140,
    backgroundColor: "#67b004",
    borderRadius: 20,
    marginTop: 15,
  },
  viewDesign: {
    //flex: 20,
    margin: 5,
    height: 140,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#1a6e0a",
    backgroundColor: "",
    flexDirection: "row",
  },
  Imagestyle: {
    height: 100,
    width: 100,
    borderRadius: 60,
    marginLeft: 10,

    marginTop: 18,
    borderWidth: 2,
    borderColor: "#1a6e0a",
  },
});
