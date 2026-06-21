import React from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";

import Header from "../../components/header";
import Footer from "../../components/footer";
import UnitDisplay from "../../components/unitDisplay";

import { characters } from "../../data/characters";

const { width } = Dimensions.get("window");

export default function NikkeSquad({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header title="Squad" />

      <ScrollView style={styles.content}>

        {/* Campaign Header */}
        <View style={styles.campaignHeader}>
          <Text style={styles.campaignTitle}>CAMPAIGN</Text>
          <Text style={styles.campaignSubtitle}>
            You can view the squad formation for Campaign.
          </Text>
        </View>

        {/* Squad Tabs */}
        <View style={styles.squadTabs}>
          {["01", "02", "03", "04", "05"].map((t, i) => (
            <View key={i} style={[styles.squadTab, i === 0 && styles.squadTabActive]}>
              <Text style={styles.squadTabText}>{t}</Text>
            </View>
          ))}
        </View>

        {/* Total Power */}
        <View style={styles.powerContainer}>
          <View style={styles.powerIcon} />
          <Text style={styles.powerText}>1,056,382</Text>
        </View>

        {/* Formation */}
        <View style={styles.formation}>

          {/* Top Row (3 units) */}
          <View style={styles.topRow}>
            {characters.slice(0, 3).map((char) => (
              <View key={char.id} style={styles.unitWrapper}>
                <UnitDisplay char={char} />
              </View>
            ))}
          </View>

          {/* Bottom Row (2 units) */}
          <View style={styles.bottomRow}>
            {characters.slice(3, 5).map((char) => (
              <View key={char.id} style={styles.unitWrapper}>
                <UnitDisplay char={char} />
              </View>
            ))}
          </View>

        </View>

        {/* Alert Button */}
        <TouchableOpacity
          style={styles.alertButton}
          onPress={() => Alert.alert("Alert Button pressed")}
        >
          <Text style={styles.alertButtonText}>Alert</Text>
        </TouchableOpacity>

      </ScrollView>

      {/* Auto Button */}
      <View style={styles.autoButton}>
        <Text style={styles.autoButtonText}>^v  Auto</Text>
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  /* -----------------------------
     CONTAINER
  ------------------------------*/
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    paddingTop: StatusBar.currentHeight,
  },

  content: {
    flex: 1,
    backgroundColor: "#e8e8e8",
  },

  /* -----------------------------
     CAMPAIGN HEADER (CENTERED)
  ------------------------------*/
  campaignHeader: {
    alignItems: "center",
    paddingTop: 24,
    paddingBottom: 8,
  },
  campaignTitle: {
    fontSize: 22,
    fontWeight: "900",
    color: "#555",
    letterSpacing: 3,
  },
  campaignSubtitle: {
    fontSize: 12,
    color: "#777",
    marginTop: 4,
  },

  /* -----------------------------
     SQUAD TABS (CENTERED)
  ------------------------------*/
  squadTabs: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginTop: 14,
    marginBottom: 12,
  },
  squadTab: {
    width: 48,
    height: 34,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#444",
  },
  squadTabActive: {
    backgroundColor: "#4cb8ff",
  },
  squadTabText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13,
  },

  /* -----------------------------
     TOTAL POWER (CENTERED)
  ------------------------------*/
  powerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginBottom: 18,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    backgroundColor: "#a6a6a6a7",
    alignSelf: "center",
  },
  powerIcon: {
    width: 24,
    height: 24,
    backgroundColor: "#f1f1f1",
    borderRadius: 6,
  },
  powerText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
  },

  /* -----------------------------
     FORMATION (CENTERED)
     3 TOP — 2 BOTTOM
  ------------------------------*/
  formation: {
    marginTop: 10,
    alignItems: "center",
  },

  topRow: {
    width: width * 0.8,
    flexDirection: "row",
    justifyContent: "center",
    gap: 18,
    marginBottom: 14,
  },

  bottomRow: {
    width: width * 0.7,
    flexDirection: "row",
    justifyContent: "center",
    gap: 18,
  },

  unitWrapper: {
    alignItems: "center",
  },

  /* -----------------------------
     ALERT BUTTON
  ------------------------------*/
  alertButton: {
    alignSelf: "center",
    marginTop: 16,
    marginBottom: 20,
    backgroundColor: "#e05c2a",
    borderRadius: 10,
    paddingHorizontal: 48,
    paddingVertical: 12,
    elevation: 4,
  },
  alertButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 1,
  },

  /* -----------------------------
     AUTO BUTTON (FLOATING)
  ------------------------------*/
  autoButton: {
    position: "absolute",
    bottom: 72,
    right: 20,
    backgroundColor: "#4cb8ff",
    borderRadius: 6,
    paddingHorizontal: 28,
    paddingVertical: 12,
    elevation: 6,
  },
  autoButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
