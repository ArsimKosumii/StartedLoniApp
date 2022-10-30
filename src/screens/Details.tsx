import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import styles from "../styles/styles";
import { useGetPokemonByIdQuery } from "../redux/features/pokemons/pokemons";
import NoData from "../components/NoData";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { useNavigation } from "@react-navigation/native";
import PokemonDetailsNavigator from "../navigation/PokemonDetailsNavigator";

export default function Details({ route }: any) {
  const id = route.params.id;
  const rank = route.params.index;
  const name = route.params.name;
  const skills = route.params.skills;

  const { data, error, isLoading } = useGetPokemonByIdQuery(id);

  const bulbasaur = require("../assets/images/bulbasaur.png");
  const navigation = useNavigation();

  if (error) {
    return <NoData />;
  }

  const pokemon = {
    id,
    rank,
    name,
    skills,
    image: bulbasaur,
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <View style={[styles.content, { backgroundColor: "#71CEB1" }]}>
          <Header navigation={navigation} pokemon={pokemon} />
          <View style={styles.pokemonDetailsContent}>
            <View style={styles.pokemonNameAndRank}>
              <Text style={styles.pokemonNameAndRankText}>{name}</Text>
              <Text style={[styles.pokemonNameAndRankText, { fontSize: 18 }]}>
                {"#" + rank}
              </Text>
            </View>

            <View style={styles.pokemonSkillsAndSthElse}>
              <View style={styles.pokemonSkills}>
                <View style={styles.pokemonSkill}>
                  <Text style={styles.pokemonSkillText}>{"Grass"}</Text>
                </View>
                <View style={[styles.pokemonSkill, { marginLeft: 6 }]}>
                  <Text style={styles.pokemonSkillText}>{"Poison"}</Text>
                </View>
              </View>
              <Text style={[styles.pokemonNameAndRankText, { fontSize: 18 }]}>
                {"Seed Pokemon"}
              </Text>
            </View>

            <View style={styles.pokemonImageView}>
              <View style={styles.pokemonImageCircle}>
                <Image source={bulbasaur} style={styles.pokemonImage} />
              </View>
            </View>
          </View>
          <View style={styles.pokemonDetailsAndStats}>
            <PokemonDetailsNavigator />
          </View>
        </View>
      )}
    </View>
  );
}
