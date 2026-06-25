import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";

import Header from "../../components/header";
import Footer from "../../components/footer";
import UnitDisplayRoster from "../../components/unitDisplayRoster";

import { characters } from "../../data/characters";

const { width } = Dimensions.get("window");

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

          {/* Class Filters */}
          <View style={styles.sortLeft}>
            {["I", "II", "III"].map((label, i) => (
              <TouchableOpacity key={i} style={styles.sortBtn}>
                <Text style={styles.sortBtnText}>{label}</Text>
              </TouchableOpacity>
            ))}

            {/* Star Button */}
            <TouchableOpacity style={styles.sortBtn}>
              <Text style={styles.sortBtnText}>★</Text>
            </TouchableOpacity>

            {/* Power Dropdown */}
            <TouchableOpacity style={styles.powerBtn}>
              <Text style={styles.powerBtnText}>Power</Text>
            </TouchableOpacity>
          </View>

          {/* Filter Icon */}
          <TouchableOpacity style={styles.filterBtn}>
            <Text style={styles.filterText}>≡</Text>
          </TouchableOpacity>

        </View>

        {/* Character Grid */}
        <View style={styles.grid}>
          {characters.map((char) => (
            <View key={char.id} style={styles.gridItem}>
            <UnitDisplayRoster char={char} />
            </View>
          ))}
        </View>

      </ScrollView>

      <Footer />
    </View>
  );
}

const CARD_WIDTH = width * 0.22; // smaller than squad screen

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
  // Top Buttons
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
    borderRadius: 10,
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
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: "#cfcfcf",
    alignItems: "center",
  },

  sortLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
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

  powerBtn: {
    backgroundColor: "#444",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 6,
  },
  powerBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },

  filterBtn: {
    width: 42,
    height: 42,
    borderRadius: 6,
    backgroundColor: "#444",
    alignItems: "center",
    justifyContent: "center",
  },
  filterText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
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

  gridItem: {
    width: CARD_WIDTH,
    alignItems: "center",
  },
});
