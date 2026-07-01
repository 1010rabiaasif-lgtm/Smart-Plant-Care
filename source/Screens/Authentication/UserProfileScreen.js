import { StyleSheet, Text, TouchableOpacity, View,ImageBackground, Image} from 'react-native'
import React, { useEffect } from 'react'

import { getAuth, signOut } from "firebase/auth";

const UserProfileScreen = ({navigation}) => {


    const SignOutFunc =async ()=>{
      const auth = getAuth();
      await signOut(auth).then(() => {
        // Sign-out successful.
        navigation.replace('SignIn')
      }).catch((error) => {
        // An error happened.
        console.log(error)
      });
    }
 
  
  
  return (
    <ImageBackground
    style={{flex:1}}
    // blurRadius={2}
    source={{uri:"https://i.pinimg.com/originals/a5/66/0f/a5660fa585bb9306f6707ef295723009.jpg"}}>
    <View style={{justifyContent:"center",alignItems:"center"}}>
    <Image
            source={require('../../../assets/AccountImg.png')}
            style={styles.ImageStyle}
          />
           <Text style={{fontWeight:"bold",fontSize:20,color:"#fff"}}>
            This Is User Account Screen 
    </Text>
    <TouchableOpacity  
    onPress={()=>{SignOutFunc()}} 
    style={{
      marginTop:50,height:50,width:100,backgroundColor:"#fff",justifyContent:"center",alignItems:"center",borderRadius:25}}>
      <Text > Logout </Text>
    </TouchableOpacity>
    </View>
    </ImageBackground>
  )
}

export default UserProfileScreen

const styles = StyleSheet.create({
  ImageStyle:{
    marginTop:150,
    marginLeft:20,
  height:110,
  width:110
  //borderRadius:25
}
})