import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import InfoPoke from "./screens/InfoPoke";

const Stack = createNativeStackNavigator();

export const UserContext = React.createContext();
export default function App() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <StatusBar style="auto" />
      <NavigationContainer style={[styles.container]}>
        <Stack.Navigator initialRouteName={"Login"}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Info"
            component={InfoPoke}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
