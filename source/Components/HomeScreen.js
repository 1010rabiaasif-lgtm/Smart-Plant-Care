import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ImageBackground } from "react-native";
//import { TextInput } from "react-native-paper";
import { KeyboardAvoidingView } from "react-native";
import { Image, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
const HomeScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/bckimg2.jpg")}
      style={styles.container}
    >
      <View style={{ flex: 24 }}>
        <View style={{ marginTop: 60, flexDirection: "row", marginLeft: 280 }}>
          <Image
            source={{
              uri: "https://assets.ifttt.com/images/channels/1867275136/icons/monochrome_large.png",
            }}
            style={styles.imgstyle1}
          />
          <Image
            source={{
              uri: "https://www.iconpacks.net/icons/2/free-user-icon-3297-thumb.png",
            }}
            style={styles.imgstyle}
          />
        </View>
      </View>

      <View
        style={{
          flex: 83,
          borderTopRightRadius: 40,
          backgroundColor: "#67b004",
          borderTopLeftRadius: 50,
        }}
      >
        <View
          style={{
            flex: 5,
            marginTop: 10, //backgroundColor: "black",
          }}
        >
          <TextInput
            style={styles.TextInputStyle}
            placeholder="Search"
          ></TextInput>
        </View>
          <View
            style={{
              flex:11,
              height: 150,
              width: "90%",
              backgroundColor: "#fff",
              marginLeft: 20,
              borderRadius: 20,
              marginTop:10
            }}
          >
            <View
              style={{
                height: 50,
                width: "100%",
                backgroundColor: "#edf9d8",
                marginTop: 5,
                marginBottom: 5,
                borderTopRightRadius: 25,
                borderTopLeftRadius: 25,
                justifycontent: "center",

                //alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginLeft: 10,
                  marginTop: 10,
                }}
              >
                Indoor Plants
              </Text>
            </View>
            <View style={{ height: 100, width: "100%", flexDirection: "row" }}>
              <View style={{ height: 100, width: "30%" }}>
                <Image
                  source={{
                    uri: "https://media.istockphoto.com/id/1268045137/photo/potted-snake-plants-inside-a-beautiful-new-flat-or-apartment.jpg?s=612x612&w=0&k=20&c=UX79enZ3Rn2jX5labxi_u2Y0s4X3lfOPfr_UG91yego=",
                  }}
                  style={{ height: 90, Width: "20%" }}
                />
              </View>
              <View style={{ height: 50, width: "70%",}}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    marginLeft: 10,
                    marginTop: 10,
                  }}
                >
                  To Provide Plant Water, Heat and detect disease
                </Text>
                <View  style={{ height: 30, width: "70%" }}>
                <TouchableOpacity >
                <Image
            source={{
              uri: "https://cdn1.iconfinder.com/data/icons/color-bold-style/21/04-512.png",
            }}
            style={styles.imgstyle3}
          />
                </TouchableOpacity>
              </View>
              </View>
              
            </View>
          </View>
          <View
            style={{
              flex:11,
              height: 150,
              width: "90%",
              backgroundColor: "#fff",
              marginLeft: 20,
              borderRadius: 20,
              marginTop:10
            }}
          >
            <View
              style={{
                height: 50,
                width: "100%",
                backgroundColor: "#edf9d8",
                marginTop: 5,
                marginBottom: 5,
                borderTopRightRadius: 25,
                borderTopLeftRadius: 25,
                justifycontent: "center",

                //alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginLeft: 10,
                  marginTop: 10,
                }}
              >
                Outdoor Plants
              </Text>
            </View>
            <View style={{ height: 100, width: "100%", flexDirection: "row" }}>
              <View style={{ height: 100, width: "30%" }}>
                <Image
                  source={{
                    uri: "https://media.istockphoto.com/id/1268045137/photo/potted-snake-plants-inside-a-beautiful-new-flat-or-apartment.jpg?s=612x612&w=0&k=20&c=UX79enZ3Rn2jX5labxi_u2Y0s4X3lfOPfr_UG91yego=",
                  }}
                  style={{ height: 90, Width: "20%" }}
                />
              </View>
              <View style={{ height: 50, width: "70%",}}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    marginLeft: 10,
                    marginTop: 10,
                  }}
                >
                  To Provide Plant Water, Heat and detect disease
                </Text>
                <View  style={{ height: 30, width: "70%" }}>
                <TouchableOpacity >
                <Image
            source={{
              uri: "https://cdn1.iconfinder.com/data/icons/color-bold-style/21/04-512.png",
            }}
            style={styles.imgstyle3}
          />
                </TouchableOpacity>
              </View>
              </View>
              
            </View>
          </View>
          <View
            style={{
              flex:11,
              height: 150,
              width: "90%",
              backgroundColor: "#fff",
              marginLeft: 20,
              borderRadius: 20,
              marginTop:10
            }}
          >
            <View
              style={{
                height: 50,
                width: "100%",
                backgroundColor: "#edf9d8",
                marginTop: 5,
                marginBottom: 5,
                borderTopRightRadius: 25,
                borderTopLeftRadius: 25,
                justifycontent: "center",

                //alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginLeft: 10,
                  marginTop: 10,
                }}
              >
               Analysis Report
              </Text>
            </View>
            <View style={{ height: 100, width: "100%", flexDirection: "row" }}>
              <View style={{ height: 100, width: "30%" }}>
                <Image
                  source={{
                    uri: "https://media.istockphoto.com/id/1268045137/photo/potted-snake-plants-inside-a-beautiful-new-flat-or-apartment.jpg?s=612x612&w=0&k=20&c=UX79enZ3Rn2jX5labxi_u2Y0s4X3lfOPfr_UG91yego=",
                  }}
                  style={{ height: 90, Width: "20%" }}
                />
              </View>
              <View style={{ height: 50, width: "70%",}}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    marginLeft: 10,
                    marginTop: 10,
                  }}
                >
                  To Provide Plant Water, Heat and detect disease
                </Text>
                <View  style={{ height: 30, width: "70%" }}>
                <TouchableOpacity >
                <Image
            source={{
              uri: "https://cdn1.iconfinder.com/data/icons/color-bold-style/21/04-512.png",
            }}
            style={styles.imgstyle3}
          />
                </TouchableOpacity>
              </View>
              </View>
              
            </View>
          </View>
          <View
          style={{
            flex: 2,
            marginTop: 10, //backgroundColor: "black",
          }}
        >
          <TextInput
            style={styles.TextInputStyle}
            placeholder="Search"
          ></TextInput>
        </View>
        
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgstyle: {
    height: 46,
    width: 46,
    borderRadius: 22,
  },
  imgstyle3: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginLeft:180,
    marginBottom:20,
  },
  imgstyle1: {
    height: 40,
    width: 40,
    borderRadius: 19,
    marginTop: 2,
  },
  TextInputStyle: {
    height: 50,
    width: "80%",
    marginLeft: 40,
    borderRadius: 10,
    padding: 15,
    fontSize: 17,
    margin: 5,
    marginTop: 15,
    backgroundColor: "#f0fac3",
  },
});
