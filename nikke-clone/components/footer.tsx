import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationProp } from "@react-navigation/native";

interface FooterProps {
  navigation: NavigationProp<any>;
  active?: string;
}

export default function Footer({ navigation, active = "Squad" }: FooterProps) {
  const navItems = ["Nikke", "Squad", "Lobby", "Inventory", "Recruit"];

  return (
    <View style={styles.bottomNav}>
      {navItems.map((label) => {
        const isActive = label === active;

        return (
          <TouchableOpacity
            key={label}
            style={styles.navItem}
            onPress={() => navigation.navigate(label as never)}
          >
            <View
              style={[
                styles.navIconBox,
                isActive && styles.navIconBoxActive,
              ]}
            />
            <Text
              style={[
                styles.navLabel,
                isActive && styles.navLabelActive,
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#1a1a1a",
    paddingTop: 10,
    paddingBottom: 12,
    paddingHorizontal: 50,
  },
  navItem: {
    alignItems: "center",
    gap: 4,
  },
  navIconBox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    backgroundColor: "#444",
  },
  navIconBoxActive: {
    backgroundColor: "#fff",
  },
  navLabel: {
    color: "#888",
    fontSize: 11,
  },
  navLabelActive: {
    color: "#fff",
  },
});
