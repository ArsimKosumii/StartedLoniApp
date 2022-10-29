import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "../screens/Account";
import Wishlist from "../screens/Wishlist";
import HomeScreens from "./StackNavigator";

export default function BottomNavigation() {
  const BottomNavigator = createBottomTabNavigator();

  return (
    <BottomNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        headerTitle: "",
      }}
    >
      <BottomNavigator.Screen name="HomeScreens" component={HomeScreens} />
      <BottomNavigator.Screen name="Wishlist" component={Wishlist} />
      <BottomNavigator.Screen name="Account" component={Account} />
    </BottomNavigator.Navigator>
  );
}
