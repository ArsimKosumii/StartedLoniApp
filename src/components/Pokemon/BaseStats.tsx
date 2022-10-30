import { Text, View } from "react-native";
import styles from "./styles";

export default function BaseStats() {
  const staticStatsArray = [
    { title: "HP", amount: 45, color: "#DD6571" },
    { title: "Attack", amount: 60, color: "#7FC99B" },
    { title: "Defense", amount: 48, color: "#DD6571" },
    { title: "Sp.Atk", amount: 65, color: "#7FC99B" },
    { title: "Sp.Def", amount: 65, color: "#7FC99B" },
    { title: "Speed", amount: 45, color: "#DD6571" },
    { title: "Total", amount: 317, color: "#7FC99B" },
  ];

  return (
    <View style={styles.baseStatsView}>
      {staticStatsArray.map((item, i) => (
        <View style={styles.baseStats} key={i}>
          <Text style={[styles.baseStatsTitle, { color: "#35353A" }]}>
            {item.title}
          </Text>
          <Text style={styles.baseStatsNumber}>{item.amount}</Text>

          <View style={styles.baseStatsGrey}>
            <View
              style={[
                styles.baseStatsColorful,
                {
                  width:
                    i == staticStatsArray.length - 1
                      ? `${32}%`
                      : `${item.amount}%`,
                  backgroundColor: item.color,
                },
              ]}
            ></View>
          </View>
        </View>
      ))}
    </View>
  );
}
