import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SquadScreen from "../app/squad";
import NikkeScreen from "../app/nikkes";
import InventoryScreen from "../app/inventory";

const Tabs = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="Squad" component={SquadScreen} />
      <Tabs.Screen name="Nikkes" component={NikkeScreen} />
      <Tabs.Screen name="Inventory" component={InventoryScreen} />
    </Tabs.Navigator>
  );
}
