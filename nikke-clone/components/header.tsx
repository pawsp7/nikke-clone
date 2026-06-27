import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useUI } from "../src/context/UIContext";

interface HeaderProps {
  title?: string;
}

export default function Header({ title = "H.S." }: HeaderProps) {
  const { setShowMail } = useUI();

  return (
    <View style={styles.container}>

      {/* Left: Title */}
      <View style={styles.titleBox}>
        <Text style={styles.titleText}>{title}</Text>
      </View>

      {/* Middle: Currency */}
      <View style={styles.currencyRow}>
        <View style={styles.currencyItem}>
          <View style={[styles.currencyIcon, { backgroundColor: "#4488ff" }]} />
          <Text style={styles.currencyText}>110K +</Text>
        </View>

        <View style={styles.currencyItem}>
          <View style={[styles.currencyIcon, { backgroundColor: "#555" }]} />
          <Text style={styles.currencyText}>78991K</Text>
        </View>
      </View>

      {/* Right: Icons */}
      <View style={styles.iconRow}>
        <TouchableOpacity style={styles.mailIcon}
          onPress={() => setShowMail(true)} >
           <View style={styles.mailDot} />
        </TouchableOpacity>
        <View style={styles.icon} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e8e8e8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 32,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },

  titleBox: {
    backgroundColor: "#2a2a2a",
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 6,
    flexShrink: 1,
  },
  titleText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 11,
  },

  currencyRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#9c9c9c",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 12,
    flexShrink: 1,
  },
  currencyItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  currencyIcon: {
    width: 18,
    height: 18,
    borderRadius: 4,
  },
  currencyText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },

  iconRow: {
    flexDirection: "row",
    gap: 8,
    backgroundColor: "#c0c0c0",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  icon: {
    width: 26,
    height: 26,
    backgroundColor: "#dedede",
    borderRadius: 6,
  },
  mailIcon: {
    width: 26,
    height: 26,
    backgroundColor: "#dedede",
    borderRadius: 6,
  },
  mailDot: {
    backgroundColor: "#e70000c1",
    width: 12,
    height: 12,
    borderRadius: 20,
  }
});
