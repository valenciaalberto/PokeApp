import { View, Text, Pressable, StyleSheet, FlexAlignType } from "react-native";
import React from "react";

type Props = {
  label: string;
  align: FlexAlignType;
  color: string;
  onPress: () => void;
};
export default function LogoutButton({ label, align, color, onPress }: Props) {
  return (
    <View style={[styles.logOutButtonContent, { alignItems: align }]}>
      <View style={styles.logOutButton}>
        <Pressable onPress={onPress}>
          <Text style={[styles.outOutButtonLabel, { color: color }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logOutButtonContent: {
    marginLeft: "5%",
  },
  logOutButton: {
    backgroundColor: "#f0ca81", // Tomato color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    elevation: 3, // for shadow on Android
    shadowColor: "#000", // for shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginVertical: 15,
  },
  outOutButtonLabel: {
    //color: "#FFFFFF"
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
