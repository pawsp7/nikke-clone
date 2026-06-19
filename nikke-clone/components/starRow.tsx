import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { StarCount } from "../types/attributes";

interface StarRowProps {
  stars: StarCount; // 0 | 1 | 2 | 3
}

export default function StarRow({ stars }: StarRowProps) {
  return (
    <View style={styles.row}>
      {[0, 1, 2].map((i) => (
        <Text
          key={i}
          style={i < stars ? styles.starFilled : styles.starEmpty}
        >
          ★
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 2,
  },
  starFilled: {
    fontSize: 11,
    color: "#cd8812",
  },
  starEmpty: {
    fontSize: 11,
    color: "#888",
  },
});
