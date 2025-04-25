import { Modal, View, Text, Pressable, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";

type Props = {
  isVisible: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

export default function ErrorModal({ isVisible, children, onClose }: Props) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Ooops! un error ha ocurrido!</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" size={20} color={"#fff"} />
          </Pressable>
        </View>
        <View style={styles.childrenContainer}>{children}</View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  modalContent: {
    marginVertical: "45%",
    height: "15%",
    width: "90%",
    marginLeft: "5%",
    backgroundColor: "#FFDEAD",
    borderRadius: 18,
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    height: "20%",
    backgroundColor: "#A9A9A9",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#8B0000",
    fontSize: 16,
  },
  childrenContainer: {
    paddingHorizontal: 10,
  },
});
