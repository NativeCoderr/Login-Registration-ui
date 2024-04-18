import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, Pressable } from 'react-native';

export default function Welcome({navigation}) {
  return (
   <View style={{width:"100%", height:"100%", backgroundColor:"#FFFAFA"}}>
    <View style={{flex:1, justifyContent:"center", alignItems:"center", display:"flex"}}>
        <View style={{marginBottom:30}}>
            <Text style={{color:"#3F3F3F", fontSize:20, lineHeight:30}}>Welcome to</Text>
            <Text style={{fontSize:24, fontWeight:700, color:"#ED2F2F"}}>CarSentry</Text>
        </View>
        <View>
            <Image source={require("../img/carsentry.png")} width={330} height={320}/>
        </View>

        <View style={{marginHorizontal:30, marginVertical:40}}>
            <Text style={{fontSize:16, textAlign:"center", lineHeight:24}}>CarSentry offers reliable, professional car repair services, ensuring quality, affordability, and customer satisfaction. Trust us for all your automotive needs.</Text>
        </View>

        <Pressable onPress={()=> navigation.navigate("Login")} style={{
            backgroundColor:"#ED2F2F",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            paddingVertical:10,
            paddingHorizontal:70,
            borderRadius:10,
            height:44,
            elevation:3
        }}>
            <Text style={{color:"#fff", fontWeight:600, }}>Get Started</Text>
        </Pressable>
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
});
