import React from "react";
import { View, Text, StyleSheet } from "react-native";

type PropType = {
  type: string;
  keyItem?: number;
};

type PropStat = {
  stat: any;
  keyItem?: number;
};
export function BulletListType({ type, keyItem }: PropType) {
  return (
    <View key={keyItem} style={styles.bulletContainer}>
      <Text style={styles.bullet}>•</Text>
      <Text style={styles.textLabel}>{type}</Text>
    </View>
  );
}
export function BulletListStats({ stat, keyItem }: PropStat) {
  return (
    <View key={keyItem} style={styles.bulletContainer}>
      <Text style={styles.bullet}>•</Text>
      <Text style={styles.textLabel}>
        {stat.stat.name + ": " + stat.base_stat}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  bulletContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 5,
  },
  bullet: {
    fontSize: 16,
    marginHorizontal: 10,
    lineHeight: 20,
    color: "#fff",
  },
  textLabel: {
    fontSize: 16,
    lineHeight: 20,
    color: "#fff",
  },
});
