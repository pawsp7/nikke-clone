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
const CARD_WIDTH = SCREEN_WIDTH / 3.3;
const IMAGE_HEIGHT = CARD_WIDTH * 1.45;

interface UnitDisplayProps {
  char: Character;
  onPress?: () => void;
}

export default function UnitDisplay({ char, onPress }: UnitDisplayProps) {
  return (
    <TouchableOpacity
      style={[styles.unit, { width: CARD_WIDTH }]}
      activeOpacity={0.85}
      onPress={onPress}
    >
      {/* Portrait Area */}
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
        <BadgeColumn char={char} />
      </View>

      {/* Footer Bar */}
      <View style={styles.unitFooter}>
        <View style={styles.footerIcon} />
        <View style={styles.footerDivider} />
        <View style={styles.infoCircle}>
          <Text style={styles.infoText}>i</Text>
        </View>
      </View>

      {/* Name (separate from overlay so overlay stays bottom-aligned) */}
      <Text
        style={styles.unitName}
          numberOfLines={1}
          ellipsizeMode="tail">
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
    elevation: 6,
    backgroundColor: "#000",
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
    bottom: 0, // now aligns correctly to bottom of portrait
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

  /* Name (separate from overlay) */
  unitName: {
    position: "absolute",
    bottom: 27, // sits above footer
    right: 6,
    fontSize: 11,
    fontWeight: "600",
    color: "#cd8812",
    textShadowColor: "#000",
    textShadowRadius: 2,
    maxWidth: "85%",
  },

  /* Footer */
  unitFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#4b4941",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderTopWidth: 5,
    borderTopColor: "#d7bc51",
  },

  footerIcon: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#b2b2b2",
  },

  footerDivider: {
    width: 1,
    height: 12,
    backgroundColor: "#b2b2b2",
  },

  infoCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#b2b2b2",
    alignItems: "center",
    justifyContent: "center",
  },

  infoText: {
    color: "#b2b2b2",
    fontSize: 10,
    fontWeight: "bold",
  },
});
