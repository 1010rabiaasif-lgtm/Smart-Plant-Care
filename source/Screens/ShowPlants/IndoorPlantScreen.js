import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";

import React, { useEffect, useLayoutEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { collection,  where, onSnapshot, query ,deleteDoc, doc, orderBy,get} from "firebase/firestore";
 //import { collection, deleteDoc, doc, onSnapshot, updateDoc,where } from "firebase/firestore";
import { auth, db,database } from "./../../../firebase/firebase.config";

import IndPlantBottom from "../../Components/IndPlantBottom";
import { useNavigation } from "@react-navigation/native";
//import { query } from "firebase/database";
// import {ref, set} from "firebase/database"
const IndoorPlantScreen = ({ navigtaion }) => {
  const navigation = useNavigation();
  const [data, setdata] = useState([]);
  const [PlantName, setplantName] = useState(null);
  const [PlantDesc, setplantDesc] = useState(null);
   const [SearchActive, setsearchActive] = useState("")
  const user = auth.currentUser;
  const uid = user.uid;

  const SearchFunc=()=>{
      const q = query(
        collection(db, "IndoorPlants"),where("PName", "==", SearchActive )
        //,orderBy("PlantID")
      );
    
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const indoorPlants = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
    
        setdata(indoorPlants);
      });
    
      return () => unsubscribe(); // Cleanup the listener on component unmount
      
    } ;

    
    useEffect(() => {
      const q = query(
        collection(db, 'IndoorPlants'),
        where('UserId', '==', uid),
        orderBy('PlantID')
      );
  
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const indoorPlants = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
  
        setdata(indoorPlants);
      });
  
      return () => unsubscribe(); // Cleanup the listener on component unmount
    }, []);
  
    // Rest of your component code
  
  // useLayoutEffect(() => {
  //   const q = query(
  //     collection(db, "IndoorPlants"),where("UserId", "==", uid)
  //     ,orderBy("PlantID")
  //   );
  
  //   const unsubscribe = onSnapshot(q, (snapshot) => {
  //     const indoorPlants = snapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       data: doc.data(),
  //     }));
  
  //     setdata(indoorPlants);
  //   });
  
  //   return () => unsubscribe(); // Cleanup the listener on component unmount
  // }, []);
  // useLayoutEffect(() => {
  //   const ref = collection(db, "IndoorPlants",where('UserId','==', uid));
  //   onSnapshot(ref, (IndoorPlants) =>
  //     setdata(
  //       IndoorPlants.docs.map((IndoorPlants) => ({
  //         id: IndoorPlants.id,
  //         data: IndoorPlants.data(),
  //       }))
  //     )
      
  //   );
  // });
  

    const DeletePlant = async (item) => {
    const docRef = doc(db, "IndoorPlants", item.id);
    await deleteDoc(docRef)
  //   // .then(() => {
  //   // alert('Plant Deleted Successfully');
  //   // });
    }
   
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
          𝐈𝐧𝐝𝐨𝐨𝐫 𝐏𝐥𝐚𝐧𝐭𝐬
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
            onChangeText={(text) => setsearchActive(text)}
            onSubmitEditing={() => SearchFunc()}
          ></TextInput>
        </View>
      </View>

      {/* Read data from firestore */}
      
      { setsearchActive=== null &&(<ScrollView>
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
               ID:INDRPLNT# {item.data.PlantID}
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

      </ScrollView>)}
      {setsearchActive !==null&&(<ScrollView>
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
               ID:INDRPLNT# {item.data.PlantID}
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
      </ScrollView>)}
      

      <IndPlantBottom />
    </ImageBackground>
  );
};

export default IndoorPlantScreen;

const styles = StyleSheet.create({});
