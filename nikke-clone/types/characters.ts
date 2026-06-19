import { ElementName, BurstType, StarCount, WeaponType } from "./attributes";

export interface Character {
  id: string;
  name: string;
  element: ElementName;
  burst: BurstType;
  stars: StarCount;
  weapon: WeaponType;
  bgImage: any;
}
