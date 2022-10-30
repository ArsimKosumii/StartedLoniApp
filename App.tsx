import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import BottomNavigation from "./src/navigation/BottomNavigation";
import { store } from "./src/redux/store";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    FlexoDemi: require("./src/assets/fonts/Flexo-Demi.ttf"),
  });

  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </Provider>
  );
}
