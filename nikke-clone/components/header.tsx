import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface HeaderProps {
  title?: string;
  onMailPress?: () => void;
}

export default function Header({ title = "Squad", onMailPress }: HeaderProps) {
  return (
    <View style={styles.topBar}>
      
      {/* Left Label */}
      <View style={styles.squadLabel}>
        <Text style={styles.squadLabelText}>{title}</Text>
      </View>

      {/* Currency Row */}
      <View style={styles.currencyRow}>
        <View style={styles.currencyItem}>
          <View style={[styles.currencyBox, { backgroundColor: "#4488ff" }]} />
          <Text style={styles.currencyText}>110K +</Text>
        </View>

        <View style={styles.currencyItem}>
          <View style={[styles.currencyBox, { backgroundColor: "#555" }]} />
          <Text style={styles.currencyText}>78991K</Text>
        </View>
      </View>

      {/* Icons */}
      <View style={styles.topIconsRow}>
        <TouchableOpacity style={styles.topIcon} onPress={onMailPress} />
        <View style={styles.topIcon} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: "#e8e8e8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },

  squadLabel: {
    backgroundColor: "#2a2a2a",
    paddingHorizontal: 20,
    paddingVertical: 3,
    borderRadius: 6,
  },
  squadLabelText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },

  currencyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginLeft: 50,
    paddingVertical: 4,
    backgroundColor: "#9c9c9c",
  },
  currencyItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  currencyBox: {
    width: 22,
    height: 22,
    borderRadius: 4,
  },
  currencyText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
  },

  topIconsRow: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#c0c0c0",
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  topIcon: {
    width: 28,
    height: 28,
    margin: 6,
    backgroundColor: "#dedede",
    borderRadius: 6,
  },
});
