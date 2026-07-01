import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
// import AddPlantBottom from "../Components/AddPlantBottom";
import { collection, addDoc } from "firebase/firestore";
import { auth ,db } from "./../../../firebase/firebase.config";
const IndoorAddScreen = ({ navigation }) => {
  const [PlantName, setplantName] = useState(null);
  const [PlantDesc, setplantDesc] = useState(null);
  const  [CountID,SetCountID]=useState(1);
  const user = auth.currentUser;
const uid = user.uid;
  // Add a new document with a generated id.
  const SaveData = async () => {
    const docRef = await addDoc(collection(db, "IndoorPlants"), {
      PName: PlantName,
      PDesc: PlantDesc,
      UserId: uid,
      PlantID: CountID,
    });


    setplantName("  ");
    setplantDesc("  ");
    
  //   //console.log("Document written with ID: ", docRef.id);
  };
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../../../assets/BgImage.png")}
    >
      <View style={{ flex: 1 }}>
        <View style={styles.ViewStyle}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                // color: "#67b004",
                color: "#1a6e0a",
                marginTop: 40,
              }}
            >
              {" "}
              𝐈𝐧𝐝𝐨𝐨𝐫 𝐏𝐥𝐚𝐧𝐭𝐬{" "}
            </Text>
          </View>
          <View style={{ 
            justifyContent: "center",
           alignItems: "center" }}>
            <TextInput
              style={styles.TextInputDesign}
              placeholder=" Enter Plant Name"
              onChangeText={(text) => setplantName(text)}
            ></TextInput>
            {/* <TextInput
              style={styles.TextInputDesign}
              //placeholder=" Enter Plant ID"
              onChangeText={(text) => setplantID(text)}
              value={PlantID}
            ></TextInput> */}
            <TextInput
              style={{
                width: 290,
                height: 115,
                padding: 10,
                fontSize: 17,
                borderRadius: 30,
                borderWidth: 3,
                borderColor: "#67b004",
                marginTop: 15,
              }}
              placeholder=" Enter Plant Description"
              onChangeText={(text) => setplantDesc(text)}
            ></TextInput>
          </View>
          <View style={{ marginTop: 40, flex: 1 }}>
            <TouchableOpacity
              style={styles.buttondesign}
              onPress={() => {
                SaveData();
                SetCountID(CountID+1);
                navigation.navigate("IndoorPlants");
              }}
            >
              <Text style={{ alignSelf: "center", marginTop: 4, fontSize: 25 }}>
                𝐀𝐃𝐃
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* <AddPlantBottom /> */}
    </ImageBackground>
  );
};

export default IndoorAddScreen;

const styles = StyleSheet.create({
  ViewStyle: {
    height: 500,
    width: 340,
    marginTop: 160,
    // backgroundColor:"#f5f997",
    marginLeft: 30,
    marginRight: 60,
    borderRadius: 50,
    borderWidth: 4,
    // borderColor: "#9acd32",
    borderColor: "#67b004",
  },
  TextInputDesign: {
    width: 290,
    height: 55,
    padding: 10,
    fontSize: 17,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "#67b004",
    marginTop: 25,
  },
  buttondesign: {
    height: 50,
    width: 150,
    backgroundColor: "#67b004",
    borderRadius: 25,
    marginTop: 25,
    marginLeft: 94,
  },
});
