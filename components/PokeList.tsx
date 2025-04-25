import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { PokeCard } from "./PokeCard";

type Props = {
  pokemon: any;
  index: number;
  onClick?: (string) => void;
};

export function PokeList({ pokemon, index, onClick }: Props) {
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 50,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  const handleClose = (pokeName) => {
    return onClick(pokeName);
  };

  return (
    <Animated.View style={{ opacity }}>
      <PokeCard
        onClick={(pokeName) => handleClose(pokeName)}
        pokemon={pokemon}
      ></PokeCard>
    </Animated.View>
  );
}
