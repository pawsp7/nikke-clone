import React from "react";
import { View, ScrollView, Text, TouchableOpacity, Alert, StyleSheet, StatusBar } from "react-native";

import Header from "../../components/header";
import Footer from "../../components/footer";
import UnitDisplay from "../../components/unitDisplay";

import { characters } from "../../data/characters";

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
        <View style={styles.squadRow}>
          {["01", "02", "03", "04", "05"].map((t, i) => (
            <View key={i} style={[styles.squad, i === 0 && styles.squadActive]}>
              <Text style={styles.squadText}>{t}</Text>
            </View>
          ))}
        </View>

        {/* Total Power */}
        <View style={styles.powerRow}>
          <View style={styles.powerIcon} />
          <Text style={styles.powerText}>1,056,382</Text>
        </View>

        {/* Unit Rows */}
        <View style={styles.unitsRow}>
          {characters.slice(0, 3).map((char) => (
            <UnitDisplay key={char.id} char={char} />
          ))}
        </View>

        <View style={[styles.unitsRow, { marginTop: 10 }]}>
          {characters.slice(3, 5).map((char) => (
            <UnitDisplay key={char.id} char={char} />
          ))}
        </View>

        {/* Alert Button */}
        <TouchableOpacity
          style={styles.alertBtn}
          onPress={() => Alert.alert("Alert Button pressed")}
        >
          <Text style={styles.alertBtnText}>Alert</Text>
        </TouchableOpacity>

      </ScrollView>

      {/* Auto Button */}
      <View style={styles.autoBtn}>
        <Text style={styles.autoBtnText}>^v  Auto</Text>
      </View>

      <Footer navigation={navigation} active="Squad" />
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
  campaignHeader: {
    alignItems: "center",
    paddingTop: 24,
    paddingBottom: 8,
  },
  campaignTitle: {
    fontSize: 24,
    fontWeight: "900",
    color: "#555",
    letterSpacing: 4,
  },
  campaignSubtitle: {
    fontSize: 12,
    color: "#777",
    marginTop: 4,
  },
  squadRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginTop: 14,
    marginBottom: 12,
  },
  squad: {
    width: 52,
    height: 38,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#444",
  },
  squadActive: {
    backgroundColor: "#4cb8ff",
  },
  squadText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  powerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    gap: 8,
    marginBottom: 18,
    borderRadius: 10,
    marginHorizontal: "45%",
    backgroundColor: "#a6a6a6a7",
  },
  powerIcon: {
    width: 28,
    height: 28,
    backgroundColor: "#f1f1f1",
    borderRadius: 8,
  },
  powerText: {
    fontSize: 22,
    marginLeft: 25,
    fontWeight: "700",
    color: "#333",
  },
  unitsRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 23,
    paddingHorizontal: 10,
  },
  alertBtn: {
    alignSelf: "center",
    marginTop: 16,
    marginBottom: 20,
    backgroundColor: "#e05c2a",
    borderRadius: 10,
    paddingHorizontal: 48,
    paddingVertical: 12,
    elevation: 4,
  },
  alertBtnText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 1,
  },
  autoBtn: {
    position: "absolute",
    bottom: 72,
    right: 20,
    backgroundColor: "#4cb8ff",
    borderRadius: 6,
    paddingHorizontal: 28,
    paddingVertical: 12,
    elevation: 6,
  },
  autoBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
