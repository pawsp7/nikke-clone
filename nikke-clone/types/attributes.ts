// -----------------------------
// Bursts
// -----------------------------
export type BurstType = "I" | "II" | "III";

// -----------------------------
// Elements
// -----------------------------
export type ElementName = "Wind" | "Electric" | "Water" | "Fire" | "Iron";

export const ElementColors: Record<ElementName, string> = {
  Wind: "#30a860",
  Electric: "#c030b2",
  Water: "#2033e0",
  Fire: "#cd2828",
  Iron: "#cdac28",
};

// -----------------------------
// Star Count (0–3 filled)
// -----------------------------
export type StarCount = 0 | 1 | 2 | 3;

// -----------------------------
// Weapon Types
// -----------------------------
export type WeaponType = "AR" | "RL" | "MG" | "SMG" | "SG" | "SR";
