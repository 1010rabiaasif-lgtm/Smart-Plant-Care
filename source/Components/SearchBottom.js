import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
const SearchBottom = () => {
  const navigation = useNavigation();
  const [IsHomeActive, SetHomeActive] = useState(true);
  const [IsSearchActive, SetSearchActive] = useState();
  const [IsDiseaseActive, SetDiseaseActive] = useState();
  const [IsAddActive, SetAddActive] = useState();
  const [IsAnalysisActive, SetAnalysisActive] = useState();
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          borderWidth: 1,
          borderColor: "#67b004",
          backgroundColor: "#fff",
          height: 55,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
            SetHomeActive(true);
            SetSearchActive(false);
            SetDiseaseActive(false);
            SetAnalysisActive(false);
            SetAddActive(false);
          }}
        >
          <Image
            source={(IsHomeActive===true) ? require("../../assets/Home2.jpeg"):require("../../assets/Home1.jpeg")}
            style={styles.TAO_Design}
          />
          {/* <Text>Home</Text> */}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Search");
            SetHomeActive(false);
            SetSearchActive(true);
            SetDiseaseActive(false);
            SetAnalysisActive(false);
            SetAddActive(false);
          }}
        >
          <Image
            source={ (IsSearchActive===true) ? require("../../assets/Search2.jpeg"): require("../../assets/Search1.jpeg")}
            style={styles.TAO_Design}
          />
          {/* <Text>disease Detect</Text> */}
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => {
            navigation.navigate("AddPlant");
            SetHomeActive(false);
            SetSearchActive(false);
            SetDiseaseActive(false);
            SetAnalysisActive(false);
            SetAddActive(true);
          }}
        >
          <Image
            source={(IsAddActive===true) ? require("../../assets/PlantAdd2.jpeg"):require("../../assets/PlantAdd1.jpeg")}
            style={styles.TAO_Design1}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("DiseaseDetection");
            SetHomeActive(false);
            SetSearchActive(false);
            SetDiseaseActive(true);
            SetAnalysisActive(false);
            SetAddActive(false);
          }}
        >
          <Image
            source={ (IsDiseaseActive===true) ? require("../../assets/Disease2.jpeg"): require("../../assets/Disease1.jpeg")}
            style={styles.TAO_Design1}
          />
          {/* <Text>disease Detect</Text> */}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Report");
            SetHomeActive(false);
            SetSearchActive(false);
            SetDiseaseActive(false);
            SetAnalysisActive(true);
            SetAddActive(false);
          }}
        >
          <Image
            source={(IsAnalysisActive===true) ? require("../../assets/Analysis2.jpeg"): require("../../assets/Analysis1.jpeg")}
            style={styles.TAO_Design2}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBottom;

const styles = StyleSheet.create({
  TAO_Design: {
    height: 31,
    width: 31,
    borderRadius: 10,
    marginTop: 8,
  },
  TAO_Design1: {
    height: 32,
    width: 32,
    borderRadius: 11,
    marginTop: 8,
  },
  TAO_Design2: {
    height: 50,
    width: 60,
    borderRadius: 15,
    
  },
});
