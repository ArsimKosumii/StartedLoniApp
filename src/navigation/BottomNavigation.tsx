import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Account from "../screens/Account";
import Wishlist from "../screens/Wishlist";
import HomeScreens from "./StackNavigator";
import styles from "./styles";

export default function BottomNavigation() {
  const BottomNavigator = createBottomTabNavigator();

  const homeIconSelected = require("./../assets/icons/homeIconSelected.png");
  const homeIcon = require("./../assets/icons/homeIcon.png");

  const wishlistIconSelected = require("./../assets/icons/wishlistIconSelected.png");
  const wishlistIcon = require("./../assets/icons/wishlistIcon.png");

  const accountIcon = require("./../assets/icons/accountIcon.png");

  return (
    <BottomNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: {
          alignItems: "center",
          justifyContent: "center",
          marginBottom: -10,
        },
        tabBarItemStyle: {
          alignItems: "center",
          justifyContent: "center",
        },
        tabBarStyle: {
          height: 84,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
        tabBarActiveTintColor: "#7076C9",
        tabBarInactiveTintColor: "#757575",
      }}
    >
      <BottomNavigator.Screen
        name="HomeScreens"
        component={HomeScreens}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? homeIconSelected : homeIcon}
              style={styles.tabBarIcon}
            />
          ),
          tabBarLabel: "Home",
        }}
      />
      <BottomNavigator.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? wishlistIconSelected : wishlistIcon}
              style={styles.tabBarIcon}
            />
          ),
        }}
      />
      <BottomNavigator.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: () => (
            <Image source={accountIcon} style={styles.tabBarIcon} />
          ),
        }}
      />
    </BottomNavigator.Navigator>
  );
}
