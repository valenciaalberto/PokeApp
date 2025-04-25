import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import React from "react";
type Props = {
  label: string;
  onPress: () => void;
};
export default function TouchableButton({ label, onPress }: Props) {
  return (
    <View>
      <TouchableOpacity style={styles.formAction} onPress={() => onPress()}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{label}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#075eec",
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#07eec",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  formAction: {
    marginVertical: 24,
  },
});
