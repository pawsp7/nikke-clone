import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";

import Header from "../../components/header";
import Footer from "../../components/footer";
import UnitDisplay from "../../components/unitDisplay";

import { characters } from "../../data/characters";

export default function NikkeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header title="Nikke" />

      <ScrollView style={styles.content}>

        {/* Top Buttons: Liberation / Advise / Nikkepedia */}
        <View style={styles.topRow}>
          {["Liberation", "Advise", "Nikkepedia"].map((label, i) => (
            <TouchableOpacity key={i} style={styles.topBtn}>
              <Text style={styles.topBtnText}>{label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Sorting Row */}
        <View style={styles.sortRow}>
          {["I", "II", "III", "PWR", "ALL"].map((label, i) => (
            <TouchableOpacity key={i} style={styles.sortBtn}>
              <Text style={styles.sortBtnText}>{label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Character Grid (4 columns) */}
        <View style={styles.grid}>
          {characters.map((char) => (
            <UnitDisplay key={char.id} char={char} />
          ))}
        </View>

      </ScrollView>

      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    paddingTop: StatusBar.currentHeight,
  },

  content: {
    flex: 1,
    backgroundColor: "#e8e8e8",
  },

  // -----------------------------
  // Liberation / Advise / Nikkepedia
  // -----------------------------
  topRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 14,
    backgroundColor: "#dcdcdc",
  },
  topBtn: {
    backgroundColor: "#fff",
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 8,
    elevation: 3,
  },
  topBtnText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#333",
  },

  // -----------------------------
  // Sorting Row
  // -----------------------------
  sortRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 12,
    backgroundColor: "#cfcfcf",
  },
  sortBtn: {
    width: 42,
    height: 42,
    borderRadius: 6,
    backgroundColor: "#444",
    alignItems: "center",
    justifyContent: "center",
  },
  sortBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },

  // -----------------------------
  // Character Grid (4 columns)
  // -----------------------------
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 14,
    paddingVertical: 16,
  },
});
