import { CommonActions, useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { fixName } from "../../services/functions";
import styles from "./styles";

export default function Pokemon({ pokemon, index }: any) {
  const navigation = useNavigation();
  const bulbasaur = require("../../assets/images/bulbasaur.png");

  function goToPokemonDetails() {
    navigation.dispatch(
      CommonActions.navigate({
        name: "Details",
        params: {
          id: pokemon?.url?.substring(34, pokemon?.url?.length - 1),
        },
      })
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.pokemon,
        {
          marginRight: index % 2 !== 0 ? 0 : 10,
        },
      ]}
      onPress={() => goToPokemonDetails()}
    >
      <Text style={styles.pokemonName}>{fixName(pokemon?.name)}</Text>
      <View style={styles.pokemonSkill}>
        <Text style={styles.pokemonSkillText}>{"Grass"}</Text>
      </View>
      <View style={styles.pokemonSkill}>
        <Text style={styles.pokemonSkillText}>{"Poisson"}</Text>
      </View>

      <View style={styles.pokemonImageView}>
        <Image style={styles.pokemonImage} source={bulbasaur} />
      </View>
    </TouchableOpacity>
  );
}
