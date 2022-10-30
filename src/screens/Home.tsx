import React from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import Header from "../components/Header/Header";
import NoData from "../components/NoData";
import Pokemon from "../components/Pokemon/Pokemon";
import { useGetAllPokemonsQuery } from "../redux/features/pokemons/pokemons";
import styles from "../styles/styles";

export default function Home() {
  const { data, error, isLoading } = useGetAllPokemonsQuery({});
  const numberOfColumns = 2;

  if (error) {
    return <NoData />;
  }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <View style={styles.content}>
          <Header />
          <FlatList
            numColumns={numberOfColumns}
            style={{ flex: 1 }}
            data={data?.results}
            renderItem={({ item, index }) => (
              <Pokemon pokemon={item} index={index} />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
}
