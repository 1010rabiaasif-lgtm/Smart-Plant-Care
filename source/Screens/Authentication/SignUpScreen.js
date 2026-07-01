import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity, ScrollView,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";

//import auth from '../../../firebase/firebase.config';
import {getAuth, createUserWithEmailAndPassword,  } from "firebase/auth";
const SignUpScreen = ({ navigation }) => {

  const [confirmpswd, SetConfirmPassword] = useState(null);
  const [email, SetUserEmail] = useState(null);
  const [password, SetUserPassword] = useState(null);
  const [isActive, setActive] = useState(null);

  const SignUpFunc = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    //const user = userCredential.user;
    // ...
    navigation.replace('Home')
    alert("User signed");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorMessage)
  });
  }
  return (
    <View>
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../../../assets/Im.jpeg")}
          style={{ height: 380, width: 430, marginBottom: 700 }}
        >
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Image
              source={require("../../../assets/LOGO.jpeg")}
              style={{
                height: 100,
                width: 100,
                marginTop: 100,
                borderRadius: 100,
                borderWidth: 9,
                borderColor: "#67b004",
              }}
            />
            <View>
              <Text style={styles.TextStyle}>SignUp</Text>
            </View>
          </View>
        </ImageBackground>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}
        style={{ marginTop: 390, marginLeft: 26, marginRight: 20 }}>
        <TextInput
          placeholder="Enter Email"
          style={styles.TextInputStyle}
          mode="outlined"
          // left={<Image source={{uri:'https://icones.pro/wp-content/uploads/2021/05/icones-de-messagerie-vert.png'}} style={{height:10,width:10,borderRadius:5}} />}
          activeOutlineColor="#33b633"
          outlineColor="gray"
          selectionColor="black"
          keyboardType="email-address"
          label="Email"
          onChangeText={(text) => SetUserEmail(text)}
        />
        <TextInput
          placeholder="Enter Password"
          style={styles.TextInputStyle}
          mode="outlined"
          activeOutlineColor="#33b633"
          outlineColor="gray"
          selectionColor="blue"
          secureTextEntry={true}
          maxLength={8}
          // left={<TextInput.Icon name={() => <Ionicons name="mail" size={30}></Ionicons>} />}
          //   left={<TextInput.Icon name={() => <MaterialCommunityIcons name="account" />}  />}
          onChangeText={(text) => SetUserPassword(text)}
          label="Password"
        />
        <TextInput
          placeholder="Confirm Password"
          style={styles.TextInputStyle}
          mode="outlined"
          activeOutlineColor="#33b633"
          outlineColor="gray"
          selectionColor="black"
          secureTextEntry={true}
          maxLength={8}
          label="Confirm Password"
          onChangeText={(text) => {
            SetConfirmPassword(text);
            setActive(text);
          }}
        />

        {/* Confirm Password Logic */}
        <View
          style={{
            marginTop: 8,
            marginLeft: 10,
          }}
        >
          <Text>
            {isActive !== null &&
              (confirmpswd == password
                ? "Password Matched "
                : "Password Not Matched")}{" "}
          </Text>
        </View>

        {/* SignUp Button Functionality */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginRight: 20,
          }}
        >
          {password === null && (<TouchableOpacity
            style={{
              backgroundColor: "lightgray",
              marginTop: 30,
              height: 60,
              width: 170,
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
            }}

            onPress={() => { SignUpFunc(); }}
          >
            {/* #67b004 */}
            <Text style={{ color: "#fff", fontSize: 20 }}>SignUp</Text>
          </TouchableOpacity>)}

          {password !== null && (
            <TouchableOpacity
              style={{
                backgroundColor: "#67b004",
                marginTop: 30,
                height: 60,
                width: 170,
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
              }}
              //onPress={() => navigation.navigate("Home")}
          onPress={() => {SignUpFunc();}}
            >
              {/* #67b004 */}
              <Text style={{ color: "#fff", fontSize: 20 }}>SignUp</Text>
            </TouchableOpacity>)}
        </View>

        {/* Social Authentications */}
        {/* <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 15,
          }}
        >
          <Image
            source={{
              uri: "https://assets.materialup.com/uploads/82eae29e-33b7-4ff7-be10-df432402b2b6/preview",
            }}
            style={{ height: 50, width: 50, marginLeft: 15, marginRight: 10 }}
          />
          <Image
            source={{
              uri: "https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png",
            }}
            style={{ height: 50, width: 50, marginLeft: 15, marginRight: 30 }}
          />
        </View> */}


        {/* SinIn Screen Moving */}
        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <Text style={{ color: "gray", marginLeft: 40, fontWeight: '500', marginTop: 2 }}>
            {" "}
            Already Have an Account ?{' '}
          </Text>
          <TouchableOpacity
            style={{ marginBottom: 10 }}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={{ color: "#67b004", fontSize: 17, fontWeight: '500' }}>SignIn</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

export default SignUpScreen

const styles = StyleSheet.create({
  TextStyle: {
    color: "#fff",
    fontSize: 33,
  },
  TextInputStyle: {
    // borderColor: "#33b633",
    marginTop: 5,
    height: 62,
    width: "97%",
    // backgroundColor:'black'
  },
  ButtonDesign: {
    height: 50,
    width: 170,
    backgroundColor: "#33b633",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
});