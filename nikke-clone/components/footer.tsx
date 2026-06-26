import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router, usePathname } from "expo-router";

export default function Footer() {
  const pathname = usePathname(); // gives you "/nikkes", "/squad", etc.

  const navItems = [
    { label: "Nikke", route: "/nikkes" },
    { label: "Squad", route: "/squad" },
    // { label: "Lobby", route: "/lobby" },
    { label: "Inventory", route: "/inventory" },
    // { label: "Recruit", route: "/recruit" },
  ];

  return (
    <View style={styles.bottomNav}>
      {navItems.map((item) => {
        const isActive = pathname === item.route;

        return (
          <TouchableOpacity
            key={item.route}
            style={styles.navItem}
            onPress={() => router.push(item.route)}
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
              {item.label}
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
