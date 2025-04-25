import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen
          name="Login"
          options={{
            headerBackButtonDisplayMode: "minimal",
            headerShown: false,
          }}
        />
        <Stack.Screen name="InfoPoke" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
