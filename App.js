//npx expo start --dev-client

import { useState, useEffect } from "react";
import { View, Platform, Text, StyleSheet } from "react-native";
// import stack navigator to move on multiple screens
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import App Screens

//Authentication Screens
import SignInScreen from "./source/Screens/Authentication/SignInScreen";
import SignUpScreen from "./source/Screens/Authentication/SignUpScreen";
import UserProfileScreen from "./source/Screens/Authentication/UserProfileScreen";

// Bottom Bar Screens
import HomeScreen from "./source/Screens/BottomBar/HomeScreen";
import CategoryScreen from "./source/Screens/BottomBar/CategoryScreen";
import AddPlantScreen from "./source/Screens/BottomBar/AddPlantScreen";
import DiseaseDetectionScreen from "./source/Screens/BottomBar/DiseaseDetectionScreen";
import AnalysisReportScreen from "./source/Screens/BottomBar/AnalysisReportScreen";

// Add Plant  To Different Category Screens 
import IndoorAddScreen from "./source/Screens/AddPlants/IndoorAddScreen";
import OutdoorAddScreen from "./source/Screens/AddPlants/OutdoorAddScreen";
import SeasonalAddScreen from "./source/Screens/AddPlants/SeasonalAddScreen";
import FruitAddScreen from "./source/Screens/AddPlants/FruitAddScreen";
import VegetableAddScreen from "./source/Screens/AddPlants/VegetableAddScreen";


// Show Plant Screens
import IndoorPlantScreen from "./source/Screens/ShowPlants/IndoorPlantScreen";
import OutdoorPlantScreen from "./source/Screens/ShowPlants/OutdoorPlantScreen";
import SeasonalPlantScreen from "./source/Screens/ShowPlants/SeasonalPlantScreen";
import FruitPlantScreen from "./source/Screens/ShowPlants/FruitPlantScreen";
import VegetableScreen from "./source/Screens/ShowPlants/VegetableScreen";


// Sensors Data Screens
import IndPlantStatusScreen from "./source/Screens/SensorsData/IndPlantStatusScreen";
import OutPlantStatusScreen from "./source/Screens/SensorsData/OutPlantStatusScreen";
import NotificationScreen from "./source/Screens/SensorsData/NotificationScreen";

import {auth} from  "./firebase/firebase.config";
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>

{/* Authentication Screens */}
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={UserProfileScreen}
          options={{ headerShown: false }}
        />

 {/* Bottom Bar Screens */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Category"
          component={CategoryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddPlant"
          component={AddPlantScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DiseaseDetection"
          component={DiseaseDetectionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Report"
          component={AnalysisReportScreen}
          options={{ headerShown: false }}
        />

 {/* Add Plants Screen */}

        <Stack.Screen
          name="IndoorAdd"
          component={IndoorAddScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OutdoorAdd"
          component={OutdoorAddScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SeasonalAdd"
          component={SeasonalAddScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FruitAdd"
          component={FruitAddScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VegetableAdd"
          component={VegetableAddScreen}
          options={{ headerShown: false }}
        />

{/* Show Plants Screen */}
        <Stack.Screen
          name="IndoorPlants"
          component={IndoorPlantScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OutdoorPlants"
          component={OutdoorPlantScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SeasonalPlants"
          component={SeasonalPlantScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FruitPlants"
          component={FruitPlantScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Vegetable"
          component={VegetableScreen}
          options={{ headerShown: false }}
        />
        
        {/* Sensors Data Screens */}
        <Stack.Screen
          name="IndStatus"
          component={IndPlantStatusScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="OutStatus"
          component={OutPlantStatusScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Notifications"
          component={NotificationScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
