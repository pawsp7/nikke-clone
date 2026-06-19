import React from "react";
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";

import StarRow from "./starRow";
import { Character } from "../types/characters";
import BadgeColumn from "./badgeColumn"; // <-- added

interface UnitDisplayProps {
  char: Character;
  onPress?: () => void;
}

export default function UnitDisplay({ char, onPress }: UnitDisplayProps) {
  return (
    <TouchableOpacity style={styles.unit} activeOpacity={0.8} onPress={onPress}>
      
      {/* Character Image */}
      <ImageBackground source={char.bgImage} style={styles.unitImage}>
        <Image
          source={char.bgImage}
          style={styles.characterArt}
          resizeMode="stretch"
        />

        {/* Badge Column (replaced old block) */}
        <BadgeColumn char={char} />
      </ImageBackground>

      {/* Info Section */}
      <View style={styles.unitInfo}>
        <View style={styles.unitInfoRow}>
          <View>
            <Text style={styles.unitLevelLabel}>Lv.</Text>
            <Text style={styles.unitLevelNum}>467</Text>
          </View>
          <StarRow stars={char.stars} />
        </View>

        <Text style={styles.unitName}>{char.name}</Text>
      </View>

      {/* Footer */}
      <View style={styles.unitFooter}>
        <View style={styles.footerIcon} />
        <View style={styles.footerDivider} />
        <View style={styles.infoCircle}>
          <Text style={styles.infoText}>i</Text>
        </View>
      </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  unit: {
    width: 110,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#e8c060",
    elevation: 6,
  },

  unitImage: {
    height: 140,
  },

  characterArt: {
    width: 110,
    height: 170,
    alignSelf: "center",
  },

  badgeColumn: {
    position: "absolute",
    top: 6,
    left: 6,
    flexDirection: "column",
    gap: 6,
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

  gunText: {
    color: "#000",
    fontSize: 7,
    fontWeight: "bold",
    paddingBottom: 2,
  },

  unitInfo: {
    backgroundColor: "rgba(0, 0, 0, 0.69)",
    paddingHorizontal: 6,
    height: 48,
    justifyContent: "center",
    borderBottomWidth: 5,
    borderBottomColor: "#ffeb3c",
  },

  unitInfoRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },

  unitLevelLabel: {
    fontSize: 10,
    color: "#cd8812",
    fontWeight: "600",
  },

  unitLevelNum: {
    fontSize: 18,
    fontWeight: "600",
    color: "#cd8812",
    textShadowColor: "#000",
    textShadowRadius: 2,
  },

  unitName: {
    fontSize: 12,
    fontWeight: "700",
    color: "#cd8812",
    marginTop: 2,
    textAlign: "right",
    textShadowColor: "#000",
    textShadowRadius: 1,
  },

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
    marginLeft: 12,
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
    marginRight: 12,
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
