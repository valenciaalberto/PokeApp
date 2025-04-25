import { View, Text, StyleSheet } from "react-native";
import React from "react";

type Props = {
  errorMsg: string;
};
export default function ErrorMsg({ errorMsg }: Props) {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>{errorMsg}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    marginTop: 10,
  },
  errorText: {
    color: "#FF0000",
  },
});
