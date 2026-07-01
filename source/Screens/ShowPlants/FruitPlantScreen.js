import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TextInput,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
 import { collection, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { auth, db} from "./../../../firebase/firebase.config";
import { TouchableOpacity } from "react-native";
import FruitPlantBottom from "../../Components/FruitPlantBottom";
import { useNavigation } from "@react-navigation/native";
// import {ref, set} from "firebase/database"
const FruitPlantScreen = ({ navigtaion }) => {
  const navigation = useNavigation();
  const [data, setdata] = useState([]);
  const [PlantName, setplantName] = useState(null);
  const [PlantDesc, setplantDesc] = useState(null);

  // useLayoutEffect(() => {
  //   const ref = collection(db, "FruitPlants");
  //   onSnapshot(ref, (FruitPlants) =>
  //     setdata(
  //       FruitPlants.docs.map((FruitPlants) => ({
  //         id: FruitPlants.id,
  //         data: FruitPlants.data(),
  //       }))
  //     )
      
  //   );
  // });
  

  //   const DeletePlant = async (item) => {
  //   const docRef = doc(db, "FruitPlants", item.id);
  //   await deleteDoc(docRef)
  //   // .then(() => {
  //   // alert('Plant Deleted Successfully');
  //   // });
  //   }
   
  //   // const AddPlant=()=>{
  //   //   set(ref(database, 'IndoorPlant/'), {
  //   //    Moisture:'60%',
  //   //    Humidity:"45%",
  //   //    Temperature:"38%",
  //   //   });
  //   // }
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../../../assets/BgImage.png")}
    >
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#1a6e0a",
            // color:"#67b004",
            marginTop: 55,
            marginLeft: 8,
          }}
        >
          {" "}
          Fruit 𝐏𝐥𝐚𝐧𝐭𝐬
        </Text>
        <View
          style={{
            backgroundColor: "#fff",
            height: 60,
            margin: 30,
            marginTop: 15,
            borderRadius: 30,
            width: "90%",
            flexDirection: "row",
            marginRight: 20,
          }}
        >
          <TextInput
            style={{
              width: 260,
              padding: 20,
              fontSize: 17,
            }}
            placeholder="Search"
          ></TextInput>
        </View>
      </View>

      {/* Read data from firestore */}
      <ScrollView>
        {data.map((item, key) => (
          <View
            key={key}
            style={{
              height: 150,
              width: "95%",
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#67b004",
              margin: 10,
              borderRadius: 30,
            }}
          >
            <Image
              source={{
                uri: "https://bicesflorist.imgix.net/images/itemVariation/Kalanchoe-Pink-19090334028.jpg",
              }}
              style={{
                height: 100,
                width: 100,
                borderRadius: 50,
                marginTop: 20,
                marginLeft: 6,
              }}
            />
            <View style={{ height: 150, width: "58%" }}>
              <Text
                style={{
                  margin: 15,
                  color: "#1a6e0a",
                  fontSize: 19,
                  fontWeight: "bold",
                  marginBottom: 5,
                }}
              >
                {item.data.PName}
              </Text>
              <Text
                style={{
                  margin: 15,
                  color: "#1a6e0a",
                  fontSize: 15,
                  fontWeight: "bold",
                  marginBottom: 5,
                  marginTop:0
                }}
              >
               ID:FRUTPLNT# {key}
              </Text>
              <View style={{ height: 100, width: "85%", borderRadius: 20 }}>
                <Text
                  style={{
                    margin: 15,
                    color: "#1a6e0a",
                    fontSize: 17,
                    fontWeight: "300",
                    marginTop: 5,
                    
                  }}
                >
                  {item.data.PDesc}
                  {/* {props.PlantDec} */}
                  {/* this is indoor plant */}
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 150,
                width: "27%",
                justifyContent: "space-evenly",
              }}
            >

              {/* Delete plant */}
              <TouchableOpacity onPress={()=>DeletePlant(item)}>
                <Image
                  source={require("../../../assets/DeleteImg.png")}
                  style={{ marginTop:2,marginLeft: 8, height: 27, width: 27 }}
                />
              </TouchableOpacity>

              {/* <TouchableOpacity onPress={()=>
                {navigation.navigate("Update")}
                }>
                <Image
                  source={require("../../assets/UpdateImg.png")}
                  style={{ marginTop:3,marginLeft: 6, height: 30, width: 30 }}
                />
              </TouchableOpacity> */}

              <TouchableOpacity  onPress={()=>{
                
               navigation.navigate("SensorsData");
               //AddPlant();
              }}>
                <Image
                  source={require("../../../assets/StatusImage.png")}
                  style={{ height: 45, width: 45 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <FruitPlantBottom />
    </ImageBackground>
  );
};

export default FruitPlantScreen;

const styles = StyleSheet.create({});
