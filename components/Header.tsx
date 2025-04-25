import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";

type Props = {
  source?: string;
  isDarkMode: boolean;
  logoSubTitle: string;
  title: string;
};
export default function Header({
  source,
  logoSubTitle,
  title,
  isDarkMode,
}: Props) {
  return (
    <View style={styles.header}>
      {source && (
        <Image
          alt="logo"
          style={styles.headerImg}
          source={{
            uri: source,
          }}
        />
      )}

      <Text
        style={[styles.subtitle, { color: isDarkMode ? "#929292" : "#929292" }]}
      >
        {logoSubTitle}
      </Text>
      <Text style={[styles.title, { color: isDarkMode ? "#fff" : "#1e1e1e" }]}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 36,
    marginBottom: 15,
  },
  headerImg: {
    width: 200,
    height: 80,
    alignContent: "center",
    alignSelf: "center",
  },

  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 5,
    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 0,
    textAlign: "center",
  },
});
