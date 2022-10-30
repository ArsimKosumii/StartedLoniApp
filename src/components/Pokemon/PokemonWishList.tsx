import { Image, Text, Touchable, TouchableOpacity, View } from "react-native";
import { heartWhiteFilledIcon } from "../../services/icons";
import styles from "./styles";
import { removePokemonFromArray } from "../../redux/features/wishlist/wishlistSlice";
import { useDispatch } from "react-redux";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { fixName } from "../../services/functions";

export default function PokemonWishList({ pokemon }: any) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  function goToPokemonDetails() {
    navigation.dispatch(
      CommonActions.navigate({
        name: "HomeScreens",
        params: {
          screen: "Details",
          params: {
            id: pokemon?.id,
            index: pokemon.rank,
            name: fixName(pokemon?.name),
            skills: ["Grass", "Poison"],
          },
        },
      })
    );
  }

  return (
    <TouchableOpacity
      style={styles.pokemonWish}
      onPress={() => goToPokemonDetails()}
    >
      <Text style={styles.pokemonWishRank}>{"#" + pokemon.rank}</Text>
      <Text style={styles.pokemonWishName}>{pokemon.name}</Text>

      <View style={styles.pokemonWishSkills}>
        <View style={styles.pokemonSkill}>
          <Text style={styles.pokemonSkillText}>{"Grass"}</Text>
        </View>
        <View style={[styles.pokemonSkill, { marginLeft: 6 }]}>
          <Text style={styles.pokemonSkillText}>{"Poison"}</Text>
        </View>
      </View>

      <View style={styles.pokemonWishImageCircle}>
        <Image source={pokemon.image} style={styles.pokemonWishImage} />
      </View>

      <TouchableOpacity
        style={styles.pokemonWishRemove}
        onPress={() => dispatch(removePokemonFromArray(pokemon))}
      >
        <Image
          source={heartWhiteFilledIcon}
          style={styles.pokemonWishRemoveFromListIcon}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
