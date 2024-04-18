import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import Checkbox from 'expo-checkbox';

export default function Signup({ navigation }) {

  const [isChecked, setChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [showpassword, setShowPassword] = useState(false);
  const [password2, setPassword2] = useState("");
  const [showpassword2, setShowPassword2] = useState(false);

  function togglePassword() {
    setShowPassword(!showpassword)
  }


  function togglePassword2() {
    setShowPassword2(!showpassword2)
  }


  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "#FFFAFA" }}>
      <View style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "flex-start", marginTop: 100, marginHorizontal: 20 }}>
        <View>
          <Text style={{ fontSize: 24, color: "#ED2F2F", fontWeight: "700", textAlign: "left", marginBottom: 20 }}>CarSentry</Text>
          <Text style={{ fontSize: 24, fontWeight: "800", marginBottom: 5 }}>Sign <Text style={{ color: "#ED2F2F", fontWeight: "500" }}>Up</Text></Text>
          <Text style={{ marginBottom: 16, fontSize: 14 }}>It’s free and easy to setup account</Text>
        </View>
        <View style={{ marginBottom: 20, width: "100%" }}>
          <TextInput style={styles.input} placeholder='Full Name'></TextInput>
        </View>
        <View style={{ marginBottom: 20, width: "100%" }}>
          <TextInput style={styles.input} placeholder='Email Address'></TextInput>
        </View>
        <View style={styles.inputcontainer}>
          <TextInput
            placeholder='Password'
            style={styles.inputpassword}
            value={password}
            secureTextEntry={!showpassword}
            onChangeText={setPassword}
          ></TextInput>
          <FontAwesome name={showpassword ? 'eye-slash' : "eye"} onPress={togglePassword} size={24} style={styles.icon} color="black" />
        </View>

        <View style={[styles.inputcontainer, styles.margininput]}>
          <TextInput
            placeholder='confirm Password'
            style={styles.inputpassword}
            value={password2}
            secureTextEntry={!showpassword2}
            onChangeText={setPassword2}
          ></TextInput>
          <FontAwesome name={showpassword2 ? 'eye-slash' : "eye"} onPress={togglePassword2} size={24} style={styles.icon} color="black" />
        </View>

        <View style={{
          display: "flex", width: "100%",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 10, paddingHorizontal: 10,
        }}>
          <View style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center"
          }}>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
            <Text style={{ marginLeft: 10 }}>I accept the terms & conditions</Text>
          </View>
        </View>

        <TouchableOpacity style={{
          backgroundColor: "#ED2F2F",
          height: 45,
          paddingVertical: 12,
          elevation: 2,
          width: "100%",
          borderRadius: 10,
          paddingLeft: 10,
          marginVertical: 20
        }}>
          <Text style={{ color: "#fff", textAlign: "center", fontSize: 16, fontWeight: "700" }}>SIGN UP</Text>
        </TouchableOpacity>

        <View style={{
          display: "flex", width: "100%",
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center"
        }}>
          <Text style={{
            fontSize: 14,
            color: "#3F3F3F",
          }}>Already have an account?  </Text>
          <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
            <Text style={{ color: "#ED2F2F", fontWeight: "700", marginHorizontal: 10 }}>Sign In</Text>
          </TouchableOpacity>
        </View>







      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 45,
    backgroundColor: "#FFEBEB",
    width: "100%",
    borderColor: "#FFEBEB",
    borderRadius: 10,
    elevation: 2,
    paddingHorizontal: 20
  },
  inputcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFEBEB",
    borderRadius: 10,
    width: "100%",
    height: 45
  },
  inputpassword: {
    flex: 1,
    color: "#000",
    paddingVertical: 10,
    paddingRight: 10,
    paddingHorizontal: 20,
    fontSize: 14,
  },
  icon: {
    position: "absolute",
    right: 10
  },
  margininput:{
    marginTop:20
  }
});
