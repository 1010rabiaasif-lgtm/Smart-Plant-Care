import {
  ImageBackground,
  StyleSheet,
  
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import AddPlantBottom from "../../Components/AddPlantBottom";
const AddPlantScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../../../assets/BgImage.png")}
    >
      <View style={{ flex: 1 }}>
        <View style={styles.ViewStyle}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                // color: "#67b004",
                color: "#1a6e0a",
                marginTop: 60,
                marginLeft:10
              }}
            >
              𝐒𝐞𝐥𝐞𝐜𝐭 𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐲{" "}
            </Text>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <View>
                <TouchableOpacity
                  style={styles.buttondesign}
                  onPress={() => {
                    navigation.navigate("IndoorAdd");
                  }}
                >
                  <Text>
                    Indoor Plants
                  </Text>
                </TouchableOpacity>
                <View>
                  <TouchableOpacity
                    style={styles.buttondesign}
                    onPress={() => {
                      navigation.navigate("SeasonalAdd");
                    }}
                  >
                    <Text>
                      Seasonal Plants
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ marginLeft: 5 }}>
                <TouchableOpacity
                  style={styles.buttondesign}
                  onPress={() => {
                    navigation.navigate("OutdoorAdd");
                  }}
                >
                  <Text>
                    Outdoor Plants
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttondesign}
                  onPress={() => {
                    navigation.navigate("FruitAdd");
                  }}
                >
                  <Text>
                    Fruit Plants
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ marginLeft: 5 }}>
              <TouchableOpacity
                style={styles.buttondesign}
                onPress={() => {
                  navigation.navigate("VegetableAdd");
                }}
              >
                <Text>
                  Vegetable Plants
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <AddPlantBottom />
    </ImageBackground>
  );
};

export default AddPlantScreen;

const styles = StyleSheet.create({
  ViewStyle: {
    height: 500,
    width: 340,
    marginTop: 170,
    // backgroundColor:"#f5f997",
    marginLeft: 25,
    marginRight: 60,
    borderRadius: 50,
    borderWidth: 3,
    // borderColor: "#9acd32",
    borderColor: "#67b004",
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
    height: 55,
    width: 150,
    backgroundColor: "#67b004",
    borderRadius: 20,
    marginTop: 25,
    marginLeft:5,marginRight:5,
    justifyContent:'center',
    alignItems:'center'
  },
});
