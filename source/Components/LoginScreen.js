import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoginScreen = () => {
    const [Fname, SetUserFN] = useState(null);
    const [lname, SetUserLN] = useState(null);
    const [isActiveFN, SetisActiveFN] = useState(false);
    const [isActiveLN, SetisActiveLN] = useState(false);
    return (
      <View style={{ backgroundColor: "black", flex: 1 }}>
        <View style={{ flex: 50, justifyContent: "center" }}>
          <TextInput
            style={styles.TextInputStyle}
            placeholder="Enter First Name"
            onChangeText={(text) => SetUserFN(text)}
            onFocus={() => {
              SetisActiveFN(!isActiveFN);
            }}
            backgroundColor={isActiveFN ? "lightgray" : "gray"}
          ></TextInput>
          <TextInput
            style={styles.TextInputStyle}
            placeholder="Enter Last Name"
            onChangeText={(text) => SetUserLN(text)}
            onFocus={() => {
              SetisActiveLN(!isActiveLN);
            }}
            backgroundColor={isActiveLN ? "lightgray" : "gray"}
          ></TextInput>
        </View>
        <View
          style={{ flex: 50, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity>
            <Image
              source={{
                uri:
                  !isActiveFN && !isActiveLN
                    ? "https://w7.pngwing.com/pngs/263/884/png-transparent-gray-arrow-icon.png"
                    : "https://cdn-icons-png.flaticon.com/512/189/189241.png",
              }}
              style={{ height: 50, width: 50, borderRadius: 30, opacity: 0.6 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
}

export default LoginScreen

const styles = StyleSheet.create({
    TextInputStyle: {
        height: 60,
        width: "80%",
        marginLeft: 40,
        borderRadius: 5,
        padding: 20,
        fontSize: 17,
        margin: 5,
      },
    
})