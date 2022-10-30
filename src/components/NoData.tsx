import { Text, View } from "react-native";
import styles from "../styles/styles";

export default function NoData() {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "FlexoDemi" }}>No Data Found</Text>
    </View>
  );
}
