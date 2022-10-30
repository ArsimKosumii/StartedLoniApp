import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import BaseStats from "../components/Pokemon/BaseStats";

export default function PokemonDetailsNavigator() {
  const Tabs = createMaterialTopTabNavigator();
  return (
    <Tabs.Navigator
      initialRouteName="BaseStats"
      screenOptions={{
        tabBarPressOpacity: 0.3,
        swipeEnabled: false,
        tabBarPressColor: "#ffffff",
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: "FlexoDemi",
        },
        tabBarStyle: {
          elevation: 0,
          width: "100%",
          padding: 0,
          margin: 0,
        },
      }}
    >
      <Tabs.Screen name="About" component={BaseStats} />
      <Tabs.Screen
        name="BaseStats"
        component={BaseStats}
        options={{ tabBarLabel: "Base Stats" }}
      />
      <Tabs.Screen name="Evolution" component={BaseStats} />
      <Tabs.Screen name="Moves" component={BaseStats} />
    </Tabs.Navigator>
  );
}
