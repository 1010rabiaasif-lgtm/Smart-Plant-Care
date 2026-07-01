import {
    ImageBackground,
    StyleSheet,
    
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Image,
  } from "react-native";
import CategoryBottom from "../../Components/CategoryBottom";
  const CategoryScreen = ({ navigation }) => {
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
                // marginTop: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  // color: "#67b004",
                  color: "#1a6e0a",
                  marginTop: 80,
                }}
              >
                 𝐂𝐚𝐭𝐞𝐠𝐨ries{" "}
              </Text>
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <View>
                  <TouchableOpacity
                    style={styles.buttondesign}
                    onPress={() => {
                      navigation.navigate("IndoorPlants");
                    }}
                  >
                    <Text >
                      Indoor Plants
                    </Text>
                  </TouchableOpacity>
                  <View>
                    <TouchableOpacity
                      style={styles.buttondesign}
                      onPress={() => {
                        navigation.navigate("SeasonalPlants");
                      }}
                    >
                      <Text >
                        Seasonal Plants
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{ marginLeft: 5 }}>
                  <TouchableOpacity
                    style={styles.buttondesign}
                    onPress={() => {
                      navigation.navigate("OutdoorPlants");
                    }}
                  >
                    <Text >
                      Outdoor Plants
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttondesign}
                    onPress={() => {
                      navigation.navigate("FruitPlants");
                    }}
                  >
                    <Text >
                      Fruit Plants
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ marginLeft: 5 }}>
                <TouchableOpacity
                  style={styles.buttondesign}
                  onPress={() => {
                    navigation.navigate("Vegetable");
                  }}
                >
                  <Text >
                    Vegetable Plants
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <CategoryBottom/>
      </ImageBackground>
    );
  };
  
  export default CategoryScreen;
  
  const styles = StyleSheet.create({
    ViewStyle: {
      height: 500,
      width: 340,
      marginTop: 170,
      // backgroundColor:"#f5f997",
      marginLeft: 25,
      marginRight: 50,
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
  