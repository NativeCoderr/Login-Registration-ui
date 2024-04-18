import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../screens/Login";
import Welcome from "../screens/Welcome";
import Signup from "../screens/Signup";
const Stack = createNativeStackNavigator();


function Navigation({ navigation }){
    return(
        <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    )

}

export default Navigation;