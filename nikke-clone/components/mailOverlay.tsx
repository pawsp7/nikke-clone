import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
  onClose: () => void;
}

export default function MailOverlay({ onClose }: Props) {
  return (
    <View style={styles.backdrop}>
      <View style={styles.modalBox}>

        {/* HEADER */}
        <View style={styles.headerRow}>
          <Text style={styles.title}>Mailbox</Text>

          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <Text style={styles.closeText}>×</Text>
          </TouchableOpacity>
        </View>

        {/* CONTENT */}
        <View style={styles.content}>
          <Text style={styles.placeholder}>No new messages.</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    position: "absolute",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.55)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    width: "80%",
    backgroundColor: "#1a1a1a",
    borderRadius: 16,
    padding: 20,
    borderWidth: 2,
    borderColor: "#D4A84F", // NIKKE gold frame
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },

  closeText: {
    color: "#fff",
    fontSize: 22,
    marginTop: -2,
  },

  content: {
    paddingTop: 10,
  },

  placeholder: {
    color: "#ccc",
    fontSize: 15,
    textAlign: "center",
  },
});
