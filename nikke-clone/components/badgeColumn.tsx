import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Character } from "../types/characters";
import { ElementColors } from "../types/attributes";

interface BadgeColumnProps {
  char: Character;
}

export default function BadgeColumn({ char }: BadgeColumnProps) {
  return (
    <View style={styles.badgeColumn}>
      {/* Element Badge */}
      <View
        style={[
          styles.badge,
          { backgroundColor: ElementColors[char.element] }
        ]}
      />

      {/* Weapon Badge */}
      <View style={[styles.badge, styles.whiteBadge]}>
        <Text style={styles.weaponText}>{char.weapon}</Text>
      </View>

      {/* Burst Badge */}
      <View style={[styles.badge, styles.burstBadge]}>
        <Text style={styles.burstText}>{char.burst}</Text>
      </View>

      {/* Extra Badge */}
      <View style={[styles.badge, { backgroundColor: "#a020f0" }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  badgeColumn: {
    position: "absolute",
    top: 6,
    left: 6,
    flexDirection: "column",
    gap: 6,
    zIndex: 10,
  },

  badge: {
    width: 16,
    height: 16,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  whiteBadge: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#000",
  },

  burstBadge: {
    borderWidth: 2,
    borderColor: "#fff",
  },

  burstText: {
    color: "#fff",
    fontSize: 9,
    fontWeight: "bold",
  },

  weaponText: {
    color: "#000",
    fontSize: 7,
    fontWeight: "bold",
    paddingBottom: 1,
  },
});
