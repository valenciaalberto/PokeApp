import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

type Props = {
  pokemon: any;
  onClick?: (string) => void;
};

export function PokeCard({ pokemon, onClick }: Props) {
  const handlePokemonClick = (pokeName) => {
    return onClick(pokeName);
  };

  return (
    <View key={pokemon.name} style={styles.card}>
      <TouchableOpacity onPress={() => handlePokemonClick(pokemon.name)}>
        <Text style={styles.title}>{pokemon.name}</Text>
        <Image source={{ uri: pokemon.img }} style={styles.image}></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderColor: "#ffe4c4",
    borderCurve: "circular",
    borderWidth: 1,
    borderRadius: 15,
    margin: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 5,
    marginBottom: 7,
    color: "#2c2626",
  },
  description: {
    fontSize: 12,
    alignItems: "center",
    color: "#2c2626",
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 120,
    borderRadius: 10,
  },
});
