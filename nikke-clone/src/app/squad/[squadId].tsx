import React from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { characters } from "../../../data/characters";
import { squads } from "../../../data/squads";

export default function SquadScreen() {
  // 1. Get squadId from dynamic route
  const { squadId } = useLocalSearchParams<{ squadId: string }>();

  // 2. Get the list of character names for this squad
  const squadList = squads[squadId] || [];

  // 3. Convert names → character objects
  const squadChars = squadList
    .map((name) => characters.find((c) => c.name === name))
    .filter(Boolean);

  return (
    <View>
      <Text>Squad {squadId}</Text>
      {squadChars.map((char) => (
        <Text key={char!.id}>{char!.name}</Text>
      ))}
    </View>
  );
}
