
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,ScrollView,
} from "react-native";
import React, {useEffect, useState } from "react";
import { TextInput } from "react-native-paper";

import { getAuth,onAuthStateChanged,signInWithEmailAndPassword } from "firebase/auth";
//import  auth from '../../../firebase/firebase.config'
const SignInScreen = ({navigation}) => {

  const [email, SetUserEmail] = useState(null);
  const [password, SetUserPassword] = useState(null);
 

  useEffect(() => {
    const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    navigation.replace('Home')
    // ...
  } 
});
  },[])
  const SignInFunc =()=>{
    const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    navigation.replace('Home')
    //const user = userCredential.user;
    //alert(user)
    // ...()
    //console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)

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
              <Text style={styles.TextStyle}>SignIn</Text>
            </View>
          </View>
        </ImageBackground>
      </View>

      <ScrollView style={{ marginTop: 395, marginLeft: 21 }}>
      
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

        {/* Forgot Password Functionality */}
        <TouchableOpacity
          style={{ marginLeft: 210 }}
          // onPress={() => resetPassword()}
        >
          <Text style={{ color: "#67b004", fontSize: 16, marginTop: 20 ,fontWeight:'500'}}>
            Forget Password ?
          </Text>
        </TouchableOpacity>

        {/* SignIn Button Functionality */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginRight: 25,
          }}
        >

          {password === null && (
            <TouchableOpacity
              style={{
                backgroundColor: "lightgray",
                marginTop: 50,
                height: 60,
                width: 170,
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {SignInFunc();}}
            >
              {/* #67b004 */}
              <Text style={{ color: "#fff", fontSize: 20 }}>SignIn</Text>
            </TouchableOpacity>
          )}

          {password !== null && (
            <TouchableOpacity
              style={{
                backgroundColor: "#67b004",
                marginTop: 50,
                height: 60,
                width: 170,
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
              }}
             onPress={() => {SignInFunc();}}
            >
              {/* #67b004 */}
              <Text style={{ color: "#fff", fontSize: 20 }}>SignIn</Text>
            </TouchableOpacity>
          )}
        </View>

        {/*  Moving to SignUp Screen  */}
        <View style={{ flexDirection: "row", marginTop: 50, }}>
          <Text style={{ color: "gray", marginLeft: 60 ,fontWeight:'500',marginTop:2}}>
            Don't Have an Account ?{' '} 
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={{ color: "#67b004", fontSize: 17,fontWeight:'500' }}> SignUp</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

export default SignInScreen

const styles = StyleSheet.create({
  TextStyle: {
    color: "#fff",
    fontSize: 35,
  },
  TextInputStyle: {
    // borderColor: "#33b633",
    marginTop: 5,
    height: 60,
    width: "95%",
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