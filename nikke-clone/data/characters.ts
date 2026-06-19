import { Character } from "../types/characters";

export const characters: Character[] = [
  {
    id: "1",
    name: "Dorothy",
    element: "Water",
    burst: "I",
    stars: 3,
    weapon: "AR",
    bgImage: require("../assets/images/nikke/Dorothy.jpg"),
  },
  {
    id: "2",
    name: "Liberalio",
    element: "Wind",
    burst: "III",
    stars: 3,
    weapon: "RL",
    bgImage: require("../assets/images/nikke/Libby.jpg"),
  },
  {
    id: "3",
    name: "Anne: Miracle",
    element: "Wind",
    burst: "II",
    stars: 3,
    weapon: "SMG",
    bgImage: require("../assets/images/nikke/Anne.jpg"),
  },
  {
    id: "4",
    name: "Little Mermaid",
    element: "Wind",
    burst: "I",
    stars: 3,
    weapon: "SG",
    bgImage: require("../assets/images/nikke/Siren.jpg"),
  },
  {
    id: "5",
    name: "Diesel",
    element: "Electric",
    burst: "III",
    stars: 2,
    weapon: "MG",
    bgImage: require("../assets/images/nikke/Diesel.jpg"),
  },
];
