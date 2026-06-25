import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import Header from "../../components/header"; 
import Footer from "../../components/footer";   

export default function InventoryScreen() {
  const [activeTab, setActiveTab] = useState("Material");
  const [activeCategory, setActiveCategory] = useState("Material");

  const SCREEN_WIDTH = Dimensions.get("window").width;

  const CATEGORY_BAR_WIDTH = 90;
  const GRID_GAP = 10;
  const GRID_COLUMNS = 5;

  const BOX_SIZE =
    (SCREEN_WIDTH - CATEGORY_BAR_WIDTH - GRID_GAP * (GRID_COLUMNS)) /
    GRID_COLUMNS;

  const tabs = ["Consumable", "Material", "Equipment", "Collection"];

  const categories = [
    { key: "X" },
    { key: "Y" },
    { key: "Z" },
    { key: "<3" },
  ];

  // Generate 40 blank boxes
  const blankBoxes = Array.from({ length: 60 });

  return (
    <View style={styles.container}>

      {/* TOP CURRENCY HEADER */}
      <Header />

      {/* INVENTORY HEADER (tabs) */}
      <View style={styles.invHeaderContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={styles.invHeaderButton}
          >
            <Text
              style={[
                styles.invHeaderText,
                activeTab === tab && styles.invHeaderTextActive,
              ]}
            >
              {tab}
            </Text>

            {activeTab === tab && <View style={styles.invHeaderUnderline} />}
          </TouchableOpacity>
        ))}
      </View>

      {/* MAIN CONTENT ROW */}
      <View style={styles.contentRow}>

        {/* LEFT VERTICAL CATEGORY BAR */}
        <View style={styles.categoryBar}>
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat.key}
              style={[
                styles.categoryButton,
                activeCategory === cat.key && styles.categoryActive,
              ]}
              onPress={() => setActiveCategory(cat.key)}
            >
              <Text style={styles.categoryLabel}>{cat.key}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* GRID SCROLL AREA */}
        <ScrollView contentContainerStyle={styles.gridScroll}>
          <View style={[styles.grid, { gap: GRID_GAP }]}>
            {blankBoxes.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.itemBox,
                  {
                    width: BOX_SIZE,
                    height: BOX_SIZE,
                    borderBottomColor: "#D4A84F",
                  },
                ]}
              />
            ))}
          </View>
        </ScrollView>

      </View>

      {/* FOOTER NAV */}
      <Footer />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8e8e8",
  },

  /* INVENTORY HEADER (tabs) */
  invHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#2a2a2a",
  },

  invHeaderButton: {
    alignItems: "center",
  },

  invHeaderText: {
    color: "#888",
    fontSize: 15,
    fontWeight: "600",
  },

  invHeaderTextActive: {
    color: "#fff",
  },

  invHeaderUnderline: {
    marginTop: 4,
    height: 3,
    width: 40,
    backgroundColor: "#D4A84F",
    borderRadius: 2,
  },

  /* MAIN CONTENT ROW */
  contentRow: {
    flex: 1,
    flexDirection: "row",
  },

  /* LEFT CATEGORY BAR */
  categoryBar: {
    width: 42,
    backgroundColor: "#e8e8e8",
    paddingVertical: 12,
    alignItems: "center",
    gap: 14,
  },

  categoryButton: {
    width: 36,
    height: 32,
    backgroundColor: "#646060",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
  },

  categoryActive: {
    borderWidth: 2,
    borderColor: "#D4A84F",
  },

  categoryLabel: {
    color: "#FFFFFF",
    fontSize: 11,
    textAlign: "center",
  },

  /* GRID */
  gridScroll: {
    padding: 12,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  itemBox: {
    backgroundColor: "#c6c5c5",
    borderRadius: 6,
    borderBottomWidth: 5,
  },
});
