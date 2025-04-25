import React from "react";
import {
  Modal,
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  ActivityIndicator,
  FlatList,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useEffect, useState } from "react";
import { getPokemonDetails } from "../lib/PokeApi";

import { BulletListStats, BulletListType } from "./BulletList";
import ErrorModal from "./ErrorModal";

type Props = {
  onClose: () => void;
  pokeName: string;
  headerTitle?: string;
};

export default function PokeModal({ onClose, pokeName, headerTitle }: Props) {
  const [pokemonInformation, setPokemonInformation] = useState(null);

  const [isShowingError, setIsShowingError] = useState(false);
  const [errorMsg, setErrorMsg] = useState();

  useEffect(() => {
    try {
      getPokemonDetails(pokeName)
        .then((results) => {
          setPokemonInformation(results);
        })
        .catch((err) => {
          handleError(err);
        });
    } catch (err) {
      handleError(err);
    }
  }, []);

  const handleOnClose = () => {
    setPokemonInformation(null);
    onClose();
  };

  const handleError = (errMsg) => {
    errMsg == "" ? setIsShowingError(false) : setIsShowingError(true);
    setErrorMsg(errMsg);
  };

  return (
    <Modal animationType="slide" transparent={true}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{headerTitle}</Text>
          <Pressable onPress={handleOnClose}>
            <MaterialIcons name="close" size={25} color={"#fff"} />
          </Pressable>
        </View>
        {pokemonInformation == null || isShowingError ? (
          <>
            <ActivityIndicator size="large" color="gray"></ActivityIndicator>
            <ErrorModal
              isVisible={isShowingError}
              onClose={() => handleError("")}
            >
              <Text style={styles.errorModalText}>{errorMsg}</Text>
            </ErrorModal>
          </>
        ) : (
          <>
            <View
              style={{
                marginLeft: "5%",
                marginVertical: 10,
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: pokemonInformation.img }}
                style={[styles.image, { alignItems: "center" }]}
              ></Image>
            </View>
            <View style={{ marginLeft: "15%", alignItems: "flex-start" }}>
              <Text style={styles.contentText}>
                Experiencia Base: {pokemonInformation.base_experience}
              </Text>
              <Text style={styles.contentText}>
                Altura: {pokemonInformation.height}
              </Text>
              <Text style={styles.contentText}>Typo(s):</Text>
              <FlatList
                data={pokemonInformation.types}
                numColumns={1}
                renderItem={({ item, index }) => (
                  <BulletListType keyItem={index} type={item.type.name} />
                )}
              ></FlatList>
              <Text style={styles.contentText}>Estadisticas:</Text>
              <FlatList
                data={pokemonInformation.stats}
                numColumns={1}
                renderItem={({ item, index }) => (
                  <BulletListStats keyItem={index} stat={item} />
                )}
              ></FlatList>
            </View>
          </>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    marginVertical: "15%",
    marginLeft: "5%",
    height: "70%",
    width: "90%",
    backgroundColor: "#25292e",
    borderRadius: 18,
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    height: "10%",
    backgroundColor: "#464C55",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
  contentText: {
    color: "#fff",
  },
  image: {
    width: 150,
    height: 120,
    borderRadius: 10,
  },
  errorModalText: {
    fontSize: 15,
    fontWeight: "700",
  },
});
