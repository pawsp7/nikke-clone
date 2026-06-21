import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import StarRow from "./starRow";
import BadgeColumn from "./badgeColumn";
import { Character } from "../types/characters";

const SCREEN_WIDTH = Dimensions.get("window").width;

// ⭐ Smaller width for 4-column roster grid
const CARD_WIDTH = SCREEN_WIDTH * 0.22;

// ⭐ Shorter height than squad cards
const IMAGE_HEIGHT = CARD_WIDTH * 1.5;

interface UnitDisplayRosterProps {
  char: Character;
  onPress?: () => void;
}

export default function UnitDisplayRoster({ char, onPress }: UnitDisplayRosterProps) {
  return (
    <TouchableOpacity
      style={[styles.unit, { width: CARD_WIDTH }]}
      activeOpacity={0.85}
      onPress={onPress}
    >
      {/* Portrait */}
      <View style={[styles.unitImage, { height: IMAGE_HEIGHT }]}>
        <Image
          source={char.bgImage}
          style={[styles.characterArt, { width: CARD_WIDTH, height: IMAGE_HEIGHT }]}
          resizeMode="cover"
        />

        {/* Transparent Info Overlay (Lv + Stars) */}
        <View style={styles.infoOverlay}>
          <View style={styles.infoLeft}>
            <Text style={styles.unitLevelLabel}>Lv.</Text>
            <Text style={styles.unitLevelNum}>467</Text>
          </View>

          <View style={{ marginBottom: 6 }}>
            <StarRow stars={char.stars} />
          </View>
        </View>

        {/* Badge Column */}
        <View style={{ transform: [{ scale: 0.8 }], transformOrigin: "top left" }}>
            <BadgeColumn char={char} />
        </View>

      </View>

      {/* Name (floating above bottom) */}
      <Text
        style={styles.unitName}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {char.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  unit: {
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#e8c060",
    backgroundColor: "#000",
    elevation: 5,
    borderBottomWidth: 4,
    borderBottomColor: "#d7bc51",
  },

  unitImage: {
    width: "100%",
    justifyContent: "flex-start",
  },

  characterArt: {
    position: "absolute",
    top: 0,
    left: 0,
  },

  /* Transparent Overlay (Lv + Stars) */
  infoOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 6,
    paddingVertical: 4,
    backgroundColor: "rgba(0,0,0,0.55)",
  },

  infoLeft: {
    flexDirection: "column",
  },

  unitLevelLabel: {
    fontSize: 10,
    color: "#cd8812",
    fontWeight: "600",
  },

  unitLevelNum: {
    fontSize: 16,
    fontWeight: "700",
    color: "#cd8812",
    textShadowColor: "#000",
    textShadowRadius: 2,
  },

  /* Name (floating above bottom) */
  unitName: {
    position: "absolute",
    bottom: 27,
    right: 6,
    fontSize: 11,
    fontWeight: "600",
    color: "#cd8812",
    textShadowColor: "#000",
    textShadowRadius: 2,
    maxWidth: "85%",
  },
});
