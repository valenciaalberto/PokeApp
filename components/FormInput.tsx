import { View, Text, TextInput, StyleSheet, Appearance } from "react-native";
import React, { useState } from "react";

type Prop = {
  form: any;
  isDarkMode: boolean;
  onChangeEmail: (string) => void;
  onChangePassword: (any) => void;
};

export default function FormInput({
  form,
  isDarkMode,
  onChangeEmail,
  onChangePassword,
}: Prop) {
  //
  const handleChangeEmail = (value) => {
    onChangeEmail(value);
  };

  const handleChangePassowrd = (value) => {
    onChangePassword(value);
  };

  return (
    <>
      <View style={styles.input}>
        <Text
          style={[styles.inputLabel, { color: isDarkMode ? "#fff" : "#222" }]}
        >
          Email address
        </Text>

        <TextInput
          value={form.email}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          style={styles.inputControl}
          placeholder="test@example.com"
          placeholderTextColor={"#6b7280"}
          onChangeText={(email) => handleChangeEmail(email)}
        ></TextInput>
      </View>
      <View style={styles.input}>
        <Text
          style={[styles.inputLabel, { color: isDarkMode ? "#fff" : "#222" }]}
        >
          Password
        </Text>

        <TextInput
          textContentType="password"
          secureTextEntry
          style={styles.inputControl}
          placeholder="*********"
          placeholderTextColor={"#6b7280"}
          value={form.password}
          onChangeText={(password) => handleChangePassowrd(password)}
        ></TextInput>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 8,
  },
  inputControl: {
    height: 47,
    backgroundColor: "#fff",
    paddingVertical: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
  },
});
