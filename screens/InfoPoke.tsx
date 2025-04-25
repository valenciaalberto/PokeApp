import { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Text, Image, Animated } from "react-native";
import { ActivityIndicator, Pressable } from "react-native";
import { getPokemonList } from "../lib/PokeApi";
import { FlatList, ImageBackground } from "react-native";
import { PokeList } from "../components/PokeList";
import {
  SafeAreaView,
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { logginOut } from "../utils/StoreCredentials ";
import PokeModal from "../components/PokeModal";
import LogoutButton from "../components/LogoutButton";
import ErrorModal from "../components/ErrorModal";
import React from "react";

const BackgroundImg = require("../assets/desert-background.gif");

export default function InfoPoke({ navigation }) {
  const insest = useSafeAreaInsets();

  const [showMoreInfo, setShowModalInfo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [pokemonName, setPokemonName] = useState("");
  const [pokemons, setPokemons] = useState([]);

  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorModalMsg, setErrorModalMsg] = useState();
  useEffect(() => {
    setIsLoading(true);

    getPokemonList({ numberOfPokemons: 150 })
      .then((results) => {
        setPokemons(results);
      })
      .catch((err) => {
        handleError(err);
      });

    setIsLoading(false);
  }, []);

  const handleLogOut = () => {
    logginOut().then((response) => {
      navigation.navigate("Login");
    });
  };

  const handleOnModalOpen = (pokeName) => {
    setShowModalInfo(true);
    setPokemonName(pokeName);
  };

  const handleError = (errMsg) => {
    setShowErrorModal(true);
    setErrorModalMsg(errMsg);
  };
  return (
    <>
      {isLoading || showErrorModal ? (
        <ActivityIndicator
          style={{ alignContent: "center", alignItems: "center" }}
          size="large"
          color="gray"
        ></ActivityIndicator>
      ) : (
        <ImageBackground
          style={styles.container}
          resizeMode="stretch"
          source={BackgroundImg}
        >
          <View
            style={{
              paddingTop: insest.top,
              paddingBottom: insest.bottom,
            }}
          >
            <LogoutButton
              label="Salir"
              align="flex-end"
              color="#FFFFFF"
              onPress={() => {
                handleLogOut();
              }}
            />
            <FlatList
              data={pokemons}
              numColumns={2}
              renderItem={({ item, index }) => (
                <PokeList
                  onClick={(pokeId) => handleOnModalOpen(pokeId)}
                  index={index}
                  pokemon={item}
                />
              )}
            ></FlatList>
          </View>
          {showMoreInfo && (
            <PokeModal
              headerTitle={pokemonName}
              pokeName={pokemonName}
              onClose={() => setShowModalInfo(false)}
            ></PokeModal>
          )}
        </ImageBackground>
      )}
      <ErrorModal
        isVisible={showErrorModal}
        onClose={() => setShowErrorModal(false)}
      >
        <View style={styles.errorModalContainer}>
          <Text style={styles.errorModalText}>{errorModalMsg}</Text>
        </View>
      </ErrorModal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignContent: "center",
  },
  errorModalContainer: {
    alignItems: "center",
    marginTop: "5%",
    position: "relative",
  },
  errorModalText: {
    fontSize: 15,
    fontWeight: "700",
  },
});
